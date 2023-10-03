<script>
	import MailButton from "./MailButton.svelte";
	import Lightbox from "$lib/components/Lightbox.svelte";
	import PhotoHero from "./PhotoHero.svelte";

	export let data;
</script>

<svelte:head>
	<title>Treehugger 2023 - Jacob Druery // Creative Developer</title>
</svelte:head>
<main>
	<PhotoHero subtitle={"// Treehugger hare scramble 2023"} />
	<section class="gallery">
		{#each data.imgNumberArray as image}
			<Lightbox imageNumber={image} />
		{/each}
	</section>
</main>
<MailButton />

<style>
	section.gallery {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	@media screen and (min-width: 768px) {
		section.gallery {
			padding: 2rem;
		}
	}
</style>
