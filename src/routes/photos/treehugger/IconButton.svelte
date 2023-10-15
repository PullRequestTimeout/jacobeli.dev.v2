<script>
	export let innerText;
	export let callback;
	export let invert = false;
	export let mail = false;
</script>

<button class="button" class:invert class:mail on:click={callback}>
	<span>{innerText}</span>
</button>

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
		padding: 0.5rem 3rem 0.5rem 1.25rem;
		font-size: 1rem;
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
		transition-duration: 0.2s;
	}

	.button:hover {
		cursor: pointer;
	}

	.button::before {
		content: url(/assets/add.svg);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 303;
		color: var(--clr-white);
		right: 0.5rem;
		top: 0.35rem;
		filter: invert(1);
	}

	.button.mail::before {
		content: "";
	}

	.button::after {
		content: "";
		background-color: var(--clr-gold);
		z-index: 302;
		transform: translateY(-50%);
		top: 50%;
		right: 0.5rem;
		height: 1.5rem;
		border-radius: 50%;
		aspect-ratio: 1;
		right: 0.5rem;
	}

	.button.mail::after {
		height: 0.5rem;
		right: 1rem;
	}

	.button::after,
	.button::before {
		transition: 0.2s ease;
		position: absolute;
	}

	.button:hover,
	.button:focus,
	.button:active {
		background-color: var(--clr-gold);
		color: var(--clr-white);
	}

	.button.mail:hover span,
	.button.mail:focus span,
	.button.mail:active span {
		transform: translateX(0.75rem);
	}

	.button:hover::before,
	.button:focus::before,
	.button:active::before {
		transform: rotate(90deg);
		color: var(--clr-white);
	}

	.button.mail:hover::before,
	.button.mail:focus::before,
	.button.mail:active::before {
		transform: rotate(0deg);
	}

	.button:hover::after,
	.button:focus::after,
	.button:active::after {
		transform: translateY(-50%) scale(20);
	}

	.button.invert {
		background-color: var(--clr-black);
		color: var(--clr-white);
	}

	.button.invert:hover,
	.button.invert:focus,
	.button.invert:active {
		background-color: var(--clr-gold);
	}
</style>
