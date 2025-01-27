<script>
    import { getContext } from "svelte";
    import { activeSection } from "$runes/misc.svelte.js";
    const copy = getContext("copy");

    function goToSection(sectionID, sectionTitle) {
        const section = document.getElementById(sectionID);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            activeSection.activeSection == sectionTitle;
        }
    }
</script>

<nav>
    <ul>
        {#each copy.charts as example}
            <li 
                class:active={activeSection.activeSection === example.title}
                on:click={() => goToSection(example.iconID, example.title)}
            >
                <img src="assets/images/{example.iconID}.png" alt="{example.iconID} icon" />
                <p>{example.title}</p>
            </li>
        {/each}
    </ul>
</nav>

<style>
    nav {
        position: sticky;
        top: 0;
        width: 100%;
        background: rgba(255,255,255,0.95);
        z-index: 1000;
        border-bottom: 1px solid var(--color-gray-200);
        margin-top: 5rem;
    }
    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        list-style: none;
        padding: 0;
        gap: 2rem;
    }

    li {
        display: flex;
        flex-direction: row;
        justify-content: center;  
        align-items: center;
        gap: 0.5rem;
        padding: 1rem;
        opacity: 0.5;
        transition: all 0.5s linear;
    }

    li:hover {
        opacity: 1;
        cursor: pointer;
    }

    li.active {
        opacity: 1;
        background-color: var(--color-gray-100);
    }

    li p {
        font-family: var(--sans);
        font-weight: 700;
        padding: 0;
        margin: 0;
    }

    img {
        width: 50px;
        height: 30px;
    }

    @media (max-width: 900px) {
        ul {
            gap: 1rem;
        }
        li p {
            display: none;
        }
    }

    @media (max-width: 400px) {
        img {
            width: 40px;
            height: 24px;
        }
    }
</style>