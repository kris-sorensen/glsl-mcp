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

# ─── SDF Advanced ───

## 2D Distance Functions in L-Infinity Norm
- **url**: https://iquilezles.org/articles/distfunctions2dlinf
- **techniques**: L-infinity-norm, 2d-sdf, chebyshev-distance, analytic-distance
- **domain**: sdf
- **summary**: Closed-form 2D SDF primitives using the L-infinity metric, yielding simpler equations than Euclidean equivalents. Use when building optimized 2D distance fields where Euclidean SDFs are too expensive.

## 2D Axis Aligned Bounding Boxes
- **url**: https://iquilezles.org/articles/bboxes2d
- **techniques**: aabb, 2d-sdf, culling, bounding-box, bezier, arc
- **domain**: sdf
- **summary**: Tight 2D bounding boxes for SDF primitives including triangles, Beziers, pies, and parabolas. Use when building a 2D SDF renderer that needs spatial culling to skip off-screen primitives.

## 3D Axis Aligned Bounding Boxes
- **url**: https://iquilezles.org/articles/bboxes3d
- **techniques**: aabb, 3d-sdf, culling, bounding-box, cone, cylinder, disk
- **domain**: sdf
- **summary**: AABBs for 3D SDF primitives like segments, cones, cylinders, ellipses, and Bezier curves. Use when building a raymarcher with scene-level culling or acceleration structures.

## Smooth Rounded Boxes
- **url**: https://iquilezles.org/articles/roundedboxes
- **techniques**: rounded-corners, C2-continuity, parabolic-rounding, sdf-smoothness
- **domain**: sdf
- **summary**: Compares five corner-rounding curves (circular, parabola, hyperbola, cosine, cubic) and their derivative continuity. Use when building UI elements or 3D shapes where rounded corners need smooth normals and artifact-free specular highlights.

## XOR Operator for SDFs
- **url**: https://iquilezles.org/articles/sdfxor
- **techniques**: sdf-boolean, xor, union, subtraction, intersection
- **domain**: sdf
- **summary**: Proves XOR always produces a mathematically correct SDF (unlike union/subtraction which can fail), and catalogs all eight boolean combinations. Use when building CSG modeling where you need to punch overlapping regions out of combined shapes reliably.

## SDF Bounding Volumes
- **url**: https://iquilezles.org/articles/sdfbounding
- **techniques**: bounding-volumes, bvh, kd-tree, octree, early-exit, acceleration
- **domain**: sdf
- **summary**: Wraps expensive SDF evaluations in cheap bounding volumes and builds hierarchies (BVH, procedural KD-trees) for early-exit optimization. Use when building complex raymarched scenes where raw SDF evaluation is too slow.

## Binary Search Raymarching for SDFs
- **url**: https://iquilezles.org/articles/binarysearchsdf
- **techniques**: binary-search, interval-arithmetic, raymarching-accuracy
- **domain**: sdf
- **summary**: Explores replacing sphere-tracing with binary search using segment subdivision, but concludes standard raymarching wins in practice. Use as reference when debugging raymarching accuracy issues or exploring alternatives for surfaces without reliable distance bounds.

## FBM Detail in SDFs
- **url**: https://iquilezles.org/articles/fbmsdf
- **techniques**: fbm, smin, smax, procedural-displacement, noise-detail, terrain
- **domain**: sdf
- **summary**: Adds fractal detail to SDF shapes by layering noise with smooth-min/max instead of arithmetic addition (which breaks distance field properties). Use when building procedural terrain, rocky surfaces, or organic shapes that need natural high-frequency detail.

## Ellipsoid SDF
- **url**: https://iquilezles.org/articles/ellipsoids
- **techniques**: ellipsoid, distance-estimation, gradient-correction, bounded-sdf
- **domain**: sdf
- **summary**: Three bounded distance estimators for ellipsoids since no exact analytic SDF exists. Use when building scenes with egg, pill, or blob shapes that need to combine cleanly with other SDF primitives.

## Distance Estimation for Implicits
- **url**: https://iquilezles.org/articles/distance
- **techniques**: distance-estimation, gradient-normalization, implicit-surfaces, uniform-thickness
- **domain**: sdf
- **summary**: Converts arbitrary implicit scalar fields into approximate distance fields using gradient normalization, enabling constant-thickness outlines. Use when building 2D function visualizations, fractal renderers, or procedural textures needing uniform line weight.

