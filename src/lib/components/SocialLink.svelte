<script>
    export let url
    export let innerText
    export let svg

    let icon = svgIcon(svg)

    function svgIcon(name) {
        switch (name) {
            case "github":
                return "/assets/github.svg"
            case "linkedin":
                return "/assets/linkedin.svg"
            case "insta":
                return "/assets/insta.svg"
            case "email":
                return "/assets/email.svg"
        }
    }
</script>

<div>
    <a class="mulish" href={url}>{innerText}</a>
    <img src={icon} alt={innerText + " icon"} />
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        width: fit-content;
    }

    img {
        display: none;
        user-select: none;
        width: 1rem;
        aspect-ratio: 1;
        opacity: 0;
        transition: 0.2s ease-in-out;
        stroke-width: 0.5;
    }

    a {
        text-transform: uppercase;
        font-size: 1rem;
    }

    a:hover ~ img,
    a:focus ~ img,
    a:active ~ img {
        opacity: 0.7;
    }

    @media screen and (min-width: 640px) {
        img {
            display: block;
        }
    }
</style>
