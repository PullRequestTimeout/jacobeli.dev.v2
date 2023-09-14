<script>
	// Imports
	import MouseEffect from '$lib/components/MouseEffect.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Blurb from '$lib/components/Blurb.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Tech from '$lib/components/Tech.svelte';
	import Loading from '$lib/components/Loading.svelte';

	// Remove history state and load website with scroll at top
	// window.history.replaceState({}, document.title, '/');
	// setTimeout(() => window.scrollTo(0, 0), 100);
	// if ('scrollRestoration' in history) {
	// 	history.scrollRestoration = 'manual';
	// }
</script>

<Navbar />
<main>
	<Hero />
	<Blurb />
	<Projects />
	<About />
	<Tech />
</main>
<Footer />

<Overlay />
<MouseEffect />
<Loading />

<style>
	main {
		padding: 1rem;
	}

	@media screen and (min-width: 768px) {
		main {
			padding: 2rem;
		}
	}

	/* Breakpoints 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
