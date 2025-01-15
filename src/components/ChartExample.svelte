<script>
    import Compare from "$components/Compare.svelte";

    let {example} = $props();
</script>

<div class="example">
    <h2>{example.title}</h2>
    <p class="seen-in">As seen in <a href="{example.publicationURL}">{example.publicationHeadline}</a></p>
    <Compare beforeImage={example.beforeImage} afterImage={example.afterImage} title={example.title}/>
    <div class="details">
        <h3>Tools used</h3>
        <ul>
            <li><span>CODE:</span>{@html example.codeTools}</li>
            <li><span>NO CODE:</span>{@html example.noCodeTools}</li>
        </ul>
        {#each example.text as graf, i}
            <p>{graf.value}</p>
        {/each}
    </div>
</div>

<style>
    .example {
        width: 100%;
        margin-bottom: 5rem;
    }
    h2 {
        font-weight: 700;
    }
    h2, .details {
        max-width: 700px;
        margin: 1rem auto;
        padding: 0 1rem;
    }

    .seen-in {
        max-width: 700px;
        margin: 0 auto;
        padding: 0 1rem; 
        font-family: var(--sans);
        font-style: italic;
    }

    li span {
        font-family: var(--sans);
        font-weight: 700;
        font-size: var(--14px);
        padding-right: 0.5rem;
    }

    h3 {
        font-family: var(--sans);
        font-weight: 700;
        text-transform: uppercase;
        font-size: var(--18px);
    }
</style>