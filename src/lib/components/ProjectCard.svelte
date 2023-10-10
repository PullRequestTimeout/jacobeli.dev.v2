<script>
	import { onMount, createEventDispatcher } from "svelte";
	import ProjectModal from "./ProjectModal.svelte";

	// Props
	export let title;
	export let subtitle;
	export let date;
	export let description;
	export let image;
	export let video;
	export let link;
	export let checked = false;

	const handleClose = () => {
		checked = false;
	};

	const dispatch = createEventDispatcher();
	const closeOtherCards = () => {
		if (checked) {
			dispatch("closeCards", checked);
		}
	};

	let videoOffset;
	let titleOffset;
	let videoElement;

	onMount(() => {
		videoElement.addEventListener("mouseenter", () => {
			videoElement.currentTime = 0;
			// Delays playing video until CSS animation is finished
			setTimeout(() => videoElement.play(), 500);
		});

		videoElement.addEventListener("mouseout", () => {
			videoElement.pause();
			// This delays returning the video back to one until CSS animation is finished
			setTimeout(() => (videoElement.currentTime = 0), 500);
		});
	});
</script>

<article
	class="project-card"
	class:expanded={checked}
	style="--title-offset: {`${titleOffset}px`}; --video-offset: {`${videoOffset}px`}"
>
	<input type="checkbox" id={title + "checkbox"} bind:checked on:change={closeOtherCards} />
	<label for={title + "checkbox"}>
		<div class="text">
			<div bind:offsetHeight={titleOffset}>
				<h2 class="mulish">{title}</h2>
				<h3 class="mulish">{subtitle}</h3>
				<p class="mulish">// {date}</p>
			</div>
			<p class="description baloo">{description}</p>
		</div>
	</label>

	<a href={link} class="media" target="_blank">
		<div bind:offsetHeight={videoOffset}>
			<video bind:this={videoElement} class:show={checked} loop muted>
				<source src={video} type="video/mp4" />
			</video>
			<img src={image} loading="lazy" alt={"Mockup of " + title} />
		</div>
	</a>
	<div class="arrow" class:show={checked} />
</article>
<ProjectModal
	{title}
	{subtitle}
	{date}
	{description}
	{image}
	{link}
	on:close={handleClose}
	open={checked}
/>

<style>
	label {
		cursor: pointer;
	}

	input[type="checkbox"] {
		display: none;
	}

	article {
		position: relative;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		overflow: hidden;
		height: var(--title-offset);
		transition: 0.5s;
		margin: 1rem 0;
	}

	h3,
	p {
		line-height: 1.6;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 0.5rem;
	}

	h2,
	h3 {
		text-transform: uppercase;
	}

	.media {
		position: relative;
		display: none;
	}

	video {
		object-fit: cover;
		width: 100%;
		aspect-ratio: 16/9;
		opacity: 0;
		transition: 0.5s ease;
	}

	video.show:hover {
		opacity: 1;
		transition-delay: 0.4s;
	}

	img {
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		width: 100%;
		aspect-ratio: 16/9;
	}

	.arrow {
		position: absolute;
		bottom: 0;
		right: 0;
	}

	.arrow::after {
		content: url(/assets/arrow.svg);
		filter: invert(1);
		display: flex;
		place-content: center;
		transform: rotate(45deg) translateX(0.25rem);
	}

	@media screen and (min-width: 640px) {
		h2 {
			font-size: 3rem;
		}
	}

	@media screen and (min-width: 1024px) {
		.arrow {
			opacity: 0;
			transform: rotate(-90deg);
			bottom: 1rem;
			right: 1rem;
			transition: 0.2s ease;
			pointer-events: none;
		}

		.arrow::after {
			padding: 0.5rem;
			background-color: rgba(0, 0, 0, 0.4);
			border-radius: 50%;
		}

		.arrow.show {
			opacity: 1;
			transition-delay: 0.4s;
		}

		.text {
			padding-right: 1rem;
		}

		article {
			grid-template-columns: 1fr 1fr;
		}

		.media {
			display: block;
		}

		article.expanded {
			height: var(--video-offset);
		}

		.description {
			opacity: 0;
			transition: 0.3s;
			margin-top: 1rem;
		}

		article.expanded .description {
			opacity: 1;
			transition-delay: 0.4s;
		}

		img {
			max-height: calc(var(--video-offset) - 1px);
		}
	}

	@media screen and (min-width: 1280px) {
		h2 {
			font-size: 3.5rem;
		}

		p.description {
			font-size: 1.2rem;
		}

		.arrow::after {
			padding: 1rem;
		}
	}

	@media screen and (min-width: 1536px) {
		h2 {
			font-size: 4rem;
		}
	}

	/* Breakpoints 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
