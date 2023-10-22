<script>
	import { dev } from "$app/environment";

	import MailButton from "./MailButton.svelte";
	import Lightbox from "$lib/components/Lightbox.svelte";
	import PhotoHero from "$lib/components/PhotoHero.svelte";
	import Disclaimer from "./Disclaimer.svelte";

	// New Masonry component
	import { MasonryGrid } from "@egjs/svelte-grid";
	const gap = 16;
	const defaultDirection = "end";
	const align = "stretch";
	const column = 0;
	const columnSize = 100;
	const columnSizeRatio = 0;
	const maxStretchColumnSize = 350;

	// Imports array of image urls
	export let data;
	// Arr of image objects, containing url and imgNo keys
	const imgObjArr = data.imgObjArr;
</script>

<svelte:head>
	<title>Treehugger 2023 - Jacob Druery // Creative Developer</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<main>
	<PhotoHero subtitle={"// Treehugger hare scramble 2023"} />
	<section class="gallery">
		<MasonryGrid
			class="container"
			{defaultDirection}
			{gap}
			{align}
			{column}
			{columnSize}
			{columnSizeRatio}
			{maxStretchColumnSize}
		>
			{#each imgObjArr as imgObj}
				<div class="item">
					<Lightbox {imgObj} />
				</div>
			{/each}
		</MasonryGrid>
	</section>
</main>
<MailButton />
<Disclaimer />

<style>
	section.gallery {
		padding: 0 1rem;
		margin-bottom: 2rem;
	}

	@media screen and (min-width: 768px) {
		section.gallery {
			padding: 0 2rem;
		}
	}
</style>
