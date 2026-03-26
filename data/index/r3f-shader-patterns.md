# R3F Shader Setup Patterns

## Basic ShaderMaterial in R3F
- **url**: https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
- **techniques**: shaderMaterial, r3f, basic-setup, uniforms, vertex, fragment
- **domain**: threejs-r3f
- **summary**: Simplest custom shader in R3F: `<mesh><planeGeometry /><shaderMaterial vertexShader={vs} fragmentShader={fs} uniforms={{ uTime: { value: 0 }, uResolution: { value: new Vector2() } }} /></mesh>`. Update uniforms in useFrame: `ref.current.uniforms.uTime.value = clock.elapsedTime`. This is the raw Three.js approach, no helpers needed.

## drei shaderMaterial() Factory
- **url**: https://github.com/pmndrs/drei#shadermaterial
- **techniques**: shaderMaterial, drei, reusable, typed, uniforms-as-props
- **domain**: threejs-r3f
- **summary**: Create a reusable material class: `const MyMaterial = shaderMaterial({ uTime: 0, uColor: new Color('#ff0000') }, vertexShader, fragmentShader); extend({ MyMaterial })`. Then use as JSX: `<myMaterial uTime={time} uColor="blue" />`. Uniforms update reactively as props. Cleaner than raw shaderMaterial for reusable effects.

## CustomShaderMaterial (CSM) in R3F
- **url**: https://github.com/FarazzShaikh/THREE-CustomShaderMaterial
- **techniques**: csm, extend-material, pbr-with-custom-shader, lighting, shadows, r3f
- **domain**: threejs-r3f
- **summary**: When you need standard material features (lighting, shadows, PBR) AND custom shaders: `<CustomShaderMaterial baseMaterial={MeshStandardMaterial} vertexShader={vs} fragmentShader={fs} uniforms={{ uTime: { value: 0 } }} />`. Write to csm_Position (vertex displacement), csm_DiffuseColor (color before lighting), csm_FragColor (final output). Lighting, shadows, environment maps all work automatically.

## Fullscreen Shader (Post-processing style)
- **url**: https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
- **techniques**: fullscreen, quad, screen-shader, background, 2d-shader, r3f
- **domain**: threejs-r3f
- **summary**: Fullscreen 2D shader in R3F (equivalent to Shadertoy): `<mesh><planeGeometry args={[2, 2]} /><shaderMaterial vertexShader={vs} fragmentShader={fs} depthWrite={false} depthTest={false} /></mesh>` with an orthographic camera, OR use drei's `<ScreenQuad>` component. The plane covers the viewport; fragment shader does all the work using UV coordinates.

## useFrame for Uniform Animation
- **url**: https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
- **techniques**: useFrame, animation, uniforms, time, delta, clock, r3f
- **domain**: threejs-r3f
- **summary**: The animation loop in R3F. `useFrame((state, delta) => { materialRef.current.uniforms.uTime.value = state.clock.elapsedTime; materialRef.current.uniforms.uMouse.value.set(state.pointer.x, state.pointer.y); })`. Access: clock.elapsedTime, clock.getDelta(), pointer (normalized mouse), camera, scene, gl (renderer). Always use ref — never set state in useFrame.

## Passing Textures to Shaders
- **url**: https://docs.pmnd.rs/react-three-fiber/api/objects
- **techniques**: texture, useTexture, sampler2D, uniform, r3f
- **domain**: threejs-r3f
- **summary**: Load and pass textures: `const tex = useTexture('/image.png')`. Then `uniforms={{ uTexture: { value: tex } }}` and in GLSL: `uniform sampler2D uTexture; vec4 color = texture2D(uTexture, vUv);`. For multiple textures, useTexture accepts an array. drei also has `<useVideoTexture>` for video feeds.

