export interface MoviesResponse {
	page: number;
	results: MovieResult[];
	total_pages: number;
	total_results: number;
}

export interface MovieResult {
	adult?: boolean;
	backdrop_path?: string;
	genre_ids?: number[];
	id?: number;
	original_language?: OriginalLanguage;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	release_date?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}

export type OriginalLanguage = 'en' | 'es' | 'nl' | 'ko';

export interface TvResponse {
	page?: number;
	results?: TvResult[];
	total_results?: number;
	total_pages?: number;
}

export interface TvResult {
	poster_path?: string;
	popularity?: number;
	id?: number;
	backdrop_path?: string;
	vote_average?: number;
	overview?: string;
	first_air_date?: string;
	origin_country?: OriginCountry[];
	genre_ids?: number[];
	original_language?: OriginalLanguage;
	vote_count?: number;
	name?: string;
	original_name?: string;
}

export type OriginCountry = 'US' | 'GB' | 'JP';

export interface MovieDetails {
	adult?: boolean;
	backdrop_path?: string;
	belongs_to_collection?: BelongsToCollection;
	budget?: number;
	genres?: Genre[];
	homepage?: string;
	id?: number;
	imdb_id?: string;
	original_language?: OriginalLanguage;
	original_title?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	production_companies?: ProductionCompany[];
	production_countries?: ProductionCountry[];
	release_date?: string;
	revenue?: number;
	runtime?: number;
	spoken_languages?: SpokenLanguage[];
	status?: string;
	tagline?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
	videos?: Videos;
	credits?: Credits;
	images?: Images;
	external_ids?: ExternalIDS;
	release_dates?: ReleaseDates;
}

export interface TvDetails {
	backdrop_path?: string;
	created_by?: CreatedBy[];
	episode_run_time?: number[];
	first_air_date?: string;
	genres?: Genre[];
	homepage?: string;
	id?: number;
	in_production?: boolean;
	languages?: string[];
	last_air_date?: string;
	last_episode_to_air?: LastEpisodeToAir;
	name?: string;
	next_episode_to_air?: null;
	networks?: Network[];
	number_of_episodes?: number;
	number_of_seasons?: number;
	origin_country?: string[];
	original_language?: string;
	original_name?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	production_companies?: Network[];
	production_countries?: ProductionCountry[];
	seasons?: Season[];
	spoken_languages?: SpokenLanguage[];
	status?: string;
	tagline?: string;
	type?: string;
	vote_average?: number;
	vote_count?: number;
}

export interface Genre {
	id?: number;
	name?: string;
}

export interface ProductionCompany {
	id?: number;
	logo_path?: null | string;
	name?: string;
	origin_country?: string;
}

export interface ProductionCountry {
	iso_3166_1?: string;
	name?: string;
}

export interface CreatedBy {
	id?: number;
	credit_id?: string;
	name?: string;
	gender?: number;
	profile_path?: string;
}

export interface LastEpisodeToAir {
	air_date?: string;
	episode_number?: number;
	id?: number;
	name?: string;
	overview?: string;
	production_code?: string;
	season_number?: number;
	still_path?: string;
	vote_average?: number;
	vote_count?: number;
}

export interface Network {
	name?: string;
	id?: number;
	logo_path?: null | string;
	origin_country?: string;
}

export interface Season {
	air_date?: string;
	episode_count?: number;
	id?: number;
	name?: string;
	overview?: string;
	poster_path?: string;
	season_number?: number;
}

export interface SpokenLanguage {
	english_name?: string;
	iso_639_1?: string;
	name?: string;
}

export interface BelongsToCollection {
	id?: number;
	name?: string;
	poster_path?: string;
	backdrop_path?: string;
}

export interface Credits {
	cast?: Credit[];
	crew?: Credit[];
}

export interface Credit {
	adult?: boolean;
	gender?: number;
	id?: number;
	known_for_department?: Department;
	name?: string;
	original_name?: string;
	popularity?: number;
	profile_path?: null | string;
	cast_id?: number;
	character?: string;
	credit_id?: string;
	order?: number;
	department?: Department;
	job?: string;
}

export type Department =
	| 'Acting'
	| 'Editing'
	| 'Directing'
	| 'Production'
	| 'Sound'
	| 'Art'
	| 'Writing'
	| 'Crew'
	| 'Camera'
	| 'Lighting'
	| 'Costume & Make-Up'
	| 'Visual Effects';

export interface ExternalIDS {
	imdb_id?: string;
	wikidata_id?: string;
	facebook_id?: string;
	instagram_id?: string;
	twitter_id?: string;
}

export interface Genre {
	id?: number;
	name?: string;
}

export interface Images {
	backdrops?: Image[];
	logos?: Image[];
	posters?: Image[];
}
export interface Image {
	aspect_ratio?: number;
	file_path?: string;
	height?: number;
	iso_639_1?: null | string;
	vote_average?: number;
	vote_count?: number;
	width?: number;
}

export interface ReleaseDates {
	results?: ReleaseDatesResult[];
}

export interface ReleaseDatesResult {
	iso_3166_1?: string;
	release_dates?: ReleaseDate[];
}

export interface ReleaseDate {
	certification?: string;
	descriptors?: string[];
	iso_639_1?: OriginalLanguage;
	note?: string;
	release_date?: Date;
	type?: number;
}

export interface Videos {
	results?: VideosResult[];
}

export interface VideosResult {
	iso_639_1?: OriginalLanguage;
	iso_3166_1?: OriginCountry;
	name?: string;
	key?: string;
	site?: Site;
	size?: number;
	type?: Type;
	official?: boolean;
	published_at?: Date;
	id?: string;
}

export type Site = 'YouTube';

export type Type = 'Featurette' | 'Teaser' | 'Trailer';

export interface Recomendations {
	page?: number;
	results?: MovieDetails[];
	total_pages?: number;
	total_results?: number;
}

export interface MovieWithRecommendations extends MovieDetails {
	recomended?: MovieDetails[];
}
