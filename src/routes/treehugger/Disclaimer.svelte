<script>
	import IconButton from "./IconButton.svelte";
	import { fade } from "svelte/transition";

	let modalOpen = true;
	const disclaimerSeen = sessionStorage.getItem("disclaimerSeen");

	function dismissModal() {
		modalOpen = false;
		sessionStorage.setItem("disclaimerSeen", "true");
	}
</script>

{#if modalOpen && !disclaimerSeen}
	<div transition:fade={{ duration: 200 }} class="overlay">
		<section class="modal">
			<h2 class="mulish">Welcome!</h2>
			<p class="baloo">
				Thanks for coming to check out the photos I took at the Treehugger Hare Scramble this year!
			</p>
			<p class="baloo">
				This is my personal website I code from scratch; I use it for a portfolio, testing new code
				ideas etc, but I didn't build it with the intention of it being an online store. However if
				you'd like a high-res, non watermarked copy of any of the photos I took at the event, feel
				free to use the photo request system I quickly threw together this week, or shoot me an
				email if you have any questions!
			</p>
			<IconButton innerText="Ok got it!" invert mail callback={dismissModal} />
		</section>
	</div>
{/if}

<style>
	div.overlay {
		position: fixed;
		z-index: 10;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100%;
		background-color: #000000da;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	section.modal {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--clr-white);
		max-width: calc(90% - 2rem);
		gap: 1rem;
		padding: 1rem;
	}

	h2,
	p {
		color: var(--clr-black);
		line-height: 1.3;
		text-align: center;
	}

	h2 {
		text-transform: uppercase;
		font-size: 2rem;
	}

	@media screen and (min-width: 768px) {
		section.modal {
			padding: 2rem;
			max-width: 30rem;
		}

		h2 {
			font-size: 3rem;
		}

		p {
			font-size: 1.2rem;
		}
	}
</style>