## FBO / Render Target Pattern
- **url**: https://docs.pmnd.rs/react-three-fiber/tutorials/basic-animations
- **techniques**: fbo, render-target, offscreen, ping-pong, feedback, r3f
- **domain**: threejs-r3f
- **summary**: Render to texture for feedback/multi-pass effects: `const fbo = useFBO(512, 512)`. In useFrame: `gl.setRenderTarget(fbo); gl.render(offscreenScene, offscreenCamera); gl.setRenderTarget(null)`. Pass fbo.texture as uniform to final shader. drei's `<useFBO>` handles cleanup. Essential for ping-pong buffers, blur, bloom, and simulation shaders.

## Geometry Attributes in Vertex Shaders
- **url**: https://threejs.org/docs/#api/en/core/BufferGeometry
- **techniques**: attributes, position, normal, uv, bufferGeometry, vertex-data, r3f
- **domain**: threejs-r3f
- **summary**: Three.js geometries provide these vertex attributes automatically: `attribute vec3 position` (local space), `attribute vec3 normal`, `attribute vec2 uv`. Three.js also provides built-in uniforms: `modelMatrix`, `viewMatrix`, `projectionMatrix`, `modelViewMatrix`, `normalMatrix`, `cameraPosition`. Access these directly in your vertex shader — no manual setup needed.

## Three.js Built-in Uniforms & Attributes
- **url**: https://threejs.org/docs/#api/en/renderers/webgl/WebGLProgram
- **techniques**: built-in-uniforms, modelViewMatrix, projectionMatrix, cameraPosition, three-js
- **domain**: threejs-r3f
- **summary**: Three.js automatically provides these uniforms to all shaders: `modelMatrix` (object→world), `viewMatrix` (world→camera), `projectionMatrix` (camera→clip), `modelViewMatrix` (combined), `normalMatrix` (for normals), `cameraPosition` (vec3 world space). Vertex template: `gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);`.

## Custom Buffer Attributes
- **url**: https://threejs.org/docs/#api/en/core/BufferAttribute
- **techniques**: custom-attributes, instancedBufferAttribute, per-vertex-data, particles, r3f
- **domain**: threejs-r3f
- **summary**: Add custom per-vertex data: `<bufferGeometry><bufferAttribute attach="attributes-aRandom" count={count} array={randomArray} itemSize={1} /></bufferGeometry>`. In vertex shader: `attribute float aRandom;`. For instanced rendering: `<instancedBufferAttribute>`. Use for per-particle data, per-vertex colors, animation offsets.

## GLSL Imports via vite-plugin-glsl
- **url**: https://github.com/UstymUkhman/vite-plugin-glsl
- **techniques**: glsl-imports, vite, shader-files, include, modular-shaders
- **domain**: threejs-r3f
- **summary**: Import .glsl/.vert/.frag files directly in JS/TS: `import fragmentShader from './shader.frag'`. Supports `#include` directives for modular shader code. Add to vite.config: `import glsl from 'vite-plugin-glsl'; plugins: [glsl()]`. Alternative to storing shaders as template literal strings.

## React Three Postprocessing
- **url**: https://github.com/pmndrs/react-postprocessing
- **techniques**: postprocessing, effects, bloom, dof, vignette, custom-effect, r3f
- **domain**: threejs-r3f
- **summary**: Post-processing in R3F: `<EffectComposer><Bloom intensity={1.5} luminanceThreshold={0.9} /><ChromaticAberration offset={[0.002, 0.002]} /><Vignette darkness={0.5} /></EffectComposer>`. For custom effects, extend Effect class with your own fragment shader. All effects compose into minimal passes automatically.

## Instanced Rendering with Shaders
- **url**: https://threejs.org/docs/#api/en/objects/InstancedMesh
- **techniques**: instancing, instancedMesh, per-instance, particles, gpu-particles, r3f
- **domain**: threejs-r3f
- **summary**: Render thousands of objects in one draw call: `<instancedMesh args={[geometry, material, count]}>`. Per-instance data via instancedBufferAttribute. In vertex shader: access `instanceMatrix` (built-in) or custom `attribute vec3 aInstancePosition`. Combine with CSM for instanced objects with custom shaders + PBR lighting.
