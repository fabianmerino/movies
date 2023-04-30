<script lang="ts">
	import { page } from '$app/stores';
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-gold-nouveau.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppRail, AppRailTile } from '@skeletonlabs/skeleton';
	import { writable, type Writable } from 'svelte/store';

	const storeValue: Writable<string> = writable('/');
	$: storeValue.set($page.url.pathname);
</script>

<!-- App Shell -->
<AppShell slotSidebarLeft="bg-surface-500/5 w-auto">
	<svelte:fragment slot="sidebarLeft">
		<!-- Insert the list: -->
		<AppRail selected={storeValue}>
			<AppRailTile value="/" tag="a" href="/">
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
					class="lucide lucide-home"
				>
					<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
					<polyline points="9 22 9 12 15 12 15 22" />
				</svg>
			</AppRailTile>
			<AppRailTile value="/movies" tag="a" href="/movies">
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
					class="lucide lucide-film"
				>
					<rect width="20" height="20" x="2" y="2" rx="2.18" ry="2.18" />
					<line x1="7" x2="7" y1="2" y2="22" />
					<line x1="17" x2="17" y1="2" y2="22" />
					<line x1="2" x2="22" y1="12" y2="12" />
					<line x1="2" x2="7" y1="7" y2="7" />
					<line x1="2" x2="7" y1="17" y2="17" />
					<line x1="17" x2="22" y1="17" y2="17" />
					<line x1="17" x2="22" y1="7" y2="7" />
				</svg>
			</AppRailTile>
			<AppRailTile value="/tv" tag="a" href="/tv">
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
					class="lucide lucide-tv"
				>
					<rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
					<polyline points="17 2 12 7 7 2" />
				</svg>
			</AppRailTile>
			<AppRailTile value="/search">
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
					class="lucide lucide-search"
				>
					<circle cx="11" cy="11" r="8" /><line x1="21" x2="16.65" y1="21" y2="16.65" />
				</svg>
			</AppRailTile>
		</AppRail>
		<!-- --- -->
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
