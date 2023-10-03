<script>
	import Masonry from "svelte-bricks";

	import MailButton from "./MailButton.svelte";
	import Lightbox from "$lib/components/Lightbox.svelte";
	import PhotoHero from "./PhotoHero.svelte";

	export let data;

	let [minColWidth, maxColWidth, gap] = [300, 600, 32];
	let width, height;
</script>

<svelte:head>
	<title>Treehugger 2023 - Jacob Druery // Creative Developer</title>
</svelte:head>
<main>
	<PhotoHero subtitle={"// Treehugger hare scramble 2023"} />
	<section class="gallery">
		<Masonry
			items={data.imgNumberArray}
			{minColWidth}
			{maxColWidth}
			{gap}
			let:item
			bind:masonryWidth={width}
			bind:masonryHeight={height}
		>
			<Lightbox imageNumber={item} />
		</Masonry>
	</section>
</main>
<MailButton />

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
