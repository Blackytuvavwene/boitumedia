<script lang="ts">
	import Home from '$lib/components/pages/home/Home.svelte';
	import SEO from '$lib/components/global/SEO.svelte';
	import { DEFAULT_OG_IMAGE, SITE_URL } from '$lib/constants/site';

	const homeJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Boitumelo Tubabwene',
		jobTitle: 'Self-Taught Developer',
		image: DEFAULT_OG_IMAGE,
		'@id': SITE_URL,
		url: SITE_URL,
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'BW'
		},
		knowsAbout: ['Flutter', 'Python', 'Svelte', 'SvelteKit', 'SQL', 'IT Support'],
		sameAs: [
			'https://github.com/Blackytuvavwene',
			'https://x.com/Blackytubabwene',
			'https://www.facebook.com/boitumelo.blacky'
		]
	};
</script>

<SEO
	title="Boitumelo Tubabwene | Developer Portfolio (Flutter, Python, Svelte, SQL)"
	description="Portfolio of Boitumelo Tubabwene, a self-taught developer in Botswana specializing in Flutter mobile apps, Svelte web solutions, Python APIs, and SQL."
	canonicalUrl={SITE_URL}
	jsonLd={homeJsonLd}
/>

<Home />
