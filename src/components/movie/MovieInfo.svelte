<script lang="ts">
	import ExternalLinks from '$components/ExternalLinks.svelte';
	import { apiImgUrl, languages } from '$lib/tmdb';
	import type { MovieDetails } from '../../types/tmdb';
	import { formatAsCurrency, formatAsDate, formatAsDuration } from '../../utils';

	export let item: MovieDetails;
	let directors: string = '';
	let genres: string = '';
	let productionCompanies: string = '';

	$: poster = item.poster_path ? `${apiImgUrl}/w370_and_h556_bestv2${item.poster_path}` : null;
	$: {
		const people = item?.credits?.crew;
		const genreList = item?.genres;
		const productionList = item?.production_companies;

		if (people) {
			directors = people
				.filter((person) => person.job === 'Director')
				.map((person) => `<a href="/person/${person.id}">${person.name}</a>`)
				.join(', ');
		}

		if (genreList) {
			genres = genreList
				.map((genre) => `<a href="/genre/${genre.id}">${genre.name}</a>`)
				.join(', ');
		}

		if (productionList) {
			productionCompanies = productionList.map((production) => production.name).join(', ');
		}
	}
	$: language =
		languages.find((lang) => lang.iso_639_1 === item.original_language)?.english_name ||
		item.original_language;
	$: released = formatAsDate(item.release_date);
	$: runtime = formatAsDuration(item.runtime);
	$: budget = formatAsCurrency(item.budget);
	$: revenue = formatAsCurrency(item.revenue);
	$: externalIds = { ...item.external_ids, homepage: item.homepage };
</script>

<div class="p-4 md:p-8 flex gap-12 flex-wrap">
	{#if poster}
		<img
			src={poster}
			alt={item.title}
			class="w-full rounded-lg shadow-lg max-w-sm"
			loading="lazy"
		/>
	{/if}
	<div class="flex-1">
		{#if item.overview}
			<div class="mb-12 max-w-5xl space-y-2">
				<h3>Storyline</h3>
				<h6>{@html item.overview}</h6>
			</div>
		{/if}

		<div class="mb-12 font-semibold">
			<ul class="flex flex-wrap">
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Released</div>
					<div class="flex-[2]">{released}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Runtime</div>
					<div class="flex-[2]">{runtime}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Director</div>
					<div class="flex-[2]">{@html directors}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Budget</div>
					<div class="flex-[2]">{budget}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Revenue</div>
					<div class="flex-[2]">{revenue}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Genre</div>
					<div class="flex-[2]">{@html genres}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Status</div>
					<div class="flex-[2]">{item.status}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Language</div>
					<div class="flex-[2]">{language}</div>
				</li>
				<li class="flex px-0 py-1 md:w-1/2 xl:w-full">
					<div class="flex-1 max-w-[6rem] sm:max-w-[7rem]">Production</div>
					<div class="flex-[2]">{productionCompanies}</div>
				</li>
			</ul>
		</div>

		<ExternalLinks links={externalIds} />
	</div>
</div>
