# Inigo Quilez Articles Index

## Useful Functions / Remapping
- **url**: https://iquilezles.org/articles/functions/
- **techniques**: remapping, shaping-functions, smoothstep, impulse, cubic-pulse, parabola, gain, bias
- **domain**: math
- **summary**: Collection of useful shaping functions for remapping values — impulse, cubic pulse, exponential step, parabola, power curve, sinc, gain, and more. Essential toolkit for procedural animation and value manipulation.

## 2D Signed Distance Functions
- **url**: https://iquilezles.org/articles/distfunctions2d/
- **techniques**: sdf, 2d-sdf, circle, box, triangle, segment, polygon, star, heart, bezier, ellipse, hexagon, pentagon, arc, pie, cross, egg, moon, vesica, horseshoe, ring, parabola, stairs, tunnel
- **domain**: sdf
- **summary**: Comprehensive collection of 43+ exact 2D SDF functions: sdCircle, sdBox, sdRoundedBox, sdSegment, sdTriangle, sdStar, sdHeart, sdEllipse, sdBezier, sdPolygon, sdArc, sdPie, sdMoon, sdEgg, sdHexagon, sdPentagon, sdRing, sdHorseshoe, sdCross, sdStairs, sdTunnel, plus opRound and opOnion modifiers.

## 3D Signed Distance Functions
- **url**: https://iquilezles.org/articles/distfunctions/
- **techniques**: sdf, 3d-sdf, sphere, box, torus, cylinder, cone, capsule, octahedron, pyramid, link, prism, plane
- **domain**: sdf
- **summary**: 33+ exact 3D SDF primitives: sdSphere, sdBox, sdRoundBox, sdBoxFrame, sdTorus, sdCappedTorus, sdLink, sdCylinder, sdCone, sdCapsule, sdCappedCylinder, sdRoundedCylinder, sdCappedCone, sdRoundCone, sdOctahedron, sdPyramid, sdEllipsoid, sdHexPrism, sdDeathStar, sdSolidAngle, sdCutSphere, sdVesicaSegment, sdRhombus, udTriangle, udQuad.

## 2D SDFs and Gradients
- **url**: https://iquilezles.org/articles/distgradfunctions2d/
- **techniques**: sdf, gradient, 2d-sdf, analytical-normals
- **domain**: sdf
- **summary**: 2D SDF functions that return both distance AND gradient (analytical normal). Avoids central differences for normal calculation — faster and more accurate.

## 3D SDFs and Gradients
- **url**: https://iquilezles.org/articles/distgradfunctions3d/
- **techniques**: sdf, gradient, 3d-sdf, analytical-normals
- **domain**: sdf
- **summary**: 3D SDF functions with analytical gradients. Returns vec4(distance, gradient.xyz) for exact normals without finite differences.

## Smooth Minimum for SDFs
- **url**: https://iquilezles.org/articles/smin/
- **techniques**: sdf, smooth-min, smooth-union, boolean-operations, organic-shapes, blending
- **domain**: sdf
- **summary**: 8 smooth minimum variants for blending SDFs. Quadratic polynomial is recommended default (fast, rigid, conservative). Also covers exponential, root, sigmoid, cubic, quartic, circular, and circular-geometric variants with comparison table.

## SDF Domain Repetition
- **url**: https://iquilezles.org/articles/sdfrepetition/
- **techniques**: sdf, repetition, infinite-repetition, domain-repetition, instancing
- **domain**: sdf
- **summary**: Techniques for repeating SDF shapes infinitely or finitely using modulo operations on the domain. Covers correct clamping to avoid artifacts at repetition boundaries.

## Raymarching SDFs
- **url**: https://iquilezles.org/articles/raymarchingdf/
- **techniques**: raymarching, sphere-tracing, sdf, rendering, ray-casting
- **domain**: glsl
- **summary**: Core raymarching/sphere-tracing algorithm for rendering SDFs. Covers the basic march loop, step sizing via Lipschitz constant, performance optimization (symmetry exploitation, analytical derivatives), and quality tips (ray differentials, smooth blending).

## Soft Shadows with Raymarching
- **url**: https://iquilezles.org/articles/rmshadows/
- **techniques**: raymarching, soft-shadows, shadows, sdf, lighting
- **domain**: lighting
- **summary**: Penumbra-based soft shadows using raymarched SDFs. Uses minimum distance ratio along shadow ray to estimate shadow softness. Much cheaper than area light sampling.