## Raymarching and Polygon Depth Compositing
- **url**: https://iquilezles.org/articles/raypolys
- **techniques**: depth-buffer, clip-space, raymarching-rasterization-bridge
- **domain**: sdf
- **summary**: Shows how to write correct depth values from a raymarching shader so raymarched objects properly occlude and intersect with rasterized polygon geometry. Use when building hybrid scenes mixing raymarched effects with standard mesh rendering.

## Rendering Worlds with Two Triangles (NVScene 2008)
- **url**: https://iquilezles.org/articles/nvscene2008
- **techniques**: sdf-raymarching-intro, domain-repetition, smooth-blending, ao, soft-shadows, procedural-modeling
- **domain**: sdf
- **summary**: The foundational presentation on GPU raymarching: renders entire 3D worlds on a fullscreen quad using SDFs with domain repetition, deformations, AO, and soft shadows. The starting point when learning SDF raymarching from scratch.

# ─── Texturing Advanced ───

## Premultiplied Alpha Compositing
- **url**: https://iquilezles.org/articles/premultipliedalpha
- **techniques**: premultiplied-alpha, alpha-blending, compositing, linear-filtering
- **domain**: texturing
- **summary**: Proves why premultiplied alpha eliminates dark-edge artifacts when filtering or scaling transparent textures. Use when building any rendering pipeline that mipmaps, blurs, or interpolates textures with transparency.

## Band Limiting Procedural Textures
- **url**: https://iquilezles.org/articles/bandlimiting
- **techniques**: band-limiting, anti-aliasing, frequency-clamping, procedural
- **domain**: texturing
- **summary**: Attenuates high-frequency procedural detail that exceeds the sampling rate, preventing aliasing without supersampling. Use when building procedural surfaces, fractals, or terrain where distant detail causes flickering.

## Ray Differentials and Textures
- **url**: https://iquilezles.org/articles/filteringrm
- **techniques**: ray-differentials, texture-derivatives, raymarching, mip-selection
- **domain**: texturing
- **summary**: Computes how neighboring rays diverge to estimate proper texture coordinate derivatives for raymarched SDFs. Use when building raymarched scenes that need clean, artifact-free texture sampling.

## Analytic Checker Filtering
- **url**: https://iquilezles.org/articles/checkerfiltering
- **techniques**: analytic-filtering, box-filter, procedural-checkerboard, anti-aliasing
- **domain**: texturing
- **summary**: Derives an analytical box-filter integral for procedural checkerboards, eliminating aliasing without mipmaps. Use when building debug grids, ground planes, or any procedural tiling that needs to look clean at all distances.

## Improved Checker Filtering
- **url**: https://iquilezles.org/articles/morecheckerfiltering
- **techniques**: triangle-filter, temporal-anti-aliasing, procedural-checkerboard
- **domain**: texturing
- **summary**: Replaces box filtering with a triangular kernel to eliminate temporal flickering in animated checkerboard patterns. Use when box-filtered checkerboards produce visible popping during camera motion.

## Improved Hardware Interpolation
- **url**: https://iquilezles.org/articles/hwinterpolation
- **techniques**: manual-bilinear, texture-lookup, heightfield-sampling
- **domain**: texturing
- **summary**: Works around the GPU's 8-bit fixed-point interpolation precision by performing manual bilinear filtering in the shader. Use when building terrain renderers or data-texture lookups where hardware interpolation produces staircase artifacts.

## Tunnel / Cylinder Seam Fix
- **url**: https://iquilezles.org/articles/tunnel
- **techniques**: textureGrad, atan-discontinuity, cylindrical-mapping, mipmap-seams
- **domain**: texturing
- **summary**: Fixes the mipmap seam caused by the atan() discontinuity in cylindrical UV mapping via textureGrad(). Use when building tunnel fly-throughs, cylindrical projections, or any effect wrapping a texture around polar coordinates.

