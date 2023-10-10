<script>
	// @ts-nocheck

	import TechIcon from "./TechIcon.svelte";
	import Title from "./Title.svelte";
	import Ticker from "svelte-ticker";

	const tech = [
		"nodejs",
		"figma",
		"react",
		"github",
		"html",
		"javascript",
		"svelte",
		"davinci",
		"css",
		"git",
		"adobe",
		"mongodb",
		"analytics",
		"express"
	];
</script>

<section>
	<Title innerText="My Technologies" id={false} />
	<div class="small-screens">
		<Ticker pausing={true}>
			{#each tech as tech}
				<TechIcon name={tech} />
			{/each}
		</Ticker>
	</div>
	<div class="large-screens">
		{#each tech as tech}
			<TechIcon name={tech} />
		{/each}
	</div>
</section>

<style>
	section {
		overflow: hidden;
		width: 100vw;
		transform: translateX(-1rem);
	}

	.large-screens {
		display: none;
	}

	@media screen and (min-width: 736px) {
		section {
			width: unset;
			transform: unset;
		}

		.small-screens {
			display: none;
		}

		.large-screens {
			display: grid;
			grid-template-columns: repeat(7, minmax(10vw, 1fr));
			place-items: center;
			gap: 1rem;
			margin: 0 auto;
		}
	}

	/* 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
