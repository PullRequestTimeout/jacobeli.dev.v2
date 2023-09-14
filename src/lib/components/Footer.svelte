<script>
    import SocialLink from "./SocialLink.svelte"
    import Title from "./Title.svelte"
</script>

<footer>
    <Title innerText="Contact" id="contact" invert />
    <p class="mulish">Got a project in mind?</p>
    <h3 class="mulish"><span>Let's</span> <span>Collaborate</span></h3>
    <div class="socials">
        <SocialLink innerText="Email" url="mailto:jacobedruery@gmail.com" svg="email" />
        <SocialLink innerText="LinkedIn" url="https://www.linkedin.com/in/jacob-druery/" svg="linkedin" />
        <SocialLink innerText="Github" url="https://github.com/PullRequestTimeout" svg="github" />
        <SocialLink innerText="Insta" url="https://www.instagram.com/caffeinatejake/" svg="insta" />
    </div>
</footer>

<style>
    footer {
        background-color: var(--clr-white);
        color: var(--clr-black);
        padding: 1rem;
        display: flex;
        flex-direction: column;
    }

    footer > * {
        text-transform: uppercase;
    }

    p {
        font-size: 1.2rem;
        text-align: center;
    }

    h3 {
        display: flex;
        justify-content: space-between;
        margin: 2rem -0.25rem;
        font-size: 9vw;
        text-align: center;
    }

    .socials {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    @media screen and (min-width: 450px) {
        h3 {
            font-size: 9.5vw;
        }
    }

    @media screen and (min-width: 640px) {
        p {
            font-size: 1.5rem;
        }

        h3 {
            font-size: 9.75vw;
            text-align: justify;
        }

        .socials {
            justify-content: start;
        }
    }

    @media screen and (min-width: 768px) {
        footer {
            padding: 2rem;
        }

        h3 {
            font-size: 9.5vw;
        }
    }
</style>
