<script>
	import FancyLink from "./FancyLink.svelte";
	import Title from "./Title.svelte";
</script>

<section>
	<Title innerText="About Me" id="about" />
	<div class="text">
		<h3 class="mulish">Creating unique experiences</h3>
		<p class="baloo">
			Hey there, I'm Jacob! I'm a freelance web developer and photographer with a passion for
			crafting interesting, engaging digital experiences. Whether it's a new landing page for your
			small business or a full-stack web app, I love solving problems and bringing ideas to life.
			I'm always looking for a new challenge and am constantly pushing myself to find new skills to
			learn. Let's connect and create something amazing together!
		</p>
		<FancyLink innerText="Download Resume" orientation="down" url="/JacobDrueryResume.pdf" />
	</div>
</section>

<style>
	h3 {
		font-size: 3rem;
		text-transform: uppercase;
	}

	p {
		line-height: 1.3;
	}

	.text {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	@media screen and (min-width: 640px) {
		h3 {
			font-size: 4.2rem;
		}

		p {
			font-size: 1.2rem;
		}
	}

	@media screen and (min-width: 768px) {
		h3 {
			font-size: 5rem;
		}

		p {
			font-size: 1.4rem;
		}
	}

	@media screen and (min-width: 1024px) {
		h3 {
			font-size: 7rem;
		}

		p {
			max-width: 80%;
		}
	}

	@media screen and (min-width: 1280px) {
		h3 {
			font-size: 8.5rem;
		}

		p {
			max-width: 60%;
		}
	}

	@media screen and (min-width: 1536px) {
		.text {
			gap: 3rem;
		}

		h3 {
			font-size: 10rem;
		}
	}
	/* Breakpoints 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
