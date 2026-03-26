# Shaderific GLSL Reference Index

## GLSL Data Types
- **url**: https://shaderific.com/glsl/common_types.html
- **techniques**: types, float, int, vec2, vec3, vec4, mat2, mat3, mat4, bool, sampler
- **domain**: glsl
- **summary**: GLSL data types reference — scalar types (float, int, bool), vectors (vec2/3/4, ivec, bvec), matrices (mat2/3/4), and sampler types for textures.

## GLSL Common Functions
- **url**: https://shaderific.com/glsl/common_functions.html
- **techniques**: abs, sign, floor, ceil, fract, mod, min, max, clamp, mix, step, smoothstep
- **domain**: glsl
- **summary**: Built-in common math functions: abs, sign, floor, ceil, fract, mod, min, max, clamp, mix (lerp), step, smoothstep. The core toolkit for value manipulation in any shader.

## GLSL Power Functions
- **url**: https://shaderific.com/glsl/power_functions.html
- **techniques**: pow, exp, log, exp2, log2, sqrt, inversesqrt
- **domain**: glsl
- **summary**: Power and exponential built-in functions: pow, exp, log, exp2, log2, sqrt, inversesqrt. Essential for lighting calculations, falloff curves, and exponential effects.

## GLSL Trigonometric Functions
- **url**: https://shaderific.com/glsl/trigonometric_functions.html
- **techniques**: sin, cos, tan, asin, acos, atan, radians, degrees
- **domain**: glsl
- **summary**: Trigonometric built-ins: sin, cos, tan, asin, acos, atan (1 and 2 arg versions), radians, degrees. Used for rotation, waves, polar coordinates, and angular calculations.

## GLSL Geometric Functions
- **url**: https://shaderific.com/glsl/geometric_functions.html
- **techniques**: length, distance, dot, cross, normalize, reflect, refract, faceforward
- **domain**: glsl
- **summary**: Geometric built-ins: length, distance, dot product, cross product, normalize, reflect, refract, faceforward. Core operations for lighting, normals, and spatial calculations.

## GLSL Matrix Functions
- **url**: https://shaderific.com/glsl/matrix_functions.html
- **techniques**: matrixCompMult, transpose, determinant, inverse, outerProduct
- **domain**: glsl
- **summary**: Matrix operation built-ins: component-wise multiply, transpose, determinant, inverse, outer product. Used for coordinate transforms and custom projection math.

## GLSL Texture Functions
- **url**: https://shaderific.com/glsl/texture_functions.html
- **techniques**: texture2D, textureCube, texture, texelFetch, textureLod, textureGrad
- **domain**: glsl
- **summary**: Texture sampling functions: texture2D (WebGL1), texture (WebGL2/GLSL 3), textureCube, texelFetch (exact texel), textureLod (explicit mip), textureGrad (explicit derivatives).

## GLSL Built-in Variables
- **url**: https://shaderific.com/glsl/built_in_variables.html
- **techniques**: gl_Position, gl_FragCoord, gl_FragColor, gl_PointSize, gl_FrontFacing, gl_VertexID
- **domain**: glsl
- **summary**: Built-in shader variables: gl_Position (vertex output), gl_FragCoord (fragment pixel coords), gl_FragColor (fragment output), gl_PointSize, gl_FrontFacing, gl_VertexID.

## GLSL Qualifiers
- **url**: https://shaderific.com/glsl/qualifiers.html
- **techniques**: uniform, attribute, varying, in, out, const, precision, highp, mediump, lowp
- **domain**: glsl
- **summary**: Variable qualifiers: uniform (CPU→GPU per-draw), attribute/in (per-vertex), varying/out (vertex→fragment interpolated), const, precision qualifiers (highp/mediump/lowp for mobile).

## GLSL Control Flow
- **url**: https://shaderific.com/glsl/control_flow.html
- **techniques**: if, for, while, discard, return, break, continue
- **domain**: glsl
- **summary**: Control flow statements: if/else, for loops (WebGL1 requires compile-time bounds), while, discard (fragment shader kill), return, break, continue. Note GPU branch divergence costs.
