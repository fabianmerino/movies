<script lang="ts">
	import type { MovieResult, TvResult } from '../types/tmdb';
	import Rate from './Rate.svelte';
	export let movie: MovieResult & TvResult;
	const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

	const movieName = movie?.title || movie?.name;
	const prefix = movie?.title ? 'movies' : 'tv';
</script>

<a class="card !bg-transparent" href={`/${prefix}/${movie.id}`}>
	<header class="card-hover">
		<img src={posterUrl} alt={movieName} loading="lazy" class="bg-black/50 aspect-[9/14] w-full" />
	</header>
	<section class="p-4">
		<p class="font-semibold whitespace-nowrap overflow-hidden text-ellipsis">{movieName}</p>
	</section>
	<footer class="card-footer">
		<Rate rating={movie.vote_average} />
	</footer>
</a>
