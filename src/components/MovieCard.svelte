<script lang="ts">
	import { apiImgUrl } from '$lib/tmdb';
	import { fade } from 'svelte/transition';
	import type { MovieResult, TvResult } from '../types/tmdb';
	import Rate from './Rate.svelte';

	export let movie: MovieResult & TvResult;

	$: posterUrl = `${apiImgUrl}/w370_and_h556_bestv2${movie.poster_path}`;
	$: movieName = movie?.title || movie?.name;
	$: prefix = movie?.title ? 'movies' : 'tv';
</script>

<a class="card !bg-transparent" href={`/${prefix}/${movie.id}`} data-sveltekit-noscroll>
	<header class="card-hover pt-[150.27%] h-0 relative bg-gray-600/50">
		{#if movie.poster_path}
			<img
				src={posterUrl}
				alt={movieName}
				loading="lazy"
				class="absolute top-0 left-0 w-full h-full block"
			/>
		{:else}
			<span class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 24 24"
					fill-rule="evenodd"
					clip-rule="evenodd"
					fill="#999"
				>
					<path
						d="M24 22h-24v-20h24v20zm-1-19h-22v18h22v-18zm-1 16h-19l4-7.492 3 3.048 5.013-7.556 6.987 12zm-11.848-2.865l-2.91-2.956-2.574 4.821h15.593l-5.303-9.108-4.806 7.243zm-4.652-11.135c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm0 1c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5z"
					/>
				</svg>
			</span>
		{/if}
	</header>
	<section class="p-4">
		<p class="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{movieName}</p>
	</section>
	<footer class="card-footer">
		<Rate rating={movie.vote_average} />
	</footer>
</a>
