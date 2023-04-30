<script lang="ts">
	import MovieCard from '$components/MovieCard.svelte';
	import { getContext } from 'svelte';

	type Selected = 'popular' | 'topRated' | 'upcoming' | 'nowPlaying';

	export let data;
	const selected = getContext<SvelteStore<Selected>>('selected');
	$: items = data[$selected]?.results || [];
</script>

<svelte:head>
	<title>Movies | Movies App</title>
</svelte:head>

<div>
	<div class="flex flex-wrap justify-center gap-4 py-4 md:py-8">
		<div
			class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-4"
		>
			{#each items as movie}
				<MovieCard {movie} />
			{/each}
		</div>

		{#if items.length === 0}
			<div class="w-full text-center">
				<p>No movies found</p>
			</div>
		{/if}

		{#if items.length > 0}
			<div class="w-full text-center">
				<button
					type="button"
					class="btn variant-ringed-surface rounded-full hover:variant-filled-surface"
				>
					Load more
				</button>
			</div>
		{/if}
	</div>
</div>
