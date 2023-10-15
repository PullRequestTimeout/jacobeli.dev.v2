<script>
	// Imports
	import Hero from "$lib/components/Hero.svelte";
	import Blurb from "$lib/components/Blurb.svelte";
	import About from "$lib/components/About.svelte";
	import Projects from "$lib/components/Projects.svelte";
	import Tech from "$lib/components/Tech.svelte";
	import Title from "$lib/components/Title.svelte";
	import { projects } from "$lib/data/projects";
</script>

<svelte:head>
	<title>Jacob Druery // Creative Developer</title>
</svelte:head>
<main>
	<Hero />
	<Blurb />
	<section>
		<Title innerText="Selected Works" id="work" />
		<Projects array={projects} />
		<p class="photo-link baloo">...and sometimes I take <a href="/photos">photos</a></p>
	</section>
	<About />
	<Tech />
</main>

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
			margin-top: 1rem;
			font-size: 1.2rem;
		}
	}

	/* Breakpoints 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
