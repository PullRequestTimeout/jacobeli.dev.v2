<script>
	import ProjectCard from "./ProjectCard.svelte";

	export let array = [];

	// Close other cards
	let openedCards = Array(array.length).fill(false);
	function handleCloseCards(index, isOpened) {
		openedCards = openedCards.map((_, i) => (i === index ? isOpened : false));
	}
</script>

{#each array as arrItem, index}
	<hr />
	<ProjectCard
		title={arrItem.title}
		subtitle={arrItem.subtitle}
		date={arrItem.date}
		description={arrItem.description}
		video={arrItem.video}
		image={arrItem.image}
		link={arrItem.link}
		checked={openedCards[index]}
		on:closeCards={(event) => handleCloseCards(index, event.detail)}
	/>
{/each}
<hr />

<style>
	hr {
		width: 100%;
		border: none;
		border-bottom: 1px solid var(--clr-white);
	}
</style>
