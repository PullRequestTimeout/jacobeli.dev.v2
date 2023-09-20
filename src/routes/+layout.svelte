<script>
	import Navbar from "$lib/components/Navbar.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Overlay from "$lib/components/Overlay.svelte";
	import MouseEffect from "$lib/components/MouseEffect.svelte";
</script>

<Navbar />
<slot />
<Footer />
<Overlay />
<!-- <MouseEffect /> -->
