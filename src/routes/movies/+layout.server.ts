import { TMDB_API_KEY, API_URL } from '$env/static/private';
import type { PageServerLoadEvent } from '../$types';
import type { MovieDetails, MoviesResponse } from '../../types/tmdb';

export async function load({ fetch }: PageServerLoadEvent) {
	const $fetch = (url: string) => fetch(url).then((res) => res.json());

	const apiUrl = API_URL || 'https://api.themoviedb.org/3';

	const popular: MoviesResponse = await $fetch(
		`${apiUrl}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`
	);
	const topRated: MoviesResponse = await $fetch(
		`${apiUrl}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US`
	);
	const upcoming: MoviesResponse = await $fetch(
		`${apiUrl}/movie/upcoming?api_key=${TMDB_API_KEY}&language=en-US`
	);
	const nowPlaying: MoviesResponse = await $fetch(
		`${apiUrl}/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US`
	);

	const item = upcoming.results[0];
	const appendToResponse = 'videos,credits,images,external_ids,release_dates';
	const featured: MovieDetails = await $fetch(
		`${apiUrl}/movie/${item.id}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=${appendToResponse}`
	);

	return { popular, topRated, upcoming, nowPlaying, featured };
}
