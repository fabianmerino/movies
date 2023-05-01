<script lang="ts">
	import type { ExternalIDS } from '../types/tmdb';

	type Links = { homepage?: string } & ExternalIDS;

	export let links: Links = {};
	export let media: string | null = null;

	$: imdb = (media && 'name') || 'title';
</script>

<ul class="flex gap-4">
	{#if links.twitter_id}
		<li>
			<a
				href={`https://twitter.com/${links.twitter_id}`}
				target="_blank"
				aria-label="Link to Twitter account"
				rel="noopener"
				class="btn-icon btn-icon-sm hover:text-[#2196f3]"
			>
				<!-- eslint-disable-next-line -->
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
					class="lucide lucide-twitter"
				>
					<path
						d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
					/>
				</svg>
			</a>
		</li>
	{/if}
	{#if links.facebook_id}
		<li>
			<a
				href={`https://facebook.com/${links.facebook_id}`}
				target="_blank"
				aria-label="Link to Facebook account"
				rel="noopener"
				class="btn-icon btn-icon-sm hover:text-[#2196f3]"
			>
				<!-- eslint-disable-next-line -->
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
					class="lucide lucide-facebook"
				>
					<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
				</svg>
			</a>
		</li>
	{/if}
	{#if links.instagram_id}
		<li>
			<a
				href={`https://instagram.com/${links.instagram_id}`}
				target="_blank"
				aria-label="Link to Instagram account"
				rel="noopener"
				class="btn-icon btn-icon-sm hover:text-[#2196f3]"
			>
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
					class="lucide lucide-instagram"
				>
					<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
					<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
					<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
				</svg>
			</a>
		</li>
	{/if}
	{#if links.imdb_id}
		<li>
			<a
				href={`https://www.imdb.com/${imdb}/${links.imdb_id}`}
				target="_blank"
				aria-label="Link to IMDb account"
				rel="noopener"
				class="btn-icon btn-icon-sm hover:text-[#2196f3]"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path
						d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.104.095-.405.095-.885v-2.866c0-.33-.004-.54-.033-.63a.292.292 0 0 0-.14-.204z"
					/>
					<path
						d="M22.416 0H1.62C.742.06.06.744 0 1.596V22.38c.06.874.712 1.542 1.555 1.617.015.003.03.003.045.003h20.845A1.727 1.727 0 0 0 24 22.29V1.71C24 .82 23.305.07 22.416 0zM4.792 15.626H2.887V8.26h1.905v7.366zm6.54-.002H9.67v-4.97L9 15.623H7.812l-.698-4.86-.007 4.86H5.44V8.26h2.468c.083.523.16 1.048.23 1.574l.27 1.87.442-3.444h2.483v7.364zm4.977-2.18c0 .655-.044 1.094-.104 1.32-.062.22-.17.4-.326.52-.15.13-.34.218-.57.266-.223.045-.57.075-1.02.075l-.004-.002H11.98V8.26h1.426c.914 0 1.45.047 1.77.128.325.09.575.225.745.42.165.18.273.404.313.645.05.235.076.705.076 1.402v2.588zm4.944.475c0 .45-.045.764-.09.99-.06.224-.195.404-.405.568-.226.166-.48.24-.78.24-.22 0-.5-.06-.68-.136a1.586 1.586 0 0 1-.515-.427l-.116.47H16.95V8.26l-.02-.003h1.8v2.4c.15-.175.315-.31.51-.4.196-.083.466-.127.69-.127.226-.003.45.036.66.115.17.07.32.185.436.33.09.125.15.27.18.42.03.138.044.43.044.87v2.054z"
					/>
					<path
						d="M19.08 11.205c-.12 0-.194.04-.225.12-.03.08-.06.29-.06.624v1.946c0 .324.03.533.06.623.04.086.13.14.226.134.12 0 .272-.047.3-.14.03-.097.046-.32.046-.674l.03-.002v-1.89c0-.303-.015-.508-.06-.603-.044-.1-.195-.14-.315-.14z"
					/>
				</svg>
			</a>
		</li>
	{/if}
	{#if links.homepage}
		<li>
			<a
				href={links.homepage}
				target="_blank"
				aria-label="Link to Homepage"
				rel="noopener"
				class="btn-icon btn-icon-sm hover:text-[#2196f3]"
			>
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
					class="lucide lucide-link"
				>
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
				</svg>
			</a>
		</li>
	{/if}
</ul>
