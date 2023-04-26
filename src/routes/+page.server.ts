import { TMDB_API_KEY } from '$env/static/private';
import type { MovieDetails, MoviesResponse, TvDetails } from '../types/tmdb';


/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    const apiUrl = 'https://api.themoviedb.org/3';
    const appendToResponse = 'videos,credits,images,external_ids,release_dates';
    // const apiImageUrl = 'https://image.tmdb.org/t/p/w500';

    const popular = await fetch(`${apiUrl}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US`);
    const tv = await fetch(`${apiUrl}/tv/popular?api_key=${TMDB_API_KEY}&language=en-US`);

    const trendingMovies: MoviesResponse = await popular.json();
    const trendingTv: MoviesResponse = await tv.json();

    const movies = [...trendingMovies.results, ...trendingTv.results]
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const media = randomMovie.title ? 'movie' : 'tv';

    const resp = await fetch(`${apiUrl}/${media}/${randomMovie.id}?api_key=${TMDB_API_KEY}&language=en-US&append_to_response=${appendToResponse}`);
    const featured: MovieDetails & TvDetails = await resp.json();

    return { trendingMovies, trendingTv, featured };
}