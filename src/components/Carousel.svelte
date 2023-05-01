<script lang="ts">
	import type { Credit, MovieResult, TvResult } from '../types/tmdb';
	import MovieCard from './MovieCard.svelte';

	export let items: (TvResult & MovieResult[]) | Credit[] = [];
	let carousel: HTMLElement;
	let disableLeftButton: boolean = true;
	let disableRightButton: boolean = false;

	const scroll = (element: HTMLElement, change: number) => {
		const scrollMax = element.scrollWidth - element.clientWidth;
		const scrollMin = 0;
		const scrollLeft = element.scrollLeft;
		const scrollNew = scrollLeft + change;
		const scrollEnd = scrollNew >= scrollMax;
		const scrollStart = scrollNew <= scrollMin;
		const scrollValue = scrollEnd ? scrollMax : scrollStart ? scrollMin : scrollNew;
		element.scrollTo({ left: scrollValue, behavior: 'smooth' });

		disableLeftButton = scrollStart;
		disableRightButton = scrollEnd;
	};

	const previus = () => {
		scroll(carousel, -carousel.clientWidth);
	};

	const next = () => {
		scroll(carousel, carousel.clientWidth);
	};
</script>

<div class="relative overflow-hidden">
	{#if !disableLeftButton}
		<button
			class="absolute top-0 left-0 bottom-1/2 h-full w-12 z-10 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75"
			aria-label="Previous"
			type="button"
			on:click={previus}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path
					fill="none"
					stroke="#fff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-miterlimit="10"
					d="M17.9 23.2L6.1 12 17.9.8"
				/>
			</svg>
		</button>
	{/if}
	<div
		bind:this={carousel}
		class="w-full overflow-hidden overflow-x-scroll scroll-px-12 snap-mandatory snap-x whitespace-nowrap leading-[0] hide-scrollbar"
		style="transform: translateZ(0);"
	>
		{#each items as item}
			<div
				class="inline-block pr-2 m-0 whitespace-normal align-top snap-start w-[calc(12.5%-0.8rem)] first:ml-12 scroll-ml-2"
			>
				<slot name="card" {item}>
					<MovieCard movie={item} />
				</slot>
			</div>
		{/each}
	</div>
	{#if !disableRightButton}
		<button
			class="absolute top-0 right-0 bottom-1/2 h-full w-12 z-10 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75 transition-opacity"
			aria-label="Next"
			type="button"
			on:click={next}
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path
					fill="none"
					stroke="#fff"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-miterlimit="10"
					d="M6.1 23.2L17.9 12 6.1.8"
				/>
			</svg>
		</button>
	{/if}
</div>
