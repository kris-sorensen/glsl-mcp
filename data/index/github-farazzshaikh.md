# FarazzShaikh GitHub Repos Index

## THREE-CustomShaderMaterial (CSM) — Overview
- **url**: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
- **techniques**: custom-shader-material, csm, material-extension, three-js, r3f, onBeforeCompile
- **domain**: threejs-r3f
- **summary**: Extend ANY Three.js material (MeshStandardMaterial, MeshPhysicalMaterial, etc.) with custom vertex/fragment shaders while keeping all built-in features (lighting, shadows, PBR). The go-to solution for adding custom effects to standard materials. 1.3k stars. Works with R3F via `<CustomShaderMaterial>`.

## CSM — Basic Usage Pattern
- **url**: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial#usage
- **techniques**: csm, uniforms, vertex-shader, fragment-shader, material-extension
- **domain**: threejs-r3f
- **summary**: Basic pattern: `new CustomShaderMaterial({ baseMaterial: THREE.MeshStandardMaterial, vertexShader: '...', fragmentShader: '...', uniforms: { uTime: { value: 0 } } })`. In R3F: `<CustomShaderMaterial baseMaterial={MeshStandardMaterial} vertexShader={vs} fragmentShader={fs} uniforms={uniforms} />`. Uniforms update reactively.

## CSM — Vertex Displacement Example
- **url**: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial/tree/main/examples
- **techniques**: vertex-displacement, noise-deformation, csm, animation
- **domain**: threejs-r3f
- **summary**: Displace vertices with noise while keeping PBR lighting intact. Key: CSM injects your vertex code into the standard material's vertex shader, so normals and lighting "just work" with displaced geometry. Use csm_Position and csm_Normal outputs.

## CSM — Output Variables
- **url**: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial#output-variables
- **techniques**: csm, csm_Position, csm_Normal, csm_DiffuseColor, csm_FragColor, outputs
- **domain**: threejs-r3f
- **summary**: CSM output variables: Vertex — `csm_Position` (local pos), `csm_PositionRaw` (clip space), `csm_Normal`. Fragment — `csm_DiffuseColor` (before lighting), `csm_FragColor` (after lighting, final output), `csm_Emissive`, `csm_Roughness`, `csm_Metalness`.

## glNoise — Library Overview
- **url**: https://github.com/FarazzShaikh/glNoise
- **techniques**: noise, glsl, shader-chunks, perlin, simplex, voronoi, curl, webgl
- **domain**: threejs-r3f
- **summary**: WebGL noise function library as injectable shader chunks. Import noise types (Perlin, Simplex, Worley, Curl), patch into shaders via `patchShaders()` or `patchShadersCSM()` for CSM integration. Functions prefixed `gln_` (e.g., `gln_perlin()`, `gln_normalize()`).

## glNoise — Perlin Noise
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Perlin.glsl
- **techniques**: perlin, noise, 2d, glnoise
- **domain**: noise
- **summary**: glNoise Perlin implementation. Import: `import { Perlin } from 'gl-noise'`. GLSL usage: `float n = gln_perlin(uv * scale);`. Smooth gradient noise, zero at integer coordinates, range approximately -1 to 1.

## glNoise — Simplex Noise
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Simplex.glsl
- **techniques**: simplex, noise, 2d, glnoise, efficient
- **domain**: noise
- **summary**: glNoise Simplex implementation. `float n = gln_simplex(uv * scale);`. Fewer directional artifacts than Perlin, computationally cheaper in higher dimensions. Good general-purpose noise.

## glNoise — Worley/Voronoi Noise
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Worley.glsl
- **techniques**: worley, voronoi, cellular, noise, glnoise
- **domain**: noise
- **summary**: glNoise Worley/cellular noise. `float n = gln_worley(uv * scale);`. Distance to nearest random point — creates cell patterns. Good for cracks, scales, stone, organic tissue.

## glNoise — Curl Noise
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Curl.glsl
- **techniques**: curl, divergence-free, particles, flow, glnoise
- **domain**: noise
- **summary**: glNoise Curl noise. `vec2 flow = gln_curl(uv * scale);`. Returns a 2D vector field that is divergence-free — particles following it create smooth, swirling paths without converging or diverging. Perfect for smoke, fluid, and particle trails.

## glNoise — CSM Integration
- **url**: https://github.com/FarazzShaikh/glNoise#with-customshadermaterial
- **techniques**: glnoise, csm, integration, shader-chunks, patching
- **domain**: threejs-r3f
- **summary**: Use glNoise with CustomShaderMaterial: `import { patchShadersCSM } from 'gl-noise'`. Pass your shader strings through `patchShadersCSM({ vertexShader, fragmentShader })` to inject noise functions. Then use `gln_perlin()` etc. directly in CSM shaders.

## three-shader-baker
- **url**: https://github.com/FarazzShaikh/three-shader-baker
- **techniques**: shader-baking, texture-baking, material-to-texture, optimization
- **domain**: threejs-r3f
- **summary**: Bake Three.js shader/material output into a texture. Useful for: pre-computing expensive shaders, converting procedural materials to textures for export, creating lightmaps, and freezing animated shader states. Works with any Three.js material including CSM.

## lamina — Layered Shader Material
- **url**: https://github.com/pmndrs/lamina
- **techniques**: layered-materials, composition, material-layers, blend-modes
- **domain**: threejs-r3f
- **summary**: Compose materials from layers with blend modes (add, multiply, overlay, etc.). `<LayerMaterial><Color color="blue" /><Depth near={0} far={2} /></LayerMaterial>`. Archived but patterns still valid. Good mental model for composable shader effects in R3F.

## drei — Shader-Relevant Helpers
- **url**: https://github.com/pmndrs/drei
- **techniques**: drei, r3f, helpers, shaderMaterial, float, transmission
- **domain**: threejs-r3f
- **summary**: pmndrs/drei (9.5k stars) — utility library for R3F. Shader-relevant exports: `shaderMaterial()` helper for creating reusable shader materials, `<Float>` for bobbing animation, `<MeshTransmissionMaterial>` for glass/refraction, `<MeshReflectorMaterial>` for mirrors, `<MeshDistortMaterial>` and `<MeshWobbleMaterial>` for quick procedural effects.

## react-three-gpu-pathtracer
- **url**: https://github.com/pmndrs/react-three-gpu-pathtracer
- **techniques**: path-tracing, gpu, global-illumination, raytracing, r3f
- **domain**: threejs-r3f
- **summary**: GPU path tracer for R3F. Renders physically accurate global illumination in the browser. Wraps three-gpu-pathtracer with React components. Use for high-quality renders, product visualization, and reference images.
