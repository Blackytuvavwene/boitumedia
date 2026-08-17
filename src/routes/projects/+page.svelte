<script lang="ts">
	import ProjectsGrid from '$lib/components/pages/projects/ProjectsGrid.svelte';
	import ProjectsHero from '$lib/components/pages/projects/ProjectsHero.svelte';
	import ProjectsStats from '$lib/components/pages/projects/ProjectsStats.svelte';
	import SEO from '$lib/components/global/SEO.svelte';
	import { SITE_URL } from '$lib/constants/site';

	const projectsJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: 'Projects Portfolio | Boitumelo Tubabwene',
		description:
			'Explore mobile apps, web solutions, and backend projects engineered by Boitumelo Tubabwene in Botswana.',
		url: `${SITE_URL}/projects`
	};
</script>

<SEO
	title="Projects & Portfolio | Boitumelo Tubabwene"
	description="Browse projects developed by Boitumelo Tubabwene using Flutter, Python, Svelte, and SQL."
	canonicalUrl={`${SITE_URL}/projects`}
	jsonLd={projectsJsonLd}
/>

<div class="bg-background text-foreground min-h-screen">
	<ProjectsHero />
	<ProjectsGrid />
	<ProjectsStats />
</div>
