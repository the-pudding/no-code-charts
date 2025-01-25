<script>
	import { getContext } from "svelte";
	import Footer from "$components/FooterFancy.svelte";
	import ChartExample from "$components/ChartExample.svelte";

	const copy = getContext("copy");
	const data = getContext("data");
</script>

<section id="intro">
	<h1>{copy.headline}</h1>
	<p class="byline">{@html copy.byline}</p>
	{#each copy.intro as graf, i}
		<p>{@html graf.value}</p>
	{/each}
</section>
<section id="examples">
	{#each copy.charts as example}
		<ChartExample {example} />
	{/each}
</section>
<Footer recent={false}/>

<style>
	#intro {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	#examples {
		padding: 0 1rem;
		margin-top: 6rem;
	}

	h1 {
		font-weight: 700;
		line-height: 1;
		margin-bottom: 3rem;
	}

	p {
		font-size: var(--18px);
	}
</style>
