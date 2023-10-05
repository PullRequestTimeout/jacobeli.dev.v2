<script>
	// Imports
	import Hero from "$lib/components/Hero.svelte";
	import Blurb from "$lib/components/Blurb.svelte";
	import About from "$lib/components/About.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Tech from "$lib/components/Tech.svelte";
	import Loading from "$lib/components/Loading.svelte";

	// Remove history state and load website with scroll at top
	// window.history.replaceState({}, document.title, '/');
	// setTimeout(() => window.scrollTo(0, 0), 100);
	// if ('scrollRestoration' in history) {
	// 	history.scrollRestoration = 'manual';
	// }
</script>

<svelte:head>
	<title>Jacob Druery // Creative Developer</title>
</svelte:head>
<main>
	<Hero />
	<!-- ^ This has garbage performance -->
	<Blurb />
	<Projects />
	<p class="photo-link baloo">...and sometimes I take <a href="/treehugger">photos</a></p>
	<!-- ^ And this has garbager performance -->
	<About />
	<Tech />
</main>

<!-- <Loading /> -->
<!-- There's gotta be a more elegant way of doing this... -->

<style>
	main {
		padding: 1rem;
	}

	@media screen and (min-width: 768px) {
		main {
			padding: 2rem;
		}
	}

	p.photo-link {
		text-align: center;
	}

	p.photo-link a {
		text-decoration: underline;
	}

	/* Breakpoints 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
