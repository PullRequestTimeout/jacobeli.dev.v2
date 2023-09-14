<script>
    export let name
</script>

<div class="icon">
    <img src={`/assets/tech/${name}.svg`} alt={`Default ${name} icon`} />
    <img class="color" src={`/assets/tech/${name}-color.svg`} alt={`Color ${name} icon`} />
    <p class="mulish">{name}</p>
</div>

<style>
    .icon {
        position: relative;
        width: 20vw;
        aspect-ratio: 1;
        margin: 1rem;
    }

    .icon img {
        width: 100%;
        height: 100%;
        transition: 0.2s;
    }

    .icon img.color {
        position: absolute;
        top: 0;
        transform: translateY(-1px) scale(0.985);
        left: 0;
        opacity: 0;
        transition: 0.2s;
    }

    p {
        opacity: 0;
        position: absolute;
        text-transform: uppercase;
        text-align: center;
        color: var(--clr-white);
        width: 100%;
        display: flex;
        justify-content: center;
        bottom: -2rem;
        text-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.5);
        transition: 0.2s;
    }

    .icon:hover p {
        opacity: 1;
    }

    @media screen and (min-width: 640px) {
        .icon {
            width: 10vw;
        }
    }

    @media screen and (min-width: 736px) {
        .icon {
            width: 7vw;
            margin: 1rem 0;
        }

        .icon:hover img {
            opacity: 0;
        }

        .icon:hover img.color {
            opacity: 1;
            filter: drop-shadow(0 0 0.2rem rgba(255, 255, 255, 0.5));
        }
    }

    /* 320, 640, 768, 1024, 1280, 1536, 1920 */
</style>
