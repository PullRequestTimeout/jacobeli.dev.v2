<script>
	import { onMount } from 'svelte';

	let canvas;
	let gl;
	let shaderProgram;
	let positionAttributeLocation;
	let positionBuffer;
	let resolutionUniformLocation;
	let timeUniformLocation;
	let seed = Math.floor(Math.random() * 999); // Initial seed value
	let width;

	onMount(() => {
		width = window.innerWidth;
		if (width >= 1280) {
			// Get the WebGL context
			gl = canvas.getContext('webgl', { antialias: false });

			// Create the vertex shader
			const vertexShaderSource = `
attribute vec2 position;
void main() {
gl_Position = vec4(position, 0.0, 1.0);
}
`;
			const vertexShader = gl.createShader(gl.VERTEX_SHADER);
			gl.shaderSource(vertexShader, vertexShaderSource);
			gl.compileShader(vertexShader);

			// Create the fragment shader
			const fragmentShaderSource = `
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform sampler2D iChannel0;

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
vec2 uv = fragCoord.xy / iResolution.xy;

vec4 color = texture2D(iChannel0, uv);

float strength = 3.0;  // Adjust the grain size (smaller value for smaller grain)

float x = (uv.x + 4.0) * (uv.y + 4.0) * (iTime * 5.0);  // Adjust the rate of change (larger value for slower change)
vec4 grain = vec4(mod((mod(x, 13.0) + 1.0) * (mod(x, 123.0) + 1.0), 0.01) - 0.005) * strength;

// Adjust the grain value based on the UV coordinates
float grainValue = (grain.r + grain.g + grain.b) / 3.0;
grainValue *= 1.0 - pow(abs(uv.x - 0.5) * 2.0, 15.0);  // Make grain strength depend on the distance from the center horizontally, tweak last number for strength
grainValue *= 1.0 - pow(abs(uv.y - 0.5) * 2.0, 15.0);  // Make grain strength depend on the distance from the center vertically, tweak last number for strength

fragColor = color + vec4(grainValue);
}

void main() {
vec4 fragColor;
mainImage(fragColor, gl_FragCoord.xy);
gl_FragColor = fragColor;
}
`;
			const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
			gl.shaderSource(fragmentShader, fragmentShaderSource);
			gl.compileShader(fragmentShader);

			// Create the shader program
			shaderProgram = gl.createProgram();
			gl.attachShader(shaderProgram, vertexShader);
			gl.attachShader(shaderProgram, fragmentShader);
			gl.linkProgram(shaderProgram);
			gl.useProgram(shaderProgram);

			// Create the position attribute
			positionAttributeLocation = gl.getAttribLocation(shaderProgram, 'position');
			positionBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			gl.bufferData(
				gl.ARRAY_BUFFER,
				new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
				gl.STATIC_DRAW
			);
			gl.enableVertexAttribArray(positionAttributeLocation);
			gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

			// Set the uniform variables
			resolutionUniformLocation = gl.getUniformLocation(shaderProgram, 'iResolution');
			gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);

			timeUniformLocation = gl.getUniformLocation(shaderProgram, 'iTime');

			// Render the scene
			function render() {
				gl.uniform1f(timeUniformLocation, performance.now() / 1000);

				gl.viewport(0, 0, canvas.width, canvas.height);
				gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);

				requestAnimationFrame(render);
			}

			requestAnimationFrame(render);
		} else {
			const updateSeed = () => {
				seed = Math.floor(Math.random() * 999);
			};
			setInterval(updateSeed, 100);
		}
	});

	// if (width >= 1280) {
	// 	onMount(() => {

	// 	});
	// } else {
	// 	onMount(() => {

	// 	});
	// }
</script>

<canvas bind:this={canvas} />
<div class="static-overlay" style="filter: url(#static);" />
<svg>
	<defs>
		<filter id="static">
			<feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" {seed} />
		</filter>
	</defs>
</svg>

<style>
	div {
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		opacity: 0.115;
	}

	svg {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
	}

	canvas {
		display: none;
		pointer-events: none;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;
		height: 100vh;
		width: 100vw;
		opacity: 1;
		mix-blend-mode: screen;
	}

	@media screen and (min-width: 1280px) {
		canvas {
			display: block;
		}

		.static-overlay {
			display: none;
		}
	}
</style>
