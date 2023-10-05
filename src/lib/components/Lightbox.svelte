<script>
	import IntersectionObserver from "svelte-intersection-observer";
	import { fade } from "svelte/transition";
	import { photoStore } from "$lib/photoStore.js";
	import { clickOutside } from "$lib/clickOutside.js";
	import IconButton from "../../routes/treehugger/IconButton.svelte";

	export let imageNumber = "";

	let element;

	let lightboxOpen = false;
	function closeLightbox() {
		lightboxOpen = false;
	}

	function addToPurchase(imgNo) {
		// Converting to a set and back ensures no duplicate photos
		const addToArr = [...$photoStore, imgNo];
		const set = new Set(addToArr);
		$photoStore = Array.from(set);
		// close lightbox after button
		lightboxOpen = false;
	}
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
				oncontextmenu="return false;"
			/>
		</button>
	</div>
</IntersectionObserver>
{#if lightboxOpen}
	<div transition:fade={{ duration: 200 }} class="overlay" role="presentation">
		<div
			class="lightbox"
			use:clickOutside
			on:click_outside={() => {
				lightboxOpen = false;
			}}
		>
			<img
				src={`/assets/treehugger/DSC${imageNumber}.jpg`}
				alt={`Image number ${imageNumber} from the event.`}
				loading="lazy"
				oncontextmenu="return false;"
			/>
			<div class="info">
				<p class="mulish">#{imageNumber}</p>
				<IconButton
					callback={() => addToPurchase(imageNumber)}
					innerText="Add To Purchase Request"
				/>
			</div>
			<button class="close" on:click={closeLightbox} />
		</div>
	</div>
{/if}

<style>
	div.container {
		position: relative;
		width: 100%;
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

	div.lightbox div.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	div.lightbox button.close {
		cursor: pointer;
		background-color: transparent;
		border: none;
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
		height: 1rem;
		aspect-ratio: 1;
	}

	div.lightbox button.close::after,
	div.lightbox button.close::before {
		position: absolute;
		content: "";
		height: 2px;
		width: 100%;
		background-color: #fff;
		left: 0;
	}

	div.lightbox button.close::after {
		rotate: 45deg;
	}

	div.lightbox button.close::before {
		rotate: -45deg;
	}

	@media screen and (min-width: 768px) {
		div.lightbox button.close {
			top: 0;
			right: -1.5rem;
		}
	}
</style>
