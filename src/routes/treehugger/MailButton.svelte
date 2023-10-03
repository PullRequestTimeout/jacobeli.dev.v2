<script>
	import { fade } from "svelte/transition";
	// import photoSelection from "$lib/photoSelection.js";

	let photoMenuOpen = false;
	function handlePhotoMenu() {
		photoMenuOpen = !photoMenuOpen;
	}

	let arrayLength = "1";
</script>

<!-- {!if photoArray.length > 0} -->
<button transition:fade={{ duration: 200 }} class="mail" on:click={handlePhotoMenu}>
	<img src="/assets/email.svg" alt="Email icon" />
	<!-- {#if}  -->
	<div class="photo-count baloo">{arrayLength}</div>
	<!-- {/if} -->
</button>
<!-- {/if} -->
{#if photoMenuOpen}
	<div transition:fade={{ duration: 200 }} class="photo-menu" />
{/if}

<style>
	button.mail {
		cursor: pointer;
		background-color: var(--clr-gold);
		border: none;
		position: fixed;
		right: 2rem;
		top: 2rem;
		padding: 0.75rem;
	}

	button.mail img {
		filter: invert(1);
		width: 2rem;
	}

	button.mail div.photo-count {
		font-size: 1rem;
		display: grid;
		place-content: center;
		position: absolute;
		background-color: var(--clr-white);
		color: var(--clr-black);
		padding: 0.25rem;
		width: 1.5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		top: -20%;
		right: -20%;
	}

	div.photo-menu {
		position: fixed;
		top: 8rem;
		right: 2rem;
		height: 10rem;
		aspect-ratio: 1;
		background-color: #fff;
	}
</style>