## Filtering Procedural Textures
- **url**: https://iquilezles.org/articles/filtering
- **techniques**: supersampling, filter-footprint, ray-based-anti-aliasing, procedural
- **domain**: texturing
- **summary**: Computes per-pixel filter footprints by casting offset rays, then adaptively supersamples within that footprint. Use as a general-purpose antialiasing approach for raytraced or raymarched procedural shaders.

# ─── Lighting Advanced ───

## Directional Derivative
- **url**: https://iquilezles.org/articles/derivative
- **techniques**: directional-derivative, diffuse-lighting, sdf-normals, optimization
- **domain**: lighting
- **summary**: Replaces full gradient computation (4-6 samples) with a 2-sample directional derivative in the light direction, cutting lighting cost by ~70%. Use when building volumetric clouds, fog, or single-light SDF scenes where performance is tight.

## Simple Global Illumination
- **url**: https://iquilezles.org/articles/simplegi
- **techniques**: fake-gi, per-vertex-light-bounce, indirect-illumination
- **domain**: lighting
- **summary**: Approximates global illumination by computing light bounces per-vertex in small static scenes. Use when building size-constrained demos or simple scenes needing convincing indirect lighting without a full path tracer.

## Per-Vertex Ambient Occlusion
- **url**: https://iquilezles.org/articles/pervertexao
- **techniques**: ambient-occlusion, per-vertex-ao, hemisphere-sampling
- **domain**: lighting
- **summary**: Computes AO at each vertex by sampling how much geometry blocks incoming light, then interpolates across surfaces. Use when building real-time 3D scenes that need soft contact shadows without per-pixel AO passes.

## Sphere Ambient Occlusion
- **url**: https://iquilezles.org/articles/sphereao
- **techniques**: analytic-ao, sphere-occlusion, closed-form
- **domain**: lighting
- **summary**: Closed-form formula for ambient occlusion cast by a sphere onto a surface point, replacing expensive Monte Carlo sampling. Use when building scenes with dynamic spherical objects that need real-time soft shadowing.

## Box Ambient Occlusion
- **url**: https://iquilezles.org/articles/boxocclusion
- **techniques**: analytic-ao, box-occlusion, axis-aligned-occluder
- **domain**: lighting
- **summary**: Analytically integrates the AO contribution of an axis-aligned box without ray tracing. Use when building architectural visualization, voxel renderers, or scenes with box-shaped geometry needing precise real-time AO.

# ─── Fractals ───

## Mandelbrot Set Anatomy (Bulbs, Area, Perimeter, Symmetry)
- **url**: https://iquilezles.org/articles/mset1bulb
- **techniques**: fixed-point-analysis, cardioid-rejection, bulb-geometry, mandelbrot-optimization
- **domain**: glsl
- **summary**: Derives exact geometry of main and period-2 bulbs plus their area, perimeter, and symmetry properties. Use when building an optimized Mandelbrot renderer that needs cardioid/bulb rejection tests or analytical bounds for zoom regions.

## Introduction to the Mandelbrot Set
- **url**: https://iquilezles.org/articles/arquimedes
- **techniques**: mandelbrot-iteration, escape-time, fractal-fundamentals
- **domain**: glsl
- **summary**: Beginner-oriented compilation of experimental and theoretical Mandelbrot discoveries. Use when building your first Mandelbrot shader and need grounding in the core iteration math.

## Distance Estimation for Fractals
- **url**: https://iquilezles.org/articles/distancefractals
- **techniques**: fractal-sdf, hubbard-douady-potential, distance-estimation
- **domain**: glsl
- **summary**: Computes SDFs for Julia and Mandelbrot sets using potential theory, with optimized code for raymarching. Use when building a fractal renderer that needs smooth boundaries, anti-aliasing, or glow effects instead of raw iteration-count coloring.

## 3D Julia Sets
- **url**: https://iquilezles.org/articles/juliasets3d
- **techniques**: quaternion-julia, raymarching, jacobian-normals, 3d-fractal
- **domain**: glsl
- **summary**: Three methods for raymarching and shading quaternionic Julia sets in 3D, from numerical to fully analytical normals. Use when building a 3D fractal scene that needs lit, solid fractal geometry.

