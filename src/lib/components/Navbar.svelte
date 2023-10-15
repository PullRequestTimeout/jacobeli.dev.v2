<script>
	import { page } from "$app/stores";

	let checked = false;
	const uncheck = () => {
		checked = false;
	};
</script>

<header class="mulish">
	<a href="/">JACOBELI.DEV</a>
	{#if $page.url.pathname === "/"}
		<input type="checkbox" id="navCheckbox" bind:checked />
		<label for="navCheckbox" />

		<nav>
			<ul>
				<li><a on:click={uncheck} href="#work">WORK</a></li>
				<li><a on:click={uncheck} href="#about">ABOUT</a></li>
				<li><a on:click={uncheck} href="#contact">CONTACT</a></li>
			</ul>
		</nav>
	{:else}
		<input type="checkbox" id="navCheckbox" bind:checked />
		<label for="navCheckbox" />

		<nav>
			<ul>
				<li><a on:click={uncheck} href="/">HOME</a></li>
				<li><a on:click={uncheck} href="/photos">PHOTOS</a></li>
				<li><a on:click={uncheck} href="#contact">CONTACT</a></li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	header {
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		overflow: hidden;
		position: relative;
	}

	header > a {
		font-size: 1.2rem;
		font-weight: 100;
	}

	nav ul {
		display: flex;
		gap: 1rem;
		padding: 0 1rem;
	}

	nav ul li a {
		position: relative;
		color: var(--clr-black);
	}

	nav ul li a::after {
		content: "";
		position: absolute;
		z-index: -1;
		bottom: 45%;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--clr-black);
		transition: width 0.2s ease-in-out;
	}

	nav ul li a:hover::after,
	nav ul li a:active::after {
		width: 100%;
	}

	input[type="checkbox"] {
		display: none;
	}

	label {
		position: relative;
		z-index: 10;
		height: 2rem;
		aspect-ratio: 1;
		background-color: transparent;
	}

	label::before,
	label::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		height: 2px;
		width: 2rem;
		background-color: var(--clr-white);
		transition: transform 0.2s ease-in-out;
	}

	label::before {
		top: 35%;
	}

	label::after {
		top: 65%;
	}

	input[type="checkbox"]:checked ~ nav {
		transform: translateX(0);
	}

	input[type="checkbox"] ~ label::after,
	input[type="checkbox"] ~ label::before {
		transition: 0.4s ease-in-out;
	}

	input[type="checkbox"]:checked ~ label::before,
	input[type="checkbox"]:checked ~ label::after {
		background-color: var(--clr-black);
		transform-origin: center;
		top: 50%;
	}

	input[type="checkbox"]:checked ~ label::before {
		transform: rotate(45deg);
	}

	input[type="checkbox"]:checked ~ label::after {
		transform: rotate(-45deg);
	}

	nav {
		position: absolute;
		display: flex;
		place-items: center;
		right: 0;
		background-color: var(--clr-white);
		transform: translateX(100%);
		transition: transform 0.4s ease-in-out;
		height: 4rem;
		width: 100vw;
	}

	@media screen and (min-width: 768px) {
		header {
			padding: 2rem;
		}
	}

	@media screen and (min-width: 768px) {
		label {
			display: none;
		}

		nav {
			position: relative;
			transform: translateX(0);
			background-color: transparent;
			height: auto;
			width: auto;
		}

		nav ul li a {
			color: var(--clr-white);
		}

		nav ul li a::after {
			background-color: var(--clr-white);
		}
	}
</style>
