# Lighting Models Index

## Blinn-Phong Reflection Model
- **url**: https://en.wikipedia.org/wiki/Blinn%E2%80%93Phong_reflection_model
- **techniques**: blinn-phong, specular, diffuse, ambient, lighting, half-vector
- **domain**: lighting
- **summary**: Classic lighting model with 3 components: Ambient (Ia * Ka), Diffuse (Id * Kd * max(dot(N,L), 0)), Specular (Is * Ks * pow(max(dot(N,H), 0), shininess)) where H = normalize(L+V) is the half-vector. Cheaper than Phong (no reflect() needed). Shininess ~32-256 for typical materials.

## Outdoors Lighting (IQ)
- **url**: https://iquilezles.org/articles/outdoorslighting/
- **techniques**: outdoor, sky-dome, hemisphere, sun, directional, fog, bounce-light
- **domain**: lighting
- **summary**: Complete outdoor lighting recipe: hemisphere sky light (top=sky color, bottom=ground bounce), directional sun with soft shadows, distance+height fog, and multi-resolution AO. Practical and production-ready.

## Better Fog (IQ)
- **url**: https://iquilezles.org/articles/fog/
- **techniques**: fog, atmospheric, height-fog, inscattering, depth
- **domain**: lighting
- **summary**: Beyond basic exponential fog: height-based density (thicker near ground), inscattering color shift (blue distance → orange sunset), and view-dependent effects. Formula: `mix(objectColor, fogColor, 1.0-exp(-dist*density))` as baseline, then layer height attenuation.

## Soft Shadows from SDFs (IQ)
- **url**: https://iquilezles.org/articles/rmshadows/
- **techniques**: soft-shadows, penumbra, raymarching, sdf, shadow
- **domain**: lighting
- **summary**: Cheap soft shadows by tracking minimum (distance/march-distance) ratio along shadow ray. Smaller ratio = deeper shadow. Parameter k controls penumbra softness. Works naturally with any SDF scene.

## Ambient Occlusion for SDFs (IQ)
- **url**: https://iquilezles.org/articles/multiresaocc/
- **techniques**: ambient-occlusion, ao, sdf, multi-resolution
- **domain**: lighting
- **summary**: Sample SDF at 5 points along surface normal at increasing distances (0.01, 0.02, 0.04, 0.08, 0.16). Compare actual distance to expected distance — deficit means occlusion. Exponentially decreasing weights for farther samples. Very cheap, ~5 SDF evaluations.

## Screen Space Ambient Occlusion (IQ)
- **url**: https://iquilezles.org/articles/ssao/
- **techniques**: ssao, screen-space, post-processing, ambient-occlusion
- **domain**: lighting
- **summary**: SSAO using depth buffer: sample random points in hemisphere around fragment, test how many are occluded by depth buffer. Works with any rendering pipeline as a post-process pass.

## Sphere Soft Shadow (IQ)
- **url**: https://iquilezles.org/articles/sphereshadow/
- **techniques**: soft-shadow, sphere, analytical, penumbra
- **domain**: lighting
- **summary**: Analytical soft shadow from a sphere occluder — no raymarching needed. Pure geometry: compute the angular extent of the sphere as seen from the shading point, compare to light direction. Very cheap for scenes with sphere-like occluders.

## Directional Derivative (IQ)
- **url**: https://iquilezles.org/articles/derivative/
- **techniques**: derivative, gradient, slope, terrain-coloring
- **domain**: lighting
- **summary**: Directional derivative of SDF/height field for slope-based effects. Useful for terrain coloring (snow on flat areas, rock on steep), flow simulation, and edge detection.

## Simple Global Illumination (IQ)
- **url**: https://iquilezles.org/articles/simplegi/
- **techniques**: global-illumination, gi, bounce-light, indirect
- **domain**: lighting
- **summary**: Approximate GI for SDF scenes using random hemisphere sampling with SDF-based occlusion. Cheaper than path tracing, better than pure ambient. Good enough for many real-time applications.

## PBR Basics (Concept Reference)
- **url**: https://learnopengl.com/PBR/Theory
- **techniques**: pbr, physically-based, metallic, roughness, fresnel, cook-torrance, brdf
- **domain**: lighting
- **summary**: Physically-based rendering fundamentals: metallic-roughness workflow, Cook-Torrance BRDF (normal distribution D, geometry G, Fresnel F), energy conservation, and image-based lighting. External reference — use fetch_shader_article for full content.
