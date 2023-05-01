<script lang="ts">
	import Hero from '$components/Hero.svelte';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import MovieInfo from '$components/movie/MovieInfo.svelte';
	import Carousel from '$components/Carousel.svelte';
	import PersonCard from '$components/PersonCard.svelte';
	import { fade } from 'svelte/transition';

	export let data: PageData;

	let tabSet: number = 0;

	$: yearStart = data?.release_date?.split('-')[0];
	$: metaTitle = (yearStart && `${data.title} (${data?.release_date?.slice(0, 4)})`) || data.title;
	$: showCredits = data?.credits && data.credits.cast && data.credits.cast.length > 0;
</script>

<svelte:head>
	<title>{metaTitle} | Movies App</title>
</svelte:head>

<Hero featured={data} />

<TabGroup
	justify="justify-center"
	active="text-white border-b-2 border-primary-900-50-token"
	hover="hover:text-white"
	flex="flex-1 lg:flex-none"
	rounded=""
	class="w-full"
	regionList="text-gray-600 py-4 md:py-8 md:text-xl uppercase"
>
	<Tab bind:group={tabSet} name="overview" value={0}>Overview</Tab>
	<Tab bind:group={tabSet} name="videos" value={1}>Videos</Tab>
	<Tab bind:group={tabSet} name="photos" value={2}>Photos</Tab>
	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<MovieInfo item={data} />
			<!-- Credits -->
			{#if showCredits}
				<div class="mx-0">
					<div class="flex items-baseline gap-4 mb-8 mx-12">
						<h3>Cast</h3>
					</div>
					<Carousel items={data.credits?.cast}>
						<svelte:fragment slot="card" let:item={person}>
							<PersonCard {person} />
						</svelte:fragment>
					</Carousel>
				</div>
			{/if}
		{:else if tabSet === 1}
			(tab panel 2 contents)
		{:else if tabSet === 2}
			(tab panel 3 contents)
		{/if}
	</svelte:fragment>
</TabGroup>

<div class="mt-12 mx-0">
	<div class="flex items-baseline gap-4 mb-8 mx-12">
		<h3>More Like This</h3>
	</div>
	<Carousel items={data.recomended} />
</div>
