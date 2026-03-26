#!/usr/bin/env node

/**
 * GLSL Docs MCP Server
 *
 * Provides searchable shader documentation for GLSL, Three.js, and React Three Fiber.
 * Uses a table-of-contents + on-demand fetch architecture:
 * - Lightweight index files with summaries and technique tags
 * - Keyword search across entries
 * - Full article fetch when summary isn't enough
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync, readdirSync, existsSync } from 'fs';
import https from 'https';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DATA_DIR = join(__dirname, '..', 'data');
const INDEX_DIR = join(DATA_DIR, 'index');
const PROJECT_DIR = join(DATA_DIR, 'project');

// --- Types ---

interface IndexEntry {
  title: string;
  url: string;
  techniques: string[];
  domain: string;
  summary: string;
  source_file: string;
}

// --- Index Parser ---

function parseIndexFile(filePath: string): IndexEntry[] {
  const content = readFileSync(filePath, 'utf-8');
  const entries: IndexEntry[] = [];
  const fileName = filePath.split('/').pop() || '';

  // Split by ## headers (entries)
  const sections = content.split(/^## /m).slice(1);

  for (const section of sections) {
    const lines = section.trim().split('\n');
    const title = lines[0]?.trim() || '';

    let url = '';
    let techniques: string[] = [];
    let domain = '';
    let summary = '';

    for (const line of lines.slice(1)) {
      const trimmed = line.trim();
      if (trimmed.startsWith('- **url**:')) {
        url = trimmed.replace('- **url**:', '').trim();
      } else if (trimmed.startsWith('- **techniques**:')) {
        techniques = trimmed
          .replace('- **techniques**:', '')
          .trim()
          .split(',')
          .map((t) => t.trim().toLowerCase());
      } else if (trimmed.startsWith('- **domain**:')) {
        domain = trimmed.replace('- **domain**:', '').trim().toLowerCase();
      } else if (trimmed.startsWith('- **summary**:')) {
        summary = trimmed.replace('- **summary**:', '').trim();
      }
    }

    if (title) {
      entries.push({ title, url, techniques, domain, summary, source_file: fileName });
    }
  }

  return entries;
}

function loadAllEntries(): IndexEntry[] {
  const entries: IndexEntry[] = [];

  // Load index files
  if (existsSync(INDEX_DIR)) {
    const files = readdirSync(INDEX_DIR).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      entries.push(...parseIndexFile(join(INDEX_DIR, file)));
    }
  }

  // Load project files
  if (existsSync(PROJECT_DIR)) {
    const files = readdirSync(PROJECT_DIR).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      entries.push(...parseIndexFile(join(PROJECT_DIR, file)));
    }
  }

  return entries;
}

// --- Search ---

function searchEntries(
  entries: IndexEntry[],
  query: string,
  domainFilter?: string[]
): IndexEntry[] {
  const queryTerms = query
    .toLowerCase()
    .split(/\s+/)
    .filter((t) => t.length > 1);

  if (queryTerms.length === 0 && !domainFilter) return entries.slice(0, 20);

  return entries
    .map((entry) => {
      let score = 0;

      // Domain filter — exclude non-matching entries
      if (domainFilter && domainFilter.length > 0) {
        if (!domainFilter.includes(entry.domain)) return { entry, score: -1 };
      }

      // Score by query match
      for (const term of queryTerms) {
        const titleLower = entry.title.toLowerCase();
        const summaryLower = entry.summary.toLowerCase();

        // Title match (highest weight)
        if (titleLower.includes(term)) score += 10;

        // Technique tag match (high weight)
        if (entry.techniques.some((t) => t.includes(term))) score += 8;

        // Domain match
        if (entry.domain.includes(term)) score += 5;

        // Summary match
        if (summaryLower.includes(term)) score += 3;
      }

      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 15)
    .map((r) => r.entry);
}

function formatResults(results: IndexEntry[]): string {
  if (results.length === 0) return 'No matching entries found.';

  return results
    .map(
      (e) =>
        `## ${e.title}\n- **url**: ${e.url}\n- **techniques**: ${e.techniques.join(', ')}\n- **domain**: ${e.domain}\n- **summary**: ${e.summary}`
    )
    .join('\n\n');
}

function formatToc(entries: IndexEntry[]): string {
  // Group by source file
  const grouped = new Map<string, IndexEntry[]>();
  for (const entry of entries) {
    const group = grouped.get(entry.source_file) || [];
    group.push(entry);
    grouped.set(entry.source_file, group);
  }

  let result = '# Shader Resources Table of Contents\n\n';
  for (const [file, fileEntries] of grouped) {
    result += `## ${file.replace('.md', '')}\n`;
    for (const entry of fileEntries) {
      result += `- [${entry.title}](${entry.url}) — ${entry.domain}\n`;
    }
    result += '\n';
  }

  return result;
}

// --- URL Fetcher ---

function fetchUrlContent(targetUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    // Convert GitHub URLs to raw content
    let resolvedUrl = targetUrl;
    const ghMatch = targetUrl.match(
      /github\.com\/([^/]+)\/([^/]+)\/(blob|tree)\/([^/]+)\/(.*)/
    );
    if (ghMatch) {
      resolvedUrl = `https://raw.githubusercontent.com/${ghMatch[1]}/${ghMatch[2]}/${ghMatch[4]}/${ghMatch[5]}`;
    }

    const client = resolvedUrl.startsWith('https') ? https : http;
    const request = client.get(resolvedUrl, { headers: { 'User-Agent': 'glsl-docs-mcp/1.0' } }, (res) => {
      // Follow redirects
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fetchUrlContent(res.headers.location as string).then(resolve).catch(reject);
        return;
      }

      if (res.statusCode && res.statusCode >= 400) {
        reject(new Error(`HTTP ${res.statusCode} for ${resolvedUrl}`));
        return;
      }

      let data = '';
      res.on('data', (chunk: Buffer) => { data += chunk.toString(); });
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
    request.on('error', reject);
    request.setTimeout(15000, () => {
      request.destroy();
      reject(new Error('Request timed out'));
    });
  });
}

// Simple HTML to text conversion for fetched articles
function htmlToText(html: string): string {
  return html
    // Remove script/style blocks
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    // Convert headers
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n')
    // Convert code blocks
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, '```\n$1\n```\n')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    // Convert paragraphs and breaks
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<p[^>]*>/gi, '\n')
    .replace(/<\/p>/gi, '\n')
    // Convert lists
    .replace(/<li[^>]*>/gi, '- ')
    .replace(/<\/li>/gi, '\n')
    // Convert links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    // Convert images (keep alt text)
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, '[$1]')
    // Strip remaining HTML tags
    .replace(/<[^>]+>/g, '')
    // Decode HTML entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    // Clean up excessive whitespace
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// --- MCP Server ---

const allEntries = loadAllEntries();

const server = new Server(
  {
    name: 'glsl-docs',
    version: '1.0.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

const tools: Tool[] = [
  {
    name: 'search_glsl_fundamentals',
    description:
      'Search GLSL shader documentation for language fundamentals, math functions, SDFs, noise, lighting models, and general shader techniques. Returns summaries with source URLs for deeper reading.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'Search terms (e.g. "smooth minimum", "fbm noise", "SDF 2D circle", "blinn phong")',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'search_particle_shaders',
    description:
      'Search for noise functions, particle systems, and procedural generation techniques in GLSL. Covers perlin, simplex, voronoi, curl noise, FBM, domain warping.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'Search terms (e.g. "curl noise", "voronoi", "domain warping", "particle flow")',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'search_r3f_shader_setup',
    description:
      'Search for React Three Fiber and Three.js shader integration patterns. Covers shaderMaterial, useFrame, uniforms, CustomShaderMaterial, drei helpers.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'Search terms (e.g. "shaderMaterial uniforms", "useFrame animation", "drei helpers")',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'search_threejs_material_modification',
    description:
      'Search for Three.js material modification and extension patterns. Covers CustomShaderMaterial, onBeforeCompile, shader injection, material layering.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description:
            'Search terms (e.g. "extend standard material", "onBeforeCompile", "shader chunks")',
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_all_shader_resources',
    description:
      'Get the full table of contents of all indexed shader resources. Returns titles and URLs organized by category. Use this to discover what documentation is available.',
    inputSchema: {
      type: 'object',
      properties: {},
      required: [],
    },
  },
  {
    name: 'fetch_shader_article',
    description:
      'Fetch the full content of a shader article or documentation page by URL. Use this after finding a relevant entry via search to get the complete content. Works with IQ articles, GitHub READMEs, and other shader documentation sites.',
    inputSchema: {
      type: 'object',
      properties: {
        url: {
          type: 'string',
          description: 'The URL to fetch (from a search result or known resource)',
        },
      },
      required: ['url'],
    },
  },
];

// Tool handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'search_glsl_fundamentals': {
        const query = (args?.query as string) || '';
        const results = searchEntries(allEntries, query, [
          'glsl',
          'sdf',
          'math',
          'lighting',
          'noise',
          'texturing',
        ]);
        return {
          content: [{ type: 'text', text: formatResults(results) }],
        };
      }

      case 'search_particle_shaders': {
        const query = (args?.query as string) || '';
        const results = searchEntries(allEntries, query, ['noise']);
        // Also search without domain filter but with noise-related terms
        const broadResults = searchEntries(
          allEntries,
          `${query} noise particle fbm curl`,
        );
        // Merge and deduplicate
        const seen = new Set(results.map((r) => r.title));
        for (const r of broadResults) {
          if (!seen.has(r.title)) {
            results.push(r);
            seen.add(r.title);
          }
        }
        return {
          content: [{ type: 'text', text: formatResults(results.slice(0, 15)) }],
        };
      }

      case 'search_r3f_shader_setup': {
        const query = (args?.query as string) || '';
        const results = searchEntries(allEntries, query, ['threejs-r3f']);
        return {
          content: [{ type: 'text', text: formatResults(results) }],
        };
      }

      case 'search_threejs_material_modification': {
        const query = (args?.query as string) || '';
        const results = searchEntries(allEntries, query, ['threejs-r3f']);
        // Also include broad search for material-specific terms
        const broadResults = searchEntries(
          allEntries,
          `${query} material extend onBeforeCompile CSM`,
        );
        const seen = new Set(results.map((r) => r.title));
        for (const r of broadResults) {
          if (!seen.has(r.title)) {
            results.push(r);
            seen.add(r.title);
          }
        }
        return {
          content: [{ type: 'text', text: formatResults(results.slice(0, 15)) }],
        };
      }

      case 'get_all_shader_resources': {
        return {
          content: [{ type: 'text', text: formatToc(allEntries) }],
        };
      }

      case 'fetch_shader_article': {
        const url = args?.url as string;
        if (!url) {
          return {
            content: [{ type: 'text', text: 'Error: url parameter is required' }],
            isError: true,
          };
        }

        try {
          const rawContent = await fetchUrlContent(url);
          // If it looks like HTML, convert to text
          const content = rawContent.includes('<html') || rawContent.includes('<body')
            ? htmlToText(rawContent)
            : rawContent;

          // Truncate if extremely long
          const maxLength = 15000;
          const truncated =
            content.length > maxLength
              ? content.slice(0, maxLength) + '\n\n... [truncated — content too long]'
              : content;

          return {
            content: [
              {
                type: 'text',
                text: `# Content from ${url}\n\n${truncated}`,
              },
            ],
          };
        } catch (error) {
          return {
            content: [
              {
                type: 'text',
                text: `Error fetching ${url}: ${error instanceof Error ? error.message : String(error)}`,
              },
            ],
            isError: true,
          };
        }
      }

      default:
        return {
          content: [{ type: 'text', text: `Unknown tool: ${name}` }],
          isError: true,
        };
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error executing ${name}: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
      isError: true,
    };
  }
});

// Start server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('GLSL Docs MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Server error:', error);
  process.exit(1);
});
