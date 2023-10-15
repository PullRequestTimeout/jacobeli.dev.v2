<script>
	import IntersectionObserver from "svelte-intersection-observer";
	export let subtitle = "";
	let element;
</script>

<IntersectionObserver once rootMargin={"5px"} threshold={0.25} {element} let:intersecting>
	<div class="title" bind:this={element}>
		<h2 class="mulish"><span class:intersect={intersecting}>Creating</span> unique experiences</h2>
		<p class="mulish">{subtitle}</p>
	</div>
</IntersectionObserver>

<style>
	div.title {
		display: grid;
		padding: 1rem;
		gap: 1rem;
	}

	div.title h2,
	div.title p {
		text-transform: uppercase;
	}

	div.title h2 {
		font-size: 3rem;
	}

	div.title p {
		margin-left: 0.25rem;
	}

	div.title h2 span {
		/* text-decoration: line-through; */
		position: relative;
	}

	div.title h2 span::before {
		content: "";
		background-color: #fff;
		position: absolute;
		height: 3px;
		width: 0%;
		left: 0;
		bottom: 50%;
		transition-duration: 0.5s;
	}

	div.title h2 span.intersect::before {
		width: 100%;
	}

	div.title h2 span::after {
		content: "capturing";
		position: absolute;
		font-size: 2rem;
		transform: translate(-75%, 2rem);
		rotate: 10deg;
		background-color: var(--clr-gold);
		box-shadow: 0.5rem 0.5rem 1rem #000000a4;
		padding: 0.25rem;
		opacity: 0;
		transition-duration: 0.5s;
		transition-delay: 0.5s;
	}

	div.title h2 span.intersect::after {
		opacity: 1;
	}

	@media screen and (min-width: 640px) {
		div.title h2 {
			font-size: 4.2rem;
		}

		p {
			font-size: 1.2rem;
		}

		div.title h2 span::after {
			font-size: 2.75rem;
			transform: translate(-100%, 3rem);
		}
	}

	@media screen and (min-width: 768px) {
		div.title {
			padding: 2rem;
		}

		div.title h2 {
			font-size: 5rem;
		}

		div.title h2 span::after {
			font-size: 3rem;
		}

		div.title h2 span::before {
			height: 4px;
		}
	}

	@media screen and (min-width: 1024px) {
		div.title h2 {
			font-size: 7rem;
		}

		div.title h2 span::after {
			font-size: 4.5rem;
			transform: translate(-100%, 4rem);
		}

		div.title h2 span::before {
			height: 5px;
		}
	}

	@media screen and (min-width: 1280px) {
		div.title h2 {
			font-size: 8.5rem;
		}

		div.title h2 span::after {
			font-size: 5rem;
			transform: translate(-110%, 5rem);
		}

		div.title h2 span::before {
			height: 6px;
		}
	}

	@media screen and (min-width: 1536px) {
		div.title h2 {
			font-size: 10rem;
		}

		div.title h2 span::after {
			font-size: 6rem;
			transform: translate(-110%, 6rem);
			rotate: 7.5deg;
		}

		div.title h2 span::before {
			height: 7px;
		}
	}
</style>
