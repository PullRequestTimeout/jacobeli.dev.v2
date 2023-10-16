<script>
	import emblaCarouselSvelte from "embla-carousel-svelte";
	import ClassNames from "embla-carousel-class-names";
	import { setupTweenOpacity } from "./tweenOpacity.js";

	// Add file names to lengthen slideshow
	const images = ["DSC02627.jpg", "DSC03363.jpg", "DSC08900.jpg", "DSC01741.jpg"];

	let emblaApi;
	const options = { loop: true, duration: 35 };
	let plugins = [ClassNames()];
	let resize;

	const onInit = (event) => {
		emblaApi = event.detail;
		const { applyTweenOpacity, removeTweenOpacity } = setupTweenOpacity(emblaApi);
		emblaApi
			.on("init", applyTweenOpacity)
			.on("scroll", applyTweenOpacity)
			.on("reInit", applyTweenOpacity)
			.on("destroy", removeTweenOpacity);
	};
</script>

<!-- rerender component on window resize to stop carousel items from disappearring -->
<svelte:window
	on:resize={() => {
		setTimeout(() => {
			resize = window.innerWidth;
		}, 500);
	}}
/>

{#key resize}
	<section class="embla" use:emblaCarouselSvelte={{ options, plugins }} on:emblaInit={onInit}>
		<div class="embla__container">
			{#each images as image, i}
				<img
					src={`/assets/carousel/${image}`}
					alt={`Image number ${i + 1} of the carousel.`}
					class="embla__slide"
				/>
			{/each}
		</div>
		<button class="embla__prev" on:click={emblaApi.scrollPrev} aria-label="Carousel Previous">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
				><path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" /></svg
			></button
		>
		<button class="embla__next" on:click={emblaApi.scrollNext} aria-label="Carousel Next">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
				><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg
			></button
		>
	</section>
{/key}

<style>
	section.embla {
		position: relative;
		overflow: hidden;
	}

	div.embla__container {
		display: flex;
	}

	img.embla__slide {
		flex: 0 0 100%;
		min-width: 0;
		padding: 0 0.5rem;
	}

	section.embla > button {
		position: absolute;
		top: 50%;
		cursor: pointer;
		display: flex;
		border: none;
		align-items: center;
		justify-content: center;
		background-color: transparent;
		translate: 0 -50%;
		padding: 0.5rem;
	}

	section.embla > button > svg {
		fill: #fff;
		width: 2rem;
		height: 2rem;
	}

	button.embla__next {
		right: 0;
	}

	button.embla__prev {
		left: 0;
	}

	button.embla__prev > svg {
		translate: 0.75rem 0;
	}

	@media screen and (min-width: 768px) {
		section.embla > button > svg {
			width: 3rem;
			height: 3rem;
		}

		img.embla__slide {
			flex: 0 0 80%;
			padding: 0 1rem;
		}
	}

	@media (hover: hover) {
		section.embla > button > svg {
			opacity: 0.5;
			transition-duration: 0.2s;
		}

		section.embla > button:hover > svg,
		section.embla > button:active > svg {
			opacity: 1;
		}
	}
</style>
