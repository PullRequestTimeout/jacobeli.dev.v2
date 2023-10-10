<script>
	// Imports
	import Hero from "$lib/components/Hero.svelte";
	import Blurb from "$lib/components/Blurb.svelte";
	import About from "$lib/components/About.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Tech from "$lib/components/Tech.svelte";
	import Loading from "$lib/components/Loading.svelte";
</script>

<svelte:head>
	<title>Jacob Druery // Creative Developer</title>
</svelte:head>
<main>
	<Hero />
	<!-- ^ This has garbage performance -->
	<Blurb />
	<Projects />
	<!-- ^ And this has garbager performance -->
	<p class="photo-link baloo">...and sometimes I take <a href="/treehugger">photos</a></p>
	<About />
	<Tech />
</main>

<!-- <Loading /> -->
<!-- There's gotta be a more elegant way of doing this... -->

<style>
	main {
		padding: 1rem;
	}

	p.photo-link {
		text-align: center;
		font-size: 1rem;
	}

	p.photo-link a {
		text-decoration: underline;
	}

	@media screen and (min-width: 768px) {
		main {
			padding: 2rem;
		}

		p.photo-link {
			font-size: 1.2rem;
		}
	}

	/* Breakpoints 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
