# Project Shader Component Patterns

## Two Rendering Approaches
- **url**: file://src/Seed.Web/common/components/shaders/SHADERS.md
- **techniques**: webgl, r3f, react-three-fiber, approach, decision
- **domain**: glsl
- **summary**: This project uses two shader approaches: (1) Raw WebGL via useWebGL hook — zero-dependency, lightweight, good for simple 2D background shaders (like NightSky). (2) React Three Fiber (R3F) — full 3D pipeline with Three.js, shaderMaterial/CSM, useFrame, postprocessing. Choose R3F when you need: 3D geometry, lighting/shadows, PBR materials, camera controls, instancing, or postprocessing. Choose raw WebGL when you need: minimal bundle size, simple 2D fragment-only effects, no Three.js dependency.

## Night Sky — Noise Stack
- **url**: file://src/Seed.Web/common/components/shaders/nightSky/shaders/nightSky.frag.ts
- **techniques**: night-sky, stars, nebula, fbm, vignette, hash, value-noise, compositing
- **domain**: glsl
- **summary**: 4-layer composition: (1) Sky gradient via smoothstep on Y, (2) Nebula from 3 overlapping fbm() passes with pow() for wispy structure, (3) Stars at 3 grid scales (20/50/120) with hash-based placement and twinkle via sin(time*freq+phase), (4) Vignette edge darkening. Controllable uniforms: u_speed, u_starDensity, u_nebulaIntensity.

## Noise Functions — Project Implementations
- **url**: file://src/Seed.Web/common/components/shaders/nightSky/shaders/nightSky.frag.ts
- **techniques**: hash, value-noise, fbm, noise-functions, mobile-safe
- **domain**: noise
- **summary**: Project noise implementations: hash(vec2) uses dot product + fract (no sin — mobile safe), hash(float) uses classic fract(sin(n)*43758.5453), noise(vec2) is value noise with smoothstep interpolation, fbm(vec2, int) is fractal Brownian motion with fixed max loop (WebGL1 requirement) and dynamic break. 4-6 octaves typical.

## Adding a New Shader Component
- **url**: file://src/Seed.Web/common/components/shaders/SHADERS.md
- **techniques**: new-shader, workflow, setup, checklist
- **domain**: glsl
- **summary**: Steps: (1) Create folder shaders/yourShader/, (2) Add .vert.ts (usually same passthrough), (3) Add .frag.ts with custom shader + uniforms, (4) Add types.ts with props interface, (5) Create React component importing useWebGL, (6) Add dev page under app/development/. GLSL stored as template literal strings. Compilation errors appear in browser console via gl.getShaderInfoLog().

## Dev Playground
- **url**: file://src/Seed.Web/app/development/shader-play/client.tsx
- **techniques**: development, testing, sliders, controls, playground
- **domain**: glsl
- **summary**: Shader dev/test page at /development/shader-play/. Full-viewport shader with floating control panel containing sliders for each uniform. Adjust speed, starDensity, nebulaIntensity in real-time. Use this pattern for testing any new shader — add sliders for each uniform prop.
