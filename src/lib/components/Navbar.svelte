<script>
	import { page } from "$app/stores";
	import { slide } from "svelte/transition";

	let open = false;
	const closeNav = () => (open = false);
</script>

<header class="mulish">
	<a href="/">JACOBELI.DEV</a>
	<button on:click={() => (open = !open)} aria-label="hamburger menu"
		><div class="hamburger" class:open /></button
	>
	{#if open}
		<nav class="small-nav" transition:slide={{ duration: 400, axis: "x" }}>
			<ul>
				{#if $page.url.pathname === "/"}
					<li><a on:click={closeNav} href="#work">WORK</a></li>
					<li><a on:click={closeNav} href="#about">ABOUT</a></li>
					<li><a on:click={closeNav} href="#contact">CONTACT</a></li>
				{:else}
					<li><a on:click={closeNav} href="/">HOME</a></li>
					<li><a on:click={closeNav} href="/photos">PHOTOS</a></li>
					<li><a on:click={closeNav} href="#contact">CONTACT</a></li>
				{/if}
			</ul>
		</nav>
	{/if}
	<nav class="large-nav">
		<ul>
			{#if $page.url.pathname === "/"}
				<li><a href="#work">WORK</a></li>
				<li><a href="#about">ABOUT</a></li>
				<li><a href="#contact">CONTACT</a></li>
			{:else}
				<li><a href="/">HOME</a></li>
				<li><a href="/photos">PHOTOS</a></li>
				<li><a href="#contact">CONTACT</a></li>
			{/if}
		</ul>
	</nav>
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

	nav {
		position: absolute;
		display: flex;
		place-items: center;
		right: 0;
		background-color: var(--clr-white);
		height: 4rem;
		width: 100vw;
	}

	nav.large-nav {
		display: none;
	}

	nav ul {
		display: flex;
		gap: 1rem;
		padding: 0 1rem;
	}

	nav ul li a {
		color: var(--clr-black);
	}

	header button {
		position: relative;
		z-index: 100;
		background-color: transparent;
		border: none;
		cursor: pointer;
		height: 2rem;
		width: 2rem;
		padding: 0;
	}

	div.hamburger {
		position: relative;
	}

	div.hamburger::before,
	div.hamburger::after {
		transition: 0.4s ease-in-out;
		content: "";
		position: absolute;
		left: 0;
		width: 2rem;
		height: 2px;
		background-color: var(--clr-white);
	}

	div.hamburger::before {
		translate: 0 0.3rem;
	}

	div.hamburger::after {
		translate: 0 -0.3rem;
	}

	div.hamburger.open::after,
	div.hamburger.open::before {
		background-color: var(--clr-black);
	}

	div.hamburger.open::before {
		rotate: 45deg;
		translate: 0 0;
	}

	div.hamburger.open::after {
		rotate: -45deg;
		translate: 0 0;
	}

	@media (hover: hover) {
		nav ul li a {
			position: relative;
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
	}

	@media screen and (min-width: 768px) {
		header {
			padding: 2rem;
		}

		header button,
		nav.small-nav {
			display: none;
		}

		nav.large-nav {
			display: flex;
		}

		nav {
			position: relative;
			left: 0;
			background-color: transparent;
			height: auto;
			width: auto;
		}

		nav ul {
			padding: 0;
		}

		nav ul li a {
			color: var(--clr-white);
		}

		nav ul li a::after {
			background-color: var(--clr-white);
		}
	}
</style>
