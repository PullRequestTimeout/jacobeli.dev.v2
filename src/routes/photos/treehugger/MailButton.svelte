<script>
	import { fade } from "svelte/transition";
	import { photoStore } from "$lib/photoStore.js";
	import IconButton from "./IconButton.svelte";
	import { clickOutside } from "$lib/clickOutside.js";

	let photoMenuOpen = false;
	function handlePhotoMenu() {
		photoMenuOpen = !photoMenuOpen;
	}

	$: if ($photoStore.length < 1) {
		photoMenuOpen = false;
	}

	function purchaseRequestEmail() {
		const body = `Hi Jacob!
		
I was hoping to purchase the following photos from the TreeHugger event:
		
${$photoStore}
		
Thanks!`;

		location.href =
			"mailto:jacobedruery@gmail.com?subject=" +
			encodeURIComponent("Photo Request") +
			"&body=" +
			encodeURIComponent(body);
	}
</script>

<div
	use:clickOutside
	on:click_outside={() => {
		photoMenuOpen = false;
	}}
>
	{#if $photoStore.length > 0}
		<button
			transition:fade={{ duration: 200 }}
			class="mail"
			on:click={handlePhotoMenu}
			aria-label="Open photo request menu"
		>
			<img src="/assets/email.svg" alt="Email icon" />
			<div class="photo-count baloo">{$photoStore.length}</div>
		</button>
	{/if}
	{#if $photoStore.length > 0 && photoMenuOpen}
		<div transition:fade={{ duration: 200 }} class="photo-menu">
			{#each $photoStore as photo}
				<div class="photo-list-item">
					<p class="baloo">#{photo}</p>
					<button
						class="remove-photo"
						on:click={() => {
							$photoStore = $photoStore.filter((n) => n !== photo);
						}}
					>
						<img src="/assets/remove.svg" alt="Remove icon" />
					</button>
				</div>
			{/each}
			<div class="hr" />
			<p class="baloo">Price: ${$photoStore.length * 15}</p>
			<div class="btn-wrap">
				<IconButton innerText="Request Photos" invert mail callback={purchaseRequestEmail} />
			</div>
		</div>
	{/if}
</div>

<style>
	button.mail {
		cursor: pointer;
		background-color: var(--clr-gold);
		border: none;
		position: fixed;
		right: 2rem;
		top: 2rem;
		padding: 0.75rem;
		transition-duration: 0.2s;
	}

	button.mail:hover {
		scale: 1.025;
	}

	button.mail:active {
		scale: 0.975;
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
		height: 1.5rem;
		/* aspect-ratio: 1; */
		border-radius: 50%;
		top: -20%;
		right: -20%;
	}

	button.mail,
	div.photo-menu {
		box-shadow: 0.5rem 0.5rem 1rem #000000a4;
	}

	div.photo-menu {
		position: fixed;
		top: 7rem;
		right: 2rem;
		max-height: 60vh;
		background-color: var(--clr-white);
		padding: 2rem;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		scrollbar-width: thin;
	}

	div.photo-menu::-webkit-scrollbar {
		width: 9px;
	}
	div.photo-menu::-webkit-scrollbar-track {
		background: transparent;
	}
	div.photo-menu::-webkit-scrollbar-thumb {
		background-color: rgba(155, 155, 155, 0.5);
		border: transparent;
	}

	div.photo-menu p {
		color: var(--clr-black);
	}

	div.photo-list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	button.remove-photo {
		display: flex;
		justify-items: center;
		align-items: center;
		border: none;
		cursor: pointer;
		background-color: transparent;
		height: 1.5rem;
		width: 1.5rem;
		/* aspect-ratio: 1; */
		border-radius: 50%;
		transition-duration: 0.2s;
	}

	button.remove-photo:hover,
	button.remove-photo:focus {
		background-color: #a1794568;
	}

	button.remove-photo img {
		width: 1rem;
	}

	div.btn-wrap {
		display: flex;
		justify-content: center;
		margin-top: 0.5rem;
		box-shadow: #000000a4;
	}

	.hr {
		border-bottom: solid 2px var(--clr-black);
		opacity: 0.75;
		margin-top: 1rem;
	}
</style>