## 3D Orbit Traps
- **url**: https://iquilezles.org/articles/orbittraps3d
- **techniques**: orbit-traps, quaternion-fractals, geometric-distance-tracking
- **domain**: glsl
- **summary**: Extends orbit traps into 3D by tracking closest encounters between iteration trajectories and arbitrary geometric shapes. Use when building 3D fractal visuals with recognizable geometry warped through fractal space.

## Geometric Orbit Traps
- **url**: https://iquilezles.org/articles/ftrapsgeometric
- **techniques**: orbit-traps, fractal-coloring, distance-to-shape
- **domain**: glsl
- **summary**: The foundational orbit trap technique: measure distances from iteration orbits to geometric primitives (points, lines, circles) for coloring. Use when building fractal shaders needing rich coloring beyond simple iteration counts.

## Bitmap Orbit Traps
- **url**: https://iquilezles.org/articles/ftrapsbitmap
- **techniques**: orbit-traps, bitmap-sampling, distance-fields-from-images
- **domain**: glsl
- **summary**: Uses bitmap images as orbit trap shapes for sophisticated coloring. Use when building fractal artwork that embeds photographic or hand-drawn imagery into the fractal structure.

## Procedural Orbit Traps
- **url**: https://iquilezles.org/articles/ftrapsprocedural
- **techniques**: orbit-traps, procedural-functions, fbm-noise, nested-fractals
- **domain**: glsl
- **summary**: Uses procedural functions (noise, fbm, other fractals) as orbit trap shapes. Use when building generative fractal art that layers procedural detail into the coloring without bitmap assets.

## Buddhabrot Rendering
- **url**: https://iquilezles.org/articles/budhabrot
- **techniques**: density-mapping, orbit-histogram, metropolis-sampling
- **domain**: glsl
- **summary**: Renders the Buddhabrot by accumulating escaping orbit paths into a density map. Use when building a multi-pass fractal renderer that produces nebula-like imagery from Mandelbrot orbit statistics.

## Popcorn Images
- **url**: https://iquilezles.org/articles/popcorns
- **techniques**: dynamical-systems, euler-integration, velocity-field, density-plotting
- **domain**: glsl
- **summary**: Iterates trigonometric velocity fields across a 2D plane to produce intricate fractal-like flow visualizations. Use when building organic flow-field backgrounds or particle-trail effects driven by simple trig formulas.

## IFS Fractals
- **url**: https://iquilezles.org/articles/ifsfractals
- **techniques**: iterated-function-systems, affine-transforms, chaos-game, flame-fractals
- **domain**: glsl
- **summary**: Covers IFS from basic chaos-game rendering to advanced flame-style fractals with nonlinear warps. Use when building generative fractal flames, fern-like shapes, or Sierpinski-style patterns.

## Lyapunov Fractals
- **url**: https://iquilezles.org/articles/lyapunovfractals
- **techniques**: lyapunov-exponent, logistic-map, chaos-detection
- **domain**: glsl
- **summary**: Renders Lyapunov fractals that visualize regions of chaos vs. stability in parameterized sequences. Use when building chaos-visualization shaders that map stability landscapes into color.

## Icon Images
- **url**: https://iquilezles.org/articles/iconimages
- **techniques**: iterative-complex-maps, tileable-fractals, symmetry-groups
- **domain**: glsl
- **summary**: Generates fractal icon patterns by iterating a complex-power formula, producing tileable symmetric designs. Use when building tileable fractal textures or procedural pattern fills with rotational symmetry.

# ─── Geometry & Math ───

## Simple Inverse Kinematics
- **url**: https://iquilezles.org/articles/simpleik
- **techniques**: inverse-kinematics, circle-intersection, trig-free
- **domain**: math
- **summary**: Solves 2-bone IK using circle intersections instead of trigonometry. Use when animating articulated limbs (legs, arms, tentacles) on procedural creatures in shaders or demos.

## Sphere Math (Density, Visibility, Projection)
- **url**: https://iquilezles.org/articles/spheredensity
- **techniques**: analytic-fog, sphere-occlusion, screen-space-projection, lod
- **domain**: math
- **summary**: Three complementary sphere techniques: analytically integrate volumetric density through a sphere (fog without raymarching), test sphere visibility for culling, and project spheres to screen-space ellipses for LOD. Use when building volumetric atmospheres, planetary renderers, or adaptive-detail particle systems.

