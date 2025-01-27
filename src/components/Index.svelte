<script>
	import { getContext } from "svelte";
	import Nav from "$components/Nav.svelte";
	import Footer from "$components/Footer.svelte";
	import ChartExample from "$components/ChartExample.svelte";

	const copy = getContext("copy");
	const data = getContext("data");
</script>

<section id="intro">
	<h1>{copy.headline}</h1>
	<p class="byline">By {@html copy.byline}</p>
	{#each copy.intro as graf, i}
		<p>{@html graf.value}</p>
	{/each}
</section>
<Nav />
<section id="examples">
	{#each copy.charts as example}
		<ChartExample {example} />
	{/each}
</section>
<Footer topics={true} recent={true} /> 

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

	.byline {
		font-family: var(--sans);
	}

	:global(.byline a) {
		font-weight: 700;
	}
</style>
