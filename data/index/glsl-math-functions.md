# GLSL Utility Math Functions

## Rotation Matrix (2D)
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: rotation, matrix, 2d, transform
- **domain**: math
- **summary**: 2D rotation matrix construction: `mat2 rotate2d(float angle) { float s = sin(angle), c = cos(angle); return mat2(c, -s, s, c); }`. Apply to vec2 coordinates for rotation.

## Scale Matrix
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: scale, matrix, transform
- **domain**: math
- **summary**: Scale transformation matrix: `mat2 scale(vec2 s) { return mat2(s.x, 0.0, 0.0, s.y); }`. Uniform and non-uniform scaling for 2D coordinates.

## Translate (via matrix)
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: translate, transform, offset
- **domain**: math
- **summary**: Translation helper using matrix operations. For 2D, simply add offset: `uv += offset`. For 3D, use a 4x4 matrix with translation in the last column.

## Almost Identity
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: almost-identity, smoothing, threshold, iq-functions
- **domain**: math
- **summary**: IQ's almostIdentity function — returns x when x is large, but smoothly returns a minimum value m when x approaches zero. Prevents discontinuities at zero crossings.

## Impulse Function
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: impulse, spike, animation, iq-functions
- **domain**: math
- **summary**: IQ's impulse function — creates a sharp spike at t=0 that quickly decays. `float impulse(float k, float x) { float h = k*x; return h*exp(1.0-h); }`. Great for hit effects, flashes, reactions.

## Cubic Pulse
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: cubic-pulse, pulse, band, iq-functions
- **domain**: math
- **summary**: IQ's cubicPulse — cheap replacement for a gaussian-like pulse. `float cubicPulse(float c, float w, float x) { x = abs(x-c); if(x>w) return 0.0; x /= w; return 1.0 - x*x*(3.0-2.0*x); }`. Useful for band-limited effects.

## Exponential Step
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: exponential-step, threshold, sharp-transition, iq-functions
- **domain**: math
- **summary**: IQ's expStep — a step function with controllable sharpness. Creates a smooth transition from 0 to 1 with adjustable edge steepness using exponentiation.

## Parabola Function
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: parabola, curve, iq-functions
- **domain**: math
- **summary**: IQ's parabola function — `float parabola(float x, float k) { return pow(4.0*x*(1.0-x), k); }`. Maps 0→0, 0.5→1, 1→0 with controllable peakiness via k. Great for fade-in/fade-out effects.

## Power Curve
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: power-curve, asymmetric, easing, iq-functions
- **domain**: math
- **summary**: IQ's pcurve — asymmetric parabola with independent rise and fall shapes. Two parameters (a, b) control left and right curve steepness independently.

## Trigonometric Constants
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: pi, constants, math
- **domain**: math
- **summary**: Common trig constants for GLSL: PI = 3.14159265359, HALF_PI = 1.5707963268, TWO_PI = 6.28318530718, PHI = 1.61803398875 (golden ratio). GLSL has no built-in PI constant.

## Degree-based Trig
- **url**: https://gist.github.com/patriciogonzalezvivo/986341af1560138dde52
- **techniques**: degrees, sin, cos, convenience
- **domain**: math
- **summary**: Convenience wrappers for degree-based sin/cos: `float sind(float x) { return sin(radians(x)); }`. Avoids manual radians() conversion throughout shader code.