## Distance to Triangle
- **url**: https://iquilezles.org/articles/triangledistance
- **techniques**: point-triangle-distance, sdf-primitive, edge-detection
- **domain**: math
- **summary**: Exact distance from a point to a 3D triangle by testing prism containment then falling back to edge distances. Use when building triangle-based SDF primitives for raymarching scenes.

## Bezier Bounding Box
- **url**: https://iquilezles.org/articles/bezierbbox
- **techniques**: bezier, analytic-bounding-box, derivative-extrema
- **domain**: math
- **summary**: Tight axis-aligned bounding boxes for quadratic and cubic Bezier curves by finding derivative roots. Use when spatially indexing curves for font rendering, hair/fur systems, or procedural path effects.

## Disk and Cylinder Bounding Box
- **url**: https://iquilezles.org/articles/diskbbox
- **techniques**: aabb, oriented-primitives, closed-form-bounds
- **domain**: math
- **summary**: Closed-form AABBs for arbitrarily oriented disks and cylinders. Use when building BVH acceleration structures or collision detection for non-axis-aligned primitives.

## Working with Ellipses
- **url**: https://iquilezles.org/articles/ellipses
- **techniques**: ellipse-aabb, ray-ellipse-intersection, cramers-law
- **domain**: math
- **summary**: Bounding boxes and ray intersections for planar ellipses. Use when implementing point-cloud splatting, elliptical gaussian splats, or approximate AO with elliptical occluders.

## Normals and Areas of Polygons
- **url**: https://iquilezles.org/articles/areas
- **techniques**: polygon-normals, cyclic-cross-products, herons-formula, triangle-area
- **domain**: math
- **summary**: Efficient polygon normals via cyclic vertex cross products, plus a branch-free triangle area formula. Use when computing face normals for procedural meshes or verifying winding order in geometry shaders.

## Clever Mesh Normal Computation
- **url**: https://iquilezles.org/articles/normals
- **techniques**: vertex-normals, weighted-accumulation, skip-normalize
- **domain**: math
- **summary**: Eliminates redundant normalize calls during vertex normal accumulation by exploiting that cross products already weight by triangle area. Use when computing smooth normals on procedural or deformable meshes.

## Patched Sphere
- **url**: https://iquilezles.org/articles/patchedsphere
- **techniques**: cube-to-sphere, singularity-free-uv, normal-mapping
- **domain**: math
- **summary**: Generates spheres by normalizing cube vertices, avoiding the polar singularity of latitude/longitude. Use when building planet renderers or textured spheres needing uniform texel density.

## Smoothstep Integral
- **url**: https://iquilezles.org/articles/smoothstepintegral
- **techniques**: smoothstep-integration, ease-in-motion, animation-curves
- **domain**: math
- **summary**: Derives the integral of smoothstep so objects accelerate smoothly from rest to constant velocity. Use when animating camera moves, object transitions, or motion that must ease-in without snapping.

## Inverse Smoothstep
- **url**: https://iquilezles.org/articles/ismoothstep
- **techniques**: inverse-smoothstep, remapping, cubic-inverse
- **domain**: math
- **summary**: The mathematical inverse of smoothstep to undo S-curve interpolation. Use when reversing a smoothstep ramp in procedural textures, animation retiming, or contrast adjustments.

## Reflect and Clip (Don't Flip)
- **url**: https://iquilezles.org/articles/dontflip
- **techniques**: vector-reflection, hemisphere-clipping, continuity
- **domain**: math
- **summary**: Replaces discontinuous vector negation with smooth reflection and clipping to prevent flickering at hemisphere boundaries. Use when computing normals on raymarched surfaces, grass blade orientation, or lighting that flips normals near silhouettes.

## FM Synthesis
- **url**: https://iquilezles.org/articles/fm
- **techniques**: frequency-modulation, phase-synthesis, instantaneous-frequency
- **domain**: math
- **summary**: Clarifies that pitch is the derivative of phase, fixing a common FM synthesis mistake. Use when building audio-reactive shaders or procedural sound in demos.

