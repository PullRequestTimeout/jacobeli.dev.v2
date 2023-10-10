<script>
	import { createEventDispatcher, onMount } from "svelte";
	import { fly } from "svelte/transition";
	import FancyLink from "./FancyLink.svelte";

	export let title;
	export let subtitle;
	export let date;
	export let description;
	export let image;
	export let link;

	// Open this and close others
	export let open = false;
	const dispatch = createEventDispatcher();
	function handleClose() {
		open = false;
		dispatch("close");
	}

	function swipeClosed(element) {
		let touchStartY = 0;
		let touchEndY = 0;

		element.addEventListener(
			"touchstart",
			function (event) {
				touchStartY = event.changedTouches[0].screenY;
			},
			{ passive: true }
		);

		element.addEventListener(
			"touchend",
			function (event) {
				touchEndY = event.changedTouches[0].screenY;
				handleGesture();
			},
			{ passive: true }
		);

		function handleGesture() {
			if (touchEndY > touchStartY && touchEndY - touchStartY > 20) {
				handleClose();
			}
		}
	}
</script>

<svelte:head>
	<link rel="preload" as="image" href={image} />
</svelte:head>

{#if open}
	<article transition:fly={{ y: 50, duration: 500 }} use:swipeClosed>
		<button on:click={handleClose} aria-label="close" />
		<img src={image} alt={"Mockup of " + title} />
		<div>
			<h2 class="mulish">{title}</h2>
			<h3 class="mulish">{subtitle}</h3>
			<p class="mulish">// {date}</p>
			<hr />
			<p class="baloo">{description}</p>
			<FancyLink url={link} innerText={"View Live"} orientation="up" invert />
		</div>
	</article>
{/if}

<style>
	article {
		touch-action: none;
		position: fixed;
		color: var(--clr-black);
		z-index: 500;
		height: calc(100dvh + 2px);
		top: 0;
		left: 0;
		background-color: var(--clr-white);
		transition: 0.4s ease-out;
		overflow-y: scroll;
	}

	hr {
		width: 100%;
		border: none;
		border-bottom: 1px solid var(--clr-black);
	}

	h2,
	h3,
	p {
		line-height: 1.3;
	}

	h2 {
		font-size: 2rem;
	}

	h2,
	h3 {
		text-transform: uppercase;
	}

	div {
		padding: 1rem;
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
	}

	p.baloo {
		margin: 1.5rem 0 2rem 0;
	}

	button {
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		width: 2rem;
		aspect-ratio: 1;
		border: none;
		background-color: transparent;
		margin: 0.5rem;
	}

	button::before,
	button::after {
		content: "";
		position: absolute;
		top: 50%;
		left: 0;
		height: 2px;
		width: 2rem;
		background-color: #fff;
	}

	button::before {
		transform: rotate(45deg);
	}

	button::after {
		transform: rotate(-45deg);
	}

	@media screen and (min-width: 768px) {
		div {
			padding: 2rem;
		}
	}

	@media screen and (min-width: 1024px) {
		article {
			display: none;
		}
	}
</style>
