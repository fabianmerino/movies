<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import { setContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';

	const titles: Record<string, string> = {
		popular: 'Popular Movies',
		topRated: 'Top Rated Movies',
		upcoming: 'Upcoming Movies',
		nowPlaying: 'Now Playing Movies'
	};

	export let data;
	const { featured } = data;

	const selected: Writable<string> = writable('popular');
	setContext('selected', selected);

	function handleClick(key: string) {
		selected.set(key);
	}
</script>

<svelte:head>
	<title>Movies | Movies App</title>
</svelte:head>

<Hero {featured} />

<nav class="flex items-center justify-center gap-4 py-4 md:py-8 flex-wrap">
	{#each Object.keys(titles) as key}
		<button
			type="button"
			class={`btn rounded-full hover:variant-filled-surface ${
				key === $selected ? 'variant-filled-surface' : 'variant-ringed-surface'
			}`}
			on:click={handleClick.bind(null, key)}
		>
			{titles[key]}
		</button>
	{/each}
</nav>

<slot {selected} />