## Fast Trisect in GLSL
- **url**: https://iquilezles.org/articles/trisect
- **techniques**: cubic-solver, polynomial-approximation, trisection
- **domain**: math
- **summary**: Approximates cos(acos(x)/3) with fast sqrt-based polynomials for 1.6-1.8x speedup. Use when solving cubics in shaders for Bezier intersections, torus raytracing, or parabola distance fields.

# ─── Classic Effects ───

## 2D Dynamic Clouds
- **url**: https://iquilezles.org/articles/dynclouds
- **techniques**: perlin-noise, time-scrolling, procedural-clouds
- **domain**: glsl
- **summary**: Generates animated cloud layers by scrolling and blending Perlin noise octaves over time. Use when building skybox cloud effects, weather systems, or real-time procedural atmosphere layers.

## Simple Water
- **url**: https://iquilezles.org/articles/simplewater
- **techniques**: mesh-deformation, fresnel, reflection, refraction, foam
- **domain**: glsl
- **summary**: Full recipe for a real-time water shader combining vertex displacement, fresnel-blended reflection/refraction, and foam. Use when building ocean or lake surfaces in a 3D scene.

## Feedback Effect
- **url**: https://iquilezles.org/articles/feedbackfx
- **techniques**: texture-feedback, self-referential-rendering, spiral-patterns
- **domain**: glsl
- **summary**: Creates psychedelic spiral patterns by rendering a rotating, scaled texture back onto itself each frame. Use when building trippy visual effects, music visualizers, or generative art with minimal code.

## Voronoi Effect
- **url**: https://iquilezles.org/articles/cellularffx
- **techniques**: voronoi-diagram, z-buffer-cones, cellular-textures
- **domain**: glsl
- **summary**: Renders Voronoi diagrams by rasterizing distance cones into the Z-buffer. Use when generating procedural cellular patterns for rock, skin, cracked earth, or stained glass textures.

## The Game of Life
- **url**: https://iquilezles.org/articles/gameoflife
- **techniques**: cellular-automata, 2d-convolution, neighborhood-kernels, ping-pong
- **domain**: glsl
- **summary**: Implements Conway's Game of Life as a convolution filter, generalizable to other automata. Use when building simulation-based visual effects, emergent pattern generators, or learning GPU compute via ping-pong buffers.

# ─── Engine & Renderer ───

## Avoiding Trigonometry (sin/cos trick & atan-free snapping)
- **url**: https://iquilezles.org/articles/sincos
- **techniques**: incremental-rotation, angle-addition, trig-free-snapping, optimization
- **domain**: glsl
- **summary**: Replace repeated sin/cos calls in loops with incremental rotation via angle addition formulas, and snap 2D vectors to 45-degree angles without atan for ~3x speedup. Use when optimizing hot loops generating circular motion, Fourier transforms, or directional quantization.

## Timing in Ticks
- **url**: https://iquilezles.org/articles/ticks
- **techniques**: fixed-point-timing, frame-rate-independence, tick-system
- **domain**: math
- **summary**: Uses 25,200 ticks/second as a universal time base dividing evenly into all common frame rates, eliminating rounding drift. Use when synchronizing animations across mixed refresh rates in demos, VR, or video tools.

## Fixing Frustum Culling
- **url**: https://iquilezles.org/articles/frustumcorrect
- **techniques**: frustum-aabb-overlap, bidirectional-plane-test, false-negative-fix
- **domain**: math
- **summary**: Fixes the classic frustum culling false positive where large objects spanning the frustum pass half-plane tests but are actually outside. Use when culling terrain chunks, octree nodes, or objects bigger than the view frustum.

## Rational Rendering / Floating Bar
- **url**: https://iquilezles.org/articles/floatingbar
- **techniques**: rational-arithmetic, exact-intersection, custom-number-format
- **domain**: math
- **summary**: Replaces floating-point with rational numbers packed into 32 bits for mathematically exact ray-triangle intersections. Use when debugging precision issues like light leaks, co-planar cracks, or edge-case geometry.

