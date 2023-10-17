<script>
	export let innerText;
	export let id;
	export let invert = false;

	import IntersectionObserver from "svelte-intersection-observer";

	let element;
</script>

<IntersectionObserver rootMargin={"5px"} threshold={1} {element} let:intersecting>
	<div class="container" bind:this={element}>
		<h2 {id} class="baloo" class:intersect={intersecting} class:invert>{innerText}</h2>
	</div>
</IntersectionObserver>

<style>
	.container {
		display: flex;
		justify-content: center;
	}

	h2 {
		position: relative;
		text-align: center;
		text-transform: uppercase;
		color: var(--clr-white);
		/* Could be a variable below? */
		margin: 2rem 0;
		font-weight: 300;
		font-size: 1.2rem;
		width: fit-content;
	}

	h2::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 2px;
		background-color: var(--clr-white);
		margin: 0.5rem auto;
		transition: 0.3s ease-in-out;
		transition-delay: 0.2s; /* Needs tweaking */
	}

	h2.intersect::after {
		width: 100%;
	}

	h2.invert {
		color: var(--clr-black);
	}

	h2.invert::after {
		background-color: var(--clr-black);
	}

	/*@media screen and (min-width: 640px) {
        h2 {
            margin: 4rem 0;
        }
    } */
</style>
