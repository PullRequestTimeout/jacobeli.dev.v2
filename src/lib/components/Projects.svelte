<script>
	import ProjectCard from "./ProjectCard.svelte";
	import Title from "./Title.svelte";
	import { projects } from "../data/projects";
	let openedCards = Array(projects.length).fill(false);

	function handleCloseCards(index, isOpened) {
		openedCards = openedCards.map((_, i) => (i === index ? isOpened : false));
	}
</script>

<!-- Preload images for projects -->
<svelte:head>
	{#each projects as project}
		<link rel="preload" as="image" href={project.image} />
	{/each}
</svelte:head>

<section>
	<Title innerText="Selected Works" id="work" />
	{#each projects as project, index}
		<hr />
		<ProjectCard
			title={project.title}
			subtitle={project.subtitle}
			date={project.date}
			description={project.description}
			video={project.video}
			image={project.image}
			link={project.link}
			checked={openedCards[index]}
			on:closeCards={(event) => handleCloseCards(index, event.detail)}
		/>
	{/each}
	<hr />
</section>

<style>
	hr {
		width: 100%;
		border: none;
		border-bottom: 1px solid var(--clr-white);
	}
</style>