## Numerical Normals for SDFs
- **url**: https://iquilezles.org/articles/normalsSDF/
- **techniques**: sdf, normals, gradient, central-differences, tetrahedron
- **domain**: sdf
- **summary**: Methods for computing surface normals from SDFs: central differences (6 evaluations) vs tetrahedron technique (4 evaluations). Tetrahedron method is faster and produces cleaner normals.

## FBM (Fractal Brownian Motion)
- **url**: https://iquilezles.org/articles/fbm/
- **techniques**: fbm, fractal, noise, procedural, terrain, octaves, hurst-exponent
- **domain**: noise
- **summary**: Fractal Brownian Motion theory and practice. Key params: Hurst exponent H (roughness 0-1), gain G=2^(-H) (amplitude decay), octave count (detail level). Used for terrain, clouds, tree distribution, bark textures. Spectral types: pink noise (H=0), brown (H=0.5), yellow (H=1).

## Gradient Noise Derivatives
- **url**: https://iquilezles.org/articles/gradientnoise/
- **techniques**: noise, gradient-noise, perlin, derivatives, analytical, normals
- **domain**: noise
- **summary**: Analytical derivatives of gradient (Perlin) noise. Avoids finite differences for computing normals on noise-based terrain. Much faster and smoother than numerical derivatives.

## Value Noise Derivatives
- **url**: https://iquilezles.org/articles/morenoise/
- **techniques**: noise, value-noise, derivatives, analytical, terrain
- **domain**: noise
- **summary**: Analytical derivatives of value noise. Similar concept to gradient noise derivatives but for value noise. Useful for terrain normal computation and erosion simulation.

## Domain Warping
- **url**: https://iquilezles.org/articles/warp/
- **techniques**: domain-warping, fbm, distortion, organic, procedural, marble, terrain
- **domain**: noise
- **summary**: Distort coordinate space before evaluating a function: f(p + h(p)). Key pattern: fbm(p + fbm(p)) for single warp, fbm(p + fbm(p + fbm(p))) for double. Creates organic marble-like patterns. Use intermediate warp values (q, r) as additional color inputs.

## Voronoise
- **url**: https://iquilezles.org/articles/voronoise/
- **techniques**: voronoi, noise, voronoise, cellular, procedural
- **domain**: noise
- **summary**: Smooth blend between Voronoi and value noise. Single function with two parameters: u (smoothness, 0=voronoi/1=noise) and v (interpolation). Versatile procedural pattern generator.

## Smooth Voronoi
- **url**: https://iquilezles.org/articles/smoothvoronoi/
- **techniques**: voronoi, smooth-voronoi, cellular, organic
- **domain**: noise
- **summary**: Smoothed Voronoi distance field without hard cell edges. Creates organic-looking cellular patterns using exponential averaging of distances.

## Voronoi Edges
- **url**: https://iquilezles.org/articles/voronoilines/
- **techniques**: voronoi, edges, cell-borders, wireframe
- **domain**: noise
- **summary**: Computing exact Voronoi cell edge distances. Useful for wireframe-like patterns, cracked surfaces, and cell boundary visualization.

## Simple Color Palettes
- **url**: https://iquilezles.org/articles/palettes/
- **techniques**: color, palette, cosine-palette, procedural-color
- **domain**: glsl
- **summary**: Procedural color palettes with one formula: color(t) = a + b*cos(2π(c*t+d)). Four vec3 parameters (a=bias, b=amplitude, c=frequency, d=phase) control the full RGB palette. GLSL: `a + b*cos(6.283185*(c*t+d))`.

## Smoothstep Functions
- **url**: https://iquilezles.org/articles/smoothsteps/
- **techniques**: smoothstep, interpolation, hermite, polynomial, easing
- **domain**: math
- **summary**: Higher-order smoothstep variants beyond the standard cubic. Quintic, septic smoothstep for smoother interpolation. Includes inverse smoothstep and derivative formulas.

## Sigmoid Functions
- **url**: https://iquilezles.org/articles/sigmoids/
- **techniques**: sigmoid, s-curve, remapping, contrast
- **domain**: math
- **summary**: Collection of sigmoid/S-curve functions for value remapping and contrast control. Alternatives to smoothstep with different curve characteristics.

## Trigonometric Functions
- **url**: https://iquilezles.org/articles/trigfunctions/
- **techniques**: trigonometry, sin, cos, atan, useful-trig
- **domain**: math
- **summary**: Useful trigonometric identities and functions for shader programming. Includes avoiding atan2 for performance.

## Filterable Procedural Textures
- **url**: https://iquilezles.org/articles/filterableprocedurals/
- **techniques**: filtering, antialiasing, procedural, mipmap, texture
- **domain**: texturing
- **summary**: Techniques for anti-aliasing procedural textures analytically. Prevents Moire patterns and aliasing without supersampling.

