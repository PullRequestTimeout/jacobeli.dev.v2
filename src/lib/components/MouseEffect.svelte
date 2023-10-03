<script>
	import { onMount } from "svelte";

	let blob;

	onMount(() => {
		document.addEventListener("pointermove", handlePointerMove);
		return () => {
			document.removeEventListener("pointermove", handlePointerMove);
		};
	});

	function handlePointerMove(event) {
		const { clientX, clientY } = event;
		blob.animate(
			{ left: `${clientX}px`, top: `${clientY}px` },
			{ duration: 5000, fill: "forwards" }
		);
	}
</script>

<div class="container">
	<img
		class="mouse"
		on:mousemove={handlePointerMove}
		bind:this={blob}
		role="presentation"
		src="/assets/glow.png"
		alt="Glow effect that tracks cursor"
	/>
</div>

<style>
	.container {
		pointer-events: none;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -99;
		top: 0;
		left: 0;
		overflow: hidden;
	}
	.mouse {
		height: 50rem;
		display: none;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
		z-index: -99;
		opacity: 0.2;
	}

	@media screen and (min-width: 1024px) {
		.mouse {
			display: unset;
		}
	}
</style>
