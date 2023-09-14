<script>
	import { onMount } from 'svelte';

	let blob;

	onMount(() => {
		document.addEventListener('pointermove', handlePointerMove);
		return () => {
			document.removeEventListener('pointermove', handlePointerMove);
		};
	});

	function handlePointerMove(event) {
		const { clientX, clientY } = event;
		blob.animate(
			{ left: `${clientX}px`, top: `${clientY}px` },
			{ duration: 5000, fill: 'forwards' }
		);
	}
</script>

<div class="container">
	<div role="none" on:mousemove={handlePointerMove} bind:this={blob} class="mouse-effect" />
	<div class="blur" />
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -99;
		top: 0;
		left: 0;
		overflow: hidden;
	}

	.mouse-effect {
		display: none;
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
		background-color: rgba(161, 121, 69, 0.5);
		border-radius: 50%;
		animation: blob 30s infinite linear;
		z-index: -100;
		aspect-ratio: 1.5;
		/* Man this is probably really computationally expensive to have a filter and backdrop filter, but bd-filter is buggy as hell */
		filter: blur(4rem);
	}

	.blur {
		display: none;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		position: fixed;
		z-index: -50;
		backdrop-filter: blur(5rem);
	}

	@keyframes blob {
		0% {
			/* aspect-ratio: 1; */
			height: 25rem;
			transform: translate(-50%, -50%) scale(1) rotate(0deg);
		}
		50% {
			/* aspect-ratio: 1.5; */
			height: 15rem;
			transform: translate(-50%, -50%) scale(1.1) rotate(180deg);
		}
		100% {
			/* aspect-ratio: 1; */
			height: 25rem;
			transform: translate(-50%, -50%) scale(1) rotate(360deg);
		}
	}

	@media screen and (min-width: 1280px) {
		.mouse-effect {
			display: unset;
		}

		.blur {
			display: unset;
		}
	}
</style>
