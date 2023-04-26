<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { MovieDetails, TvDetails } from '../types/tmdb';
	import Rate from '$components/Rate.svelte';

	export let featured: MovieDetails & TvDetails;
	const backdropUrl = `https://image.tmdb.org/t/p/original${featured.backdrop_path}`;
	const movieName = featured?.title || featured?.name;
	let yearStart = '';
	$: {
		const date = featured?.release_date ? featured?.release_date : featured?.first_air_date;
		yearStart = date ? date.split('-')[0] : '';
	}
</script>

<section class="relative pb-[40%] h-0 block bg-black" transition:fade>
	<div
		class="absolute top-0 right-0 max-w-[71.1%] h-full block min-h-0 after:absolute after:bg-gradient-to-r after:from-black after:to-transparent after:top-0 after:right-0 after:w-full after:h-full after:z-10"
	>
		<img src={backdropUrl} alt={movieName} loading="lazy" />
	</div>
	<div class="absolute top-0 left-0 z-10 p-20 flex items-center w-[43%] h-full">
		<div>
			<h1 class="max-w-2xl mb-2 font-extrabold tracking-tight leading-none dark:text-white">
				{movieName}
			</h1>
			<h5 class="flex gap-2 mb-4 items-center ">
				<Rate rating={featured.vote_average} />
				<span class="font-medium text-gray-500 dark:text-gray-400">
					{featured.vote_count} Reviews
				</span>
				<div class="font-medium text-gray-500 dark:text-gray-400">
					{#if featured.number_of_seasons}
						<span>Season {featured.number_of_seasons}</span>
					{/if}
					{#if yearStart}
						<span>{yearStart}</span>
					{/if}
					{#if featured.runtime}
						<span>{featured.runtime}</span>
					{/if}
				</div>
			</h5>
			<h3 class="mb-6">
				{featured.overview}
			</h3>
			<button class="btn btn-xl variant-soft-secondary">
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-play"
					>
						<polygon points="5 3 19 12 5 21 5 3" />
					</svg>
				</span>
				<span>Watch Trailer</span>
			</button>
		</div>
	</div>
</section>
