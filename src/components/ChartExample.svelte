<script>
    import Compare from "$components/Compare.svelte";

    let {example} = $props();
</script>

<div class="example">
    <div class="split-wrapper">
        <div class="left">
            <h3>The chart</h3>
            <Compare beforeImage={example.beforeImage} afterImage={example.afterImage} title={example.title}/>
        </div>
        <div class="right">
            <h3>How-To Video</h3>
            <div class="video-wrapper">
                <iframe width="100%" height="100%" src={example.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    <h2>{example.title}</h2>
    <p class="seen-in">As seen in <a href="{example.publicationURL}">{example.publicationHeadline}</a></p>
    <div class="details">
        {#each example.text as graf, i}
            <p>{@html graf.value}</p>
        {/each}
    </div>
    <div class="details">
        <h3>Assets</h3>
        <ul>
            <li>{@html example.assets}</li>
        </ul>
    </div>
    <div class="details">
        <h3>Tools used</h3>
        <ul>
            <li><span>CODE:</span>{@html example.codeTools}</li>
            <li><span>NO CODE:</span>{@html example.noCodeTools}</li>
        </ul>
    </div>
</div>

<style>
    .example {
        width: 100%;
        margin-bottom: 10rem;
    }
    h2 {
        font-weight: 700;
        position: relative;
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

    .split-wrapper {
        max-width: 1200px;
        margin: 2rem auto 0 auto;
        display: flex;
        flex-direction: row;
        gap: 3rem;
        padding: 1rem 0;
        border-top: 1px solid var(--color-gray-200);
    }

    .split-wrapper .left, .split-wrapper .right  {
        width: 50%;
    }

    .video-wrapper {
        width: 100%;
        margin: 0.25rem 0 1rem 0;
        aspect-ratio: 1/0.575;
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
        font-size: var(--16px);
        max-width: 700px;
        margin: 0 auto;
    }

    p {
		font-size: var(--18px);
	}
</style>