## Outdoors Lighting
- **url**: https://iquilezles.org/articles/outdoorslighting/
- **techniques**: lighting, outdoor, sky, sun, fog, ambient, hemisphere
- **domain**: lighting
- **summary**: Complete outdoor lighting model: sky dome (hemisphere light), sun (directional), fog (distance + height), ambient occlusion, and bounce light. Practical approach for outdoor scenes.

## Better Fog
- **url**: https://iquilezles.org/articles/fog/
- **techniques**: fog, atmospheric, depth, height-fog, scattering
- **domain**: lighting
- **summary**: Improved fog beyond simple linear/exponential. Height-based fog, inscattering color variation, and atmospheric perspective. Use exp(-distance*density) not linear falloff.

## Multires Ambient Occlusion
- **url**: https://iquilezles.org/articles/multiresaocc/
- **techniques**: ambient-occlusion, ao, sdf, lighting
- **domain**: lighting
- **summary**: Cheap AO for SDF scenes using multi-resolution distance sampling along the normal. 5 samples at increasing distances, comparing actual vs expected distance.

## Screen Space Ambient Occlusion
- **url**: https://iquilezles.org/articles/ssao/
- **techniques**: ssao, ambient-occlusion, screen-space, post-processing
- **domain**: lighting
- **summary**: SSAO implementation using depth buffer sampling. Screen-space technique for approximate ambient occlusion in any rendering pipeline.

## Texture Repetition
- **url**: https://iquilezles.org/articles/texturerepetition/
- **techniques**: texture, tiling, repetition, procedural, anti-tiling
- **domain**: texturing
- **summary**: Techniques to hide texture repetition/tiling artifacts. Random offset/rotation per tile, blending between samples, and hash-based variation.

## Biplanar Mapping
- **url**: https://iquilezles.org/articles/biplanar/
- **techniques**: triplanar, biplanar, texture-mapping, projection
- **domain**: texturing
- **summary**: Biplanar mapping as a cheaper alternative to triplanar. Projects texture from only 2 axes instead of 3, blending based on normal direction. Fewer texture lookups.

## Improved Bilinear Filtering
- **url**: https://iquilezles.org/articles/texture/
- **techniques**: texture, filtering, bilinear, interpolation, pixel-art
- **domain**: texturing
- **summary**: Smooth bilinear filtering that avoids blocky artifacts on magnified textures. Uses smoothstep on fractional UV coordinates before hardware interpolation.

## Ray-Surface Intersection Functions
- **url**: https://iquilezles.org/articles/intersectors/
- **techniques**: ray-intersection, raytracing, sphere, plane, box, cylinder, capsule, triangle
- **domain**: glsl
- **summary**: Collection of ray-surface intersection functions for standard primitives. Analytical ray-sphere, ray-box, ray-plane, ray-cylinder, ray-capsule, ray-triangle intersectors.

## Sphere Functions
- **url**: https://iquilezles.org/articles/spherefunctions/
- **techniques**: sphere, intersection, occlusion, projection, visibility
- **domain**: math
- **summary**: Utility functions for spheres: intersection, soft shadows, occlusion, projection, visibility testing. Commonly needed building blocks for 3D scenes.

## Box Functions
- **url**: https://iquilezles.org/articles/boxfunctions/
- **techniques**: box, aabb, intersection, occlusion, bounding-box
- **domain**: math
- **summary**: Utility functions for axis-aligned boxes: ray intersection, occlusion, surface area, point containment. Essential for acceleration structures and SDF scenes.

## Avoiding Trigonometry
- **url**: https://iquilezles.org/articles/noacos/
- **techniques**: trigonometry, optimization, acos, atan, performance
- **domain**: math
- **summary**: Techniques to avoid expensive trig functions (acos, atan) in shaders. Algebraic alternatives that are faster and more numerically stable.

## Inverse Bilinear Interpolation
- **url**: https://iquilezles.org/articles/ibilinear/
- **techniques**: bilinear, interpolation, inverse, uv-mapping, texture
- **domain**: math
- **summary**: Given a point inside a quad, compute the UV coordinates (inverse of bilinear interpolation). Useful for texture mapping on arbitrary quads.

## Simple Path Tracing
- **url**: https://iquilezles.org/articles/simplepathtracing/
- **techniques**: path-tracing, global-illumination, monte-carlo, raytracing
- **domain**: glsl
- **summary**: Minimal path tracer implementation. Random bounce directions, accumulation over frames, importance sampling basics. Good starting point for GI.

