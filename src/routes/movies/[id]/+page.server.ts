import { TMDB_API_KEY, API_URL } from '$env/static/private';
import type { MovieWithRecommendations, Recomendations } from '../../../types/tmdb';
import type { PageServerLoadEvent } from './$types';

export async function load({ fetch, params }: PageServerLoadEvent) {
	const $fetch = (url: string) => fetch(url).then((res) => res.json());

	const apiUrl = API_URL || 'https://api.themoviedb.org/3';

	const movieId = params.id;
	const appendToResponse = 'videos,credits,images,external_ids,release_dates';
	const response: MovieWithRecommendations = await $fetch(
		`${apiUrl}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=${appendToResponse}`
	);

	const recomendations: Recomendations = await $fetch(
		`${apiUrl}/movie/${movieId}/recommendations?api_key=${TMDB_API_KEY}&language=en-US&page=1`
	);
	response.recomended = recomendations.results;

	return response;
}
