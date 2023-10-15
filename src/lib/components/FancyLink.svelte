<script>
	export let innerText;
	export let orientation;
	export let url = "";
	export let invert = false;

	let rotate;

	if (orientation == "down") {
		rotate = "30";
	} else if (orientation == "up") {
		rotate = "-30";
	}
</script>

{#if url.charAt(0) == "#"}
	<a href={url} class="button baloo" class:invert style="--rotate: {`${rotate}deg`}"
		><span>{innerText}</span></a
	>
{:else}
	<a href={url} class="button baloo" class:invert style="--rotate: {`${rotate}deg`}"
		><span>{innerText}</span></a
	>
{/if}

<style>
	.button {
		user-select: none;
		position: relative;
		display: flex;
		align-items: center;
		min-width: 8rem;
		width: max-content;
		text-align: left;
		z-index: 300;
		padding: 1.1rem 4rem 1rem 1.25rem;
		font-size: 1.2rem;
		border-radius: 2rem;
		border: none;
		background-color: var(--clr-white);
		color: var(--clr-black);
		transition: 0.2s ease;
		overflow: hidden;
	}

	.button span {
		position: relative;
		z-index: 304;
		user-select: none;
	}

	.button:hover {
		cursor: pointer;
	}

	.button::before {
		content: url(/assets/arrow.svg);
		z-index: 303;
		filter: invert(1);
		right: 0.65rem;
		top: 17%;
	}

	.button::after {
		content: "";
		background-color: var(--clr-gold);
		z-index: 302;
		transform: translateY(-50%);
		top: 50%;
		right: 0.5rem;
		height: 2.5rem;
		border-radius: 50%;
		aspect-ratio: 1;
	}

	.button::after,
	.button::before {
		transition: 0.2s ease;
		position: absolute;
	}

	.button.invert {
		background-color: var(--clr-black);
		color: var(--clr-white);
	}

	.button:hover,
	.button:focus,
	.button:active {
		background-color: var(--clr-gold);
		color: var(--clr-white);
	}

	.button:hover::before,
	.button:focus::before,
	.button:active::before {
		transform: rotate(var(--rotate));
		color: var(--clr-white);
	}

	.button:hover::after,
	.button:focus::after,
	.button:active::after {
		transform: translateY(-50%) scale(10);
	}
</style>
