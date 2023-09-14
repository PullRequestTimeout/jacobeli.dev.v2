<script>
    import { onMount } from "svelte"

    let complete = false

    onMount(() => {
        complete = true
    })
</script>

<div class:complete />

<style>
    div {
        pointer-events: none;
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    div.complete {
        animation: blurIn 4s ease-in-out forwards;
    }

    @keyframes blurIn {
        0% {
            opacity: 1;
            backdrop-filter: blur(5rem);
            background-color: var(--clr-white);
        }

        50% {
            opacity: 1;
            backdrop-filter: blur(5rem);
            background-color: var(--clr-black);
        }

        100% {
            opacity: 0;
            backdrop-filter: blur(0);
        }
    }
</style>