## Sphere Soft Shadows
- **url**: https://iquilezles.org/articles/sphereshadow/
- **techniques**: soft-shadows, sphere, penumbra, lighting
- **domain**: lighting
- **summary**: Analytical soft shadow from a sphere occluder. Cheap penumbra calculation without raymarching — just geometry.

## Thinking with Quaternions
- **url**: https://iquilezles.org/articles/quaternions/
- **techniques**: quaternion, rotation, orientation, 3d-math
- **domain**: math
- **summary**: Practical quaternion usage in shaders. Rotation representation, interpolation (slerp), and common operations without matrix conversion.

## Float and Random
- **url**: https://iquilezles.org/articles/sfrand/
- **techniques**: random, hash, float-packing, rng, seed
- **domain**: math
- **summary**: Techniques for generating random numbers in shaders. Integer-based hashing, float bit manipulation, and seed strategies.

## Plane Deformations
- **url**: https://iquilezles.org/articles/deform/
- **techniques**: deformation, uv-distortion, tunnel, twirl, fisheye, oldschool
- **domain**: glsl
- **summary**: Classic 2D plane deformation effects: tunnel, twirl, fisheye, ripple. UV-based distortion techniques for real-time demoscene-style effects.

## GPU Conditionals
- **url**: https://iquilezles.org/articles/gpuconditionals/
- **techniques**: optimization, branching, conditional, gpu, performance
- **domain**: glsl
- **summary**: How GPU handles conditionals (if/else) and techniques to minimize branch divergence. When to use step/mix vs if statements for shader performance.

## Gamma Correct Blurring
- **url**: https://iquilezles.org/articles/gamma/
- **techniques**: gamma, linear, blur, color-space, srgb
- **domain**: glsl
- **summary**: Why you must blur in linear space, not sRGB. Incorrect gamma handling during blur creates dark halos and color shifts. Convert to linear, blur, convert back.

## Procedural Graphics in 4KB
- **url**: https://iquilezles.org/articles/proceduralgfx/
- **techniques**: demoscene, procedural, size-coding, optimization
- **domain**: glsl
- **summary**: Techniques for creating complex procedural graphics in minimal code. Useful patterns for compact shader code and elegant procedural generation.

## Menger Fractal
- **url**: https://iquilezles.org/articles/menger/
- **techniques**: fractal, menger-sponge, sdf, recursive, procedural
- **domain**: sdf
- **summary**: SDF for the Menger sponge fractal. Iterative fold-and-cut approach that builds complex fractal geometry from simple box operations.

## Raymarching Terrains
- **url**: https://iquilezles.org/articles/terrainmarching/
- **techniques**: terrain, heightmap, raymarching, landscape, optimization
- **domain**: glsl
- **summary**: Optimized raymarching for heightmap-based terrain. Step size adaptation based on height above terrain, LOD reduction with distance, and intersection refinement.

## Interior SDF Distances
- **url**: https://iquilezles.org/articles/interiordistance/
- **techniques**: sdf, interior, signed-distance, inside
- **domain**: sdf
- **summary**: Computing correct interior (negative) distances for SDFs. Important for volumetric effects, subsurface scattering simulation, and correct boolean operations.

## Distance to an Ellipse
- **url**: https://iquilezles.org/articles/ellipsedist/
- **techniques**: ellipse, distance, sdf, analytical
- **domain**: math
- **summary**: Exact signed distance to an ellipse. Non-trivial because ellipse distance requires solving a quartic. Iterative Newton's method solution.

## Fourier Series
- **url**: https://iquilezles.org/articles/fourier/
- **techniques**: fourier, frequency, harmonics, signal, wave
- **domain**: math
- **summary**: Fourier series for shader programmers. Building complex periodic signals from sine/cosine harmonics. Useful for procedural animation and signal synthesis.

## Continuous Iteration Count (Mandelbrot)
- **url**: https://iquilezles.org/articles/msetsmooth/
- **techniques**: fractal, mandelbrot, smooth-iteration, coloring
- **domain**: glsl
- **summary**: Smooth coloring for Mandelbrot/Julia sets without banding. Uses renormalized iteration count for continuous color gradients across escape-time fractals.

## Mandelbulb Fractal
- **url**: https://iquilezles.org/articles/mandelbulb/
- **techniques**: fractal, mandelbulb, 3d-fractal, raymarching, sdf
- **domain**: sdf
- **summary**: 3D Mandelbulb fractal rendering via raymarching. Includes SDF estimation, orbit trap coloring, and power parameter for shape variation.
