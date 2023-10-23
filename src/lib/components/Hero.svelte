<section>
	<div class="container">
		<div class="title">
			<h1 class="baloo">Jacob Druery</h1>
			<h2 class="mulish">Creative Developer</h2>
		</div>
		<p class="subtitle baloo">Creating engaging experiences for the web</p>
	</div>
</section>

<style>
	section {
		height: calc(100vh - 8rem);
		height: calc(100svh - 8rem);
		display: grid;
		align-items: end;
	}

	.container {
		display: grid;
		gap: 1rem;
		grid-template-columns: fit-content(8ch);
	}

	.title {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	h2,
	h1 {
		text-transform: uppercase;
	}

	h2 {
		font-size: 3rem;
		transform: translate(-0.2rem, 0.25rem);
	}

	@media screen and (min-width: 360px) {
		h2 {
			font-size: 3.7rem;
		}
	}

	@media screen and (min-width: 640px) {
		h2 {
			font-size: 4.5rem;
		}
	}

	@media screen and (min-width: 768px) {
		section {
			height: calc(100vh - 12rem);
			height: calc(100svh - 12rem);
		}

		.container {
			grid-template-columns: fit-content(8ch) auto;
			gap: 1rem;
		}

		h2 {
			font-size: 5rem;
			transform: translate(-0.4rem, 0.5rem);
		}

		.subtitle {
			align-self: end;
		}
	}

	@media screen and (min-width: 1024px) {
		h2 {
			font-size: 7rem;
			transform: translate(-0.5rem, 0.7rem);
		}
	}

	@media screen and (min-width: 1280px) {
		h2 {
			font-size: 9rem;
			transform: translate(-0.8rem, 0.8rem);
		}

		p,
		h1 {
			font-size: 1.2rem;
		}
	}

	@media screen and (min-width: 1536px) {
		h2 {
			font-size: 11rem;
		}
	}

	/* 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
