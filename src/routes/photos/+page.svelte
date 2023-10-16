<script>
	import Carousel from "./Carousel.svelte";
	import PhotoHero from "$lib/components/PhotoHero.svelte";
	import { events } from "$lib/data/events.js";
	import Projects from "$lib/components/Projects.svelte";
	import Title from "$lib/components/Title.svelte";
</script>

<svelte:head>
	<title>Photos - Jacob Druery // Creative Developer</title>
	<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
</svelte:head>

<PhotoHero subtitle="// Sometimes I take photos" />
<Carousel />
<section>
	<Title innerText="Recent Events" id="events" />
	<Projects array={events} />
</section>

<style>
	section {
		padding: 0 1rem 2rem 1rem;
	}

	@media screen and (min-width: 768px) {
		section {
			padding: 0 2rem 2rem 2rem;
		}
	}
</style>
