<script lang="ts">
	import Home from '$lib/components/pages/home/Home.svelte';
	import SEO from '$lib/components/global/SEO.svelte';
	import { SITE_NAME, SITE_URL } from '$lib/constants/site';

	const homeJsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: SITE_NAME,
			alternateName: ['BoituMedia Dev', 'Boitumelo Tubabwene Portfolio', 'BoituMedia Botswana'],
			url: SITE_URL
		},
		{
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: 'Boitumelo Tubabwene',
			jobTitle: 'Software Developer',
			image: `${SITE_URL}/developer_portrait.jpg`,
			'@id': `${SITE_URL}/#person`,
			url: SITE_URL,
			address: {
				'@type': 'PostalAddress',
				addressLocality: 'Gaborone',
				addressCountry: 'BW'
			},
			knowsAbout: [
				'Flutter',
				'Dart',
				'Svelte',
				'SvelteKit',
				'Python',
				'SQL',
				'PostgreSQL',
				'Mobile App Development',
				'Web Development'
			],
			sameAs: [
				'https://github.com/Blackytuvavwene',
				'https://x.com/Blackytubabwene',
				'https://www.facebook.com/boitumelo.blacky'
			]
		}
	];
</script>

<SEO
	title="Boitumelo Tubabwene | Software Developer Portfolio"
	description="Portfolio of Boitumelo Tubabwene, a software developer in Botswana specializing in Flutter mobile apps, SvelteKit web solutions, Python APIs, and SQL databases."
	canonicalUrl={SITE_URL}
	jsonLd={homeJsonLd}
/>

<Home />

