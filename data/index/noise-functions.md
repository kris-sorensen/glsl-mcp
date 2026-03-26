# Noise Functions Index

## Perlin Noise (2D)
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Perlin.glsl
- **techniques**: perlin, gradient-noise, 2d-noise, continuous, smooth
- **domain**: noise
- **summary**: Classic 2D Perlin (gradient) noise via glNoise library. Use `gln_perlin(vec2 uv)` after patching with patchShaders(). Returns smooth, continuous noise with zero at integer coordinates. Good for terrain, displacement, organic patterns.

## Simplex Noise (2D)
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Simplex.glsl
- **techniques**: simplex, 2d-noise, efficient, gradient
- **domain**: noise
- **summary**: 2D Simplex noise via glNoise. Faster than Perlin for higher dimensions, less directional bias. Use `gln_simplex(vec2 uv)`. Note: simplex noise algorithm has patent considerations in some contexts.

## Voronoi / Worley Noise
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Worley.glsl
- **techniques**: voronoi, worley, cellular, distance-field, cells
- **domain**: noise
- **summary**: Voronoi/Worley (cellular) noise via glNoise. Computes distance to nearest random feature point in a grid. Creates organic cell patterns — cracks, scales, stone, biological structures. Use `gln_worley(vec2 uv)`.

## Curl Noise
- **url**: https://github.com/FarazzShaikh/glNoise/blob/main/src/Curl.glsl
- **techniques**: curl, divergence-free, particles, flow, velocity
- **domain**: noise
- **summary**: Curl noise via glNoise. Divergence-free noise field from the curl of a potential field. Perfect for particle flow, smoke, fluid-like motion. Particles following curl noise never converge or diverge — they create smooth, swirling paths.

## FBM (Fractal Brownian Motion)
- **url**: https://iquilezles.org/articles/fbm/
- **techniques**: fbm, fractal, octaves, lacunarity, gain, terrain, clouds
- **domain**: noise
- **summary**: Layer multiple noise octaves with increasing frequency and decreasing amplitude. Standard params: lacunarity=2.0 (freq multiplier), gain=0.5 (amplitude decay), 4-8 octaves. More octaves = more detail but more GPU cost. Foundation for terrain, clouds, fire, water.

## Domain Warping with FBM
- **url**: https://iquilezles.org/articles/warp/
- **techniques**: domain-warping, fbm, distortion, marble, organic
- **domain**: noise
- **summary**: Feed noise output back as coordinate offset: `fbm(p + fbm(p))`. Creates organic marble/fluid patterns. Double-warp `fbm(p + fbm(p + fbm(p)))` for even more complexity. Animate by adding `u_time` to warp offsets.

## Voronoise (Voronoi + Noise Blend)
- **url**: https://iquilezles.org/articles/voronoise/
- **techniques**: voronoise, voronoi, noise, blend, hybrid
- **domain**: noise
- **summary**: Smooth interpolation between Voronoi and value noise in a single function. Parameter u controls cell sharpness (0=voronoi, 1=smooth noise), v controls interpolation kernel.

## Smooth Voronoi
- **url**: https://iquilezles.org/articles/smoothvoronoi/
- **techniques**: smooth-voronoi, cellular, organic, soft-cells
- **domain**: noise
- **summary**: Voronoi without hard edges. Uses exponential averaging of cell distances to create soft, organic cellular patterns. Good for biological/organic surfaces.

## Hash Functions for Shaders
- **url**: https://iquilezles.org/articles/sfrand/
- **techniques**: hash, random, pseudo-random, seed, prng
- **domain**: noise
- **summary**: Deterministic pseudo-random number generation in GLSL. Classic: `fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453)`. Integer-based hashes avoid sin() precision issues on mobile. Essential building block for all noise functions.

## Value Noise (Basic)
- **url**: https://thebookofshaders.com/11/
- **techniques**: value-noise, interpolation, random, grid
- **domain**: noise
- **summary**: Simplest noise type: random values at grid points, smoothstep interpolated between them. `float noise(vec2 p) { vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }`.

## Gradient Noise Derivatives
- **url**: https://iquilezles.org/articles/gradientnoise/
- **techniques**: gradient-noise, derivatives, analytical-normals, terrain
- **domain**: noise
- **summary**: Perlin noise with analytical derivatives. Returns vec3(noise, dNoise/dx, dNoise/dy). Avoids 4-sample finite differences for normal computation on noise terrain. Much faster and artifact-free.

## Value Noise Derivatives
- **url**: https://iquilezles.org/articles/morenoise/
- **techniques**: value-noise, derivatives, analytical, erosion
- **domain**: noise
- **summary**: Value noise with analytical derivatives. Same benefit as gradient noise derivatives — exact normals without finite differences. Used for terrain erosion simulation.