## Hacking the Ray-Triangle Intersector
- **url**: https://iquilezles.org/articles/hackingintersector
- **techniques**: ray-line-distance, hardware-intersection, hair-rendering, curve-rendering
- **domain**: glsl
- **summary**: Repurposes the standard ray-triangle intersection to compute ray-to-line-segment distances for curves with dynamic thickness. Use when rendering hair, fur, or wire primitives through existing triangle intersection hardware.

## Stereo Rendering & Basic VR
- **url**: https://iquilezles.org/articles/stereo
- **techniques**: stereo-rendering, vr, eye-parallel-frustums, dual-eye
- **domain**: glsl
- **summary**: Stereo rendering halves draw calls by reversing the object/eye loop order; extends to a full frame/display/eye hierarchy for multi-display VR. Use when building VR or stereoscopic renderers needing efficient dual-eye rendering.

# ─── Raytracing ───

## Old-School Raytracing
- **url**: https://iquilezles.org/articles/raytracing
- **techniques**: whitted-raytracing, sse2-packet-tracing, kd-tree, reflection, shadows
- **domain**: glsl
- **summary**: Two complementary intros: a software raytracer with procedural shaders and volumetric effects, plus an SSE2/kd-tree accelerated version. Use as reference when building a CPU raytracer or understanding acceleration structure fundamentals.

## Simple GPU Raytracing
- **url**: https://iquilezles.org/articles/simplegpurt
- **techniques**: pixel-shader-raytracing, whitted-model, per-pixel-ray-casting
- **domain**: glsl
- **summary**: Complete Whitted raytracer in a fragment shader with reflections, shadows, and lighting. Use as a starting template when building a shader-only raytracer for demos or Shadertoy-style scenes.

## Tracing in Tiles
- **url**: https://iquilezles.org/articles/cputiles
- **techniques**: tile-based-rendering, cache-locality, parallel-decomposition
- **domain**: math
- **summary**: Divides the screen into small tiles (8x8 to 64x64) for sequential processing to maximize cache hits. Use when optimizing any CPU-side per-pixel computation that suffers from cache thrashing on large framebuffers.

# ─── Voxels ───

## Voxel Lines and Occlusion
- **url**: https://iquilezles.org/articles/voxellines
- **techniques**: voxel-edges, neighbor-occupancy, fake-ambient-occlusion
- **domain**: glsl
- **summary**: Detects geometric edges by checking voxel neighbor occupancy and approximates AO by sampling cells above the surface. Use when adding visual depth and silhouette emphasis to Minecraft-style or medical voxel renderers.

## Simple Voxel Rendering
- **url**: https://iquilezles.org/articles/voxel
- **techniques**: voxel-raymarching, 3d-dda, texture-wrapping
- **domain**: glsl
- **summary**: Raycasts through a voxel grid using a 3D DDA line algorithm with GL_REPEAT for infinite tiling. Use as the foundation for any voxel terrain renderer or volumetric data visualizer.

# ─── Pointclouds ───

## Volumetric Sort
- **url**: https://iquilezles.org/articles/volumesort
- **techniques**: precomputed-sort, view-dependent-indexing, alpha-blending
- **domain**: math
- **summary**: Precomputes 8 (2D) or 48 (3D) index arrays for all viewing octants so grid-aligned transparent objects need no runtime sorting. Use when rendering alpha-blended point clouds, gaussian splats, or particle grids where dynamic sorting is too expensive.

# ─── Size Coding ───

## Procedural Generation in 4K-64K Demos
- **url**: https://iquilezles.org/articles/function2009
- **techniques**: procedural-terrain, procedural-animation, mesh-compression, demoscene
- **domain**: glsl
- **summary**: Demoscene techniques for procedural terrain generation (Elevated), procedural character animation in 4KB, and comprehensive 64KB intro techniques. Use when building procedural content systems where everything must be generated from code with no external assets.

## Size Coding: Compression & Minimal Implementations
- **url**: https://iquilezles.org/articles/float4k
- **techniques**: float-truncation, catmull-rom-splines, minimal-culling, compiler-optimization, tiny-png
- **domain**: math
- **summary**: Micro-implementations: truncate float mantissas for compression, minimal Catmull-Rom spline code for camera paths, frustum culling from plane equations, compiler flags for smallest binaries, self-contained 64x64 PNG writer. Use when you need the smallest possible implementation of a standard graphics primitive.
