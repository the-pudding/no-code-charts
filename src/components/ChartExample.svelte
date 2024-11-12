<script>
    import Compare from "$components/Compare.svelte";

    let {example} = $props();
    console.log(example)
</script>

<div class="example">
    <h3>{example.title}</h3>
    <Compare beforeImage={example.beforeImage} afterImage={example.afterImage} title={example.title}/>
    <div class="details">
        <h5>Tools used</h5>
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
    h3, .details {
        max-width: 700px;
        margin: 1rem auto;
    }

    li span {
        font-family: var(--sans);
        font-weight: 700;
        font-size: var(--12px);
        padding-right: 0.5rem;
    }
</style>