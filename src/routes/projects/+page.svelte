<script lang="ts">
	import ProjectsGrid from '$lib/components/pages/projects/ProjectsGrid.svelte';
	import ProjectsHero from '$lib/components/pages/projects/ProjectsHero.svelte';
	import ProjectsStats from '$lib/components/pages/projects/ProjectsStats.svelte';
	import SEO from '$lib/components/global/SEO.svelte';
	import { SITE_URL } from '$lib/constants/site';

	const projectsJsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: 'Projects Portfolio | Boitumelo Tubabwene',
			description:
				'Explore software projects, mobile applications, and web platforms engineered by Boitumelo Tubabwene in Botswana.',
			url: `${SITE_URL}/projects`
		}
	];
</script>

<SEO
	title="Projects & Case Studies | Boitumelo Tubabwene"
	description="Explore software projects, mobile applications, and web platforms engineered by Boitumelo Tubabwene in Botswana."
	canonicalUrl={`${SITE_URL}/projects`}
	breadcrumbs={[
		{ name: 'Home', item: '/' },
		{ name: 'Projects', item: '/projects' }
	]}
	jsonLd={projectsJsonLd}
/>

<div class="bg-background text-foreground min-h-screen">
	<ProjectsHero />
	<ProjectsGrid />
	<ProjectsStats />
</div>
