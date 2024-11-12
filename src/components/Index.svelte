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
	{#each copy.charts as example, i}
		<ChartExample {example} />
	{/each}
</section>
<Footer recent={false}/>

<style>
	#intro {
		max-width: 700px;
		margin: 0 auto;
	}
</style>
