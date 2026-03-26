# pmndrs / React Three Fiber Ecosystem Index

## React Three Fiber — Core Concepts
- **url**: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
- **techniques**: r3f, react-three-fiber, canvas, useFrame, useThree, declarative-3d
- **domain**: threejs-r3f
- **summary**: R3F renders Three.js scenes declaratively in React. `<Canvas>` creates a WebGL context. `useFrame((state, delta) => {})` runs every frame (animation loop). `useThree()` accesses renderer, camera, scene. Components map 1:1 to Three.js objects: `<mesh>`, `<boxGeometry>`, `<meshStandardMaterial>`.

## shaderMaterial Helper (drei)
- **url**: https://github.com/pmndrs/drei#shadermaterial
- **techniques**: shaderMaterial, custom-material, uniforms, r3f, reusable
- **domain**: threejs-r3f
- **summary**: drei's `shaderMaterial()` creates a reusable material class from vertex/fragment shaders and uniforms. `const MyMaterial = shaderMaterial({ uTime: 0, uColor: new Color('red') }, vertexShader, fragmentShader)`. Then use as `<myMaterial uTime={time} />` in JSX. Uniforms auto-update on prop change.

## useFrame Hook
- **url**: https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
- **techniques**: useFrame, animation, render-loop, delta-time, r3f
- **domain**: threejs-r3f
- **summary**: R3F's animation hook: `useFrame((state, delta) => { ref.current.rotation.y += delta; })`. Runs every frame. Access clock, camera, mouse, scene via `state`. Use `delta` for frame-rate-independent animation. For shader uniforms: `materialRef.current.uniforms.uTime.value = state.clock.elapsedTime`.

## Uniform Updates in R3F
- **url**: https://docs.pmnd.rs/react-three-fiber/api/objects
- **techniques**: uniforms, useFrame, useRef, shader-props, r3f
- **domain**: threejs-r3f
- **summary**: Two patterns for updating shader uniforms in R3F: (1) Via useFrame + ref: `useFrame((s) => { mat.current.uniforms.uTime.value = s.clock.elapsedTime })`. (2) Via drei's shaderMaterial: `<myMaterial uTime={clock} />` — props map directly to uniforms. Pattern 1 avoids re-renders, pattern 2 is more React-idiomatic.

## MeshTransmissionMaterial (drei)
- **url**: https://github.com/pmndrs/drei#meshtransmissionmaterial
- **techniques**: transmission, glass, refraction, transparency, pbr, material
- **domain**: threejs-r3f
- **summary**: Realistic glass/crystal material with refraction, chromatic aberration, and thickness. `<MeshTransmissionMaterial thickness={0.5} roughness={0} chromaticAberration={0.06} />`. Uses screen-space refraction for real-time performance.

## MeshReflectorMaterial (drei)
- **url**: https://github.com/pmndrs/drei#meshreflectormaterial
- **techniques**: reflection, mirror, floor, planar-reflection, material
- **domain**: threejs-r3f
- **summary**: Planar reflection material for floors/mirrors. `<MeshReflectorMaterial mirror={0.75} blur={[300, 100]} mixBlur={1} resolution={1024} />`. Renders a reflection pass and blends it with the surface. Supports blur and roughness.

## MeshDistortMaterial (drei)
- **url**: https://github.com/pmndrs/drei#meshdistortmaterial
- **techniques**: distortion, vertex-displacement, noise, procedural, material
- **domain**: threejs-r3f
- **summary**: Quick noise-based vertex displacement material. `<MeshDistortMaterial distort={0.5} speed={2} />`. No custom shaders needed — just props. Good for organic blobs, liquid effects, abstract art.

## MeshWobbleMaterial (drei)
- **url**: https://github.com/pmndrs/drei#meshwobblematerial
- **techniques**: wobble, vertex-displacement, sine, animation, material
- **domain**: threejs-r3f
- **summary**: Sine-wave vertex displacement. `<MeshWobbleMaterial factor={1} speed={2} />`. Creates jelly/cloth-like wobble animation. Simpler than MeshDistortMaterial — uses sine waves instead of noise.

## Float Component (drei)
- **url**: https://github.com/pmndrs/drei#float
- **techniques**: float, bobbing, hover, animation, idle
- **domain**: threejs-r3f
- **summary**: Automatic floating/bobbing animation wrapper. `<Float speed={1.5} floatIntensity={2} rotationIntensity={1}><mesh>...</mesh></Float>`. Adds idle motion to any 3D object. Good for hero elements, icons, ambient scene movement.

## Postprocessing in R3F
- **url**: https://github.com/pmndrs/react-postprocessing
- **techniques**: postprocessing, effects, bloom, vignette, chromatic-aberration, glitch, r3f
- **domain**: threejs-r3f
- **summary**: R3F wrapper for pmndrs postprocessing. `<EffectComposer><Bloom luminanceThreshold={0.9} /><Vignette /></EffectComposer>`. Effects: Bloom, ChromaticAberration, DepthOfField, Glitch, Noise, Pixelation, SSAO, ToneMapping, Vignette. Composes efficiently into a single pass.

## R3F + Custom Shader Full Pattern
- **url**: https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
- **techniques**: r3f, custom-shader, full-pattern, useFrame, uniforms, mesh
- **domain**: threejs-r3f
- **summary**: Complete pattern for custom shaders in R3F: Create material with `shaderMaterial()` or `<shaderMaterial>`, attach to `<mesh>`, update uniforms in `useFrame`. Vertex shader receives standard Three.js attributes (position, normal, uv). Fragment shader outputs gl_FragColor. For standard material features + custom shaders, use CSM instead.
