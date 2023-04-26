<script>
	import Carousel from '$components/Carousel.svelte';
	import Hero from '$components/Hero.svelte';

	export let data;
	const { featured, trendingMovies, trendingTv } = data;
</script>

<svelte:head>
	<title>Home | Movies App</title>
</svelte:head>

<div class="h-full mx-auto">
	<!-- / -->
	<Hero {featured} />
	<!-- / -->
	{#if trendingMovies}
		<div class="mt-12 mx-0">
			<div class="flex items-baseline gap-4 mb-8 mx-12">
				<h3>Trending Movies</h3>
				<a href="/movies">Explore all</a>
			</div>
			<Carousel items={trendingMovies.results} />
		</div>
	{/if}
	<!-- / -->
	{#if trendingTv}
		<div class="mt-12 mx-0">
			<div class="flex items-baseline gap-4 mb-8 mx-12">
				<h3>Trending Tv</h3>
				<a href="/tv">Explore all</a>
			</div>
			<Carousel items={trendingTv.results} />
		</div>
	{/if}
	<!-- / -->
</div>
