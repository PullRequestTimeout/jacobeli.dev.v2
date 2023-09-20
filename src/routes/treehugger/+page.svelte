<script>
	const images = ["4812", "4833", "4842"];
</script>

<svelte:head>
	<title>Treehugger 2023 - Jacob Druery // Creative Developer</title>
</svelte:head>
<main>
	<div />
	<h2 />
	<section class="gallery">
		{#each images as image}
			<img src={`/assets/treehugger/DSC0${image}.jpg`} alt="" />
		{/each}
	</section>
</main>

<style>
	main {
		height: 100vh;
	}

	section.gallery {
		padding: 2rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		/* gap: 10vw; */
	}

	section img {
		width: 25rem;
	}
</style>
