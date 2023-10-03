<script>
	import IntersectionObserver from "svelte-intersection-observer";
	import { fade } from "svelte/transition";

	export let imageNumber = "";

	let element;

	let lightboxOpen = false;
	const closeLightbox = () => {
		lightboxOpen = false;
	};
</script>

<IntersectionObserver once rootMargin={"5px"} threshold={0.25} {element} let:intersecting>
	<div class="container" bind:this={element}>
		<button
			on:click={() => {
				lightboxOpen = true;
			}}
		>
			<img
				src={`/assets/treehugger/DSC${imageNumber}.jpg`}
				alt={`Image number ${imageNumber} from the event.`}
				loading="lazy"
				class:intersect={intersecting}
			/>
		</button>
	</div>
</IntersectionObserver>
{#if lightboxOpen}
	<div
		transition:fade={{ duration: 200 }}
		class="overlay"
		role="presentation"
		on:click={closeLightbox}
		on:keydown={(e) => {
			if (e.key === "Escape") {
				closeLightbox();
			}
		}}
	>
		<div class="lightbox">
			<img
				src={`/assets/treehugger/DSC${imageNumber}.jpg`}
				alt={`Image number ${imageNumber} from the event.`}
			/>
			<p class="mulish">{imageNumber}</p>
			<button on:click={closeLightbox} />
		</div>
	</div>
{/if}

<style>
	div.container {
		position: relative;
		width: 30%;
	}

	div.container > button {
		background-color: transparent;
		border: none;
		cursor: pointer;
	}

	div.container img {
		width: 100%;
		opacity: 0;
		translate: -1rem 1rem;
		transition-duration: 0.25s;
	}

	div.container img:hover {
		transform: translateY(-5px);
	}

	div.container img.intersect {
		opacity: 1;
		translate: 0;
	}

	div.overlay {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100%;
		background-color: #000000da;
		display: grid;
		place-content: center;
	}

	div.lightbox {
		position: relative;
		display: grid;
		gap: 1rem;
	}

	div.lightbox > img {
		aspect-ratio: initial;
		max-width: 90vw;
		max-height: 85vh;
	}

	div.lightbox p {
		text-align: center;
	}

	div.lightbox button {
		cursor: pointer;
		background-color: transparent;
		border: none;
		position: absolute;
		top: -3rem;
		right: 0;
		height: 2rem;
		aspect-ratio: 1;
	}

	div.lightbox button::after,
	div.lightbox button::before {
		position: absolute;
		content: "";
		height: 2px;
		width: 100%;
		background-color: #fff;
		left: 0;
	}

	div.lightbox button::after {
		rotate: 45deg;
	}

	div.lightbox button::before {
		rotate: -45deg;
	}

	@media screen and (min-width: 768px) {
		/* div.container {
            width: ;
        } */

		div.lightbox button {
			top: 0;
			right: -3rem;
		}
	}
</style>
