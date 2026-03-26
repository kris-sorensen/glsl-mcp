# Coordinate Systems & Transforms Index

## Polar Coordinates in Shaders
- **url**: https://www.ronja-tutorials.com/post/053-polar-coordinates/
- **techniques**: polar-coordinates, atan2, length, coordinate-transform, swirl, rotation
- **domain**: glsl
- **summary**: Convert cartesian to polar: `float angle = atan(uv.y, uv.x) / (2.0*PI); float dist = length(uv);`. Convert back: `vec2 cart = vec2(cos(angle*TWO_PI), sin(angle*TWO_PI)) * dist;`. Enables easy rotation (add to angle), radial scaling (multiply distance), swirl effects (angle += distance * amount).

## UV Coordinate Basics
- **url**: https://thebookofshaders.com/03/
- **techniques**: uv, coordinates, fragment, gl_FragCoord, aspect-ratio
- **domain**: glsl
- **summary**: Standard UV setup: `vec2 uv = gl_FragCoord.xy / u_resolution.xy;` (0→1 range). Center: `uv = uv * 2.0 - 1.0;` (-1→1 range). Aspect correction: `uv.x *= u_resolution.x / u_resolution.y;`. Essential first step for any fragment shader.

## Spherical Coordinates
- **url**: https://en.wikipedia.org/wiki/Spherical_coordinate_system
- **techniques**: spherical, theta, phi, 3d, direction, environment-map
- **domain**: math
- **summary**: 3D spherical coordinates (r, theta, phi). To cartesian: `x = r*sin(theta)*cos(phi), y = r*sin(theta)*sin(phi), z = r*cos(theta)`. From direction: `theta = acos(dir.z), phi = atan(dir.y, dir.x)`. Used for environment mapping, sky domes, and directional effects.

## Plane Deformations (IQ)
- **url**: https://iquilezles.org/articles/deform/
- **techniques**: deformation, tunnel, twirl, fisheye, ripple, uv-distortion
- **domain**: glsl
- **summary**: Classic UV deformation effects. Tunnel: `uv = vec2(atan(p.y,p.x)/PI, 1.0/length(p))`. Twirl: add angle proportional to distance. Fisheye: radial distortion using pow(). Ripple: `uv += sin(length(uv)*freq)*amp*normalize(uv)`.
