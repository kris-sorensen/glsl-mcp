# Project WebGL Hook Pattern

## useWebGL Hook
- **url**: file://src/Seed.Web/common/components/shaders/nightSky/hooks/useWebGL.ts
- **techniques**: webgl, hook, react, lifecycle, canvas, uniforms, raf, cleanup
- **domain**: glsl
- **summary**: Generic reusable React hook for full-screen WebGL shaders. Handles: WebGL1 context creation (alpha:false, antialias:false), shader compilation with error logging, program linking, full-screen quad (6 vertices, 2 triangles), uniform management via UniformConfig, ResizeObserver (devicePixelRatio clamped to 2), requestAnimationFrame loop, and complete cleanup on unmount. Built-in uniforms: u_time (float, seconds since mount), u_resolution (vec2, canvas pixels).

## UniformConfig Interface
- **url**: file://src/Seed.Web/common/components/shaders/nightSky/types.ts
- **techniques**: uniforms, typescript, interface, type-safe
- **domain**: glsl
- **summary**: Type-safe uniform configuration: `interface UniformConfig { [key: string]: { type: '1f' | '2f'; value: number | [number, number] } }`. Maps to gl.uniform1f/gl.uniform2f calls. React props → useMemo → UniformConfig → uniformsRef → RAF reads ref each frame → GPU.

## Full-Screen Quad Vertex Shader
- **url**: file://src/Seed.Web/common/components/shaders/nightSky/shaders/nightSky.vert.ts
- **techniques**: vertex-shader, fullscreen-quad, uv, passthrough
- **domain**: glsl
- **summary**: Standard passthrough vertex shader for 2D shaders. Positions a full-screen quad from 6 vertices (two triangles covering -1 to 1 clip space). Passes UV coordinates (0→1) to fragment shader via varying. Reusable for any 2D shader — only the fragment shader changes.

## Shader Component Pattern
- **url**: file://src/Seed.Web/common/components/shaders/nightSky/NightSky.tsx
- **techniques**: react-component, canvas, webgl, client-component, fallback
- **domain**: glsl
- **summary**: React component pattern for WebGL shaders: 'use client' component renders <canvas>, passes props through useMemo to build UniformConfig, calls useWebGL hook. CSS gradient fallback when WebGL unavailable (isSupported check). Component fills parent container. Add className prop for custom styling.
