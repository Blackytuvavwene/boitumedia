<script lang="ts">
	import Home from '$lib/components/pages/home/Home.svelte';
	import SEO from '$lib/components/global/SEO.svelte';

	const homeJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Boitumelo Tubabwene',
		jobTitle: 'Self-Taught Developer',
		image: 'https://boitumedia.xyz/og-image.png',
		'@id': 'https://boitumedia.xyz',
		url: 'https://boitumedia.xyz',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'BW'
		},
		knowsAbout: ['Flutter', 'Python', 'Svelte', 'SvelteKit', 'SQL', 'IT Support'],
		sameAs: ['https://github.com/Blackytuvavwene']
	};
</script>

<SEO
	title="Boitumelo Tubabwene | Developer Portfolio (Flutter, Python, Svelte, SQL)"
	description="Portfolio of Boitumelo Tubabwene, a self-taught developer in Botswana specializing in Flutter mobile apps, Svelte web solutions, Python APIs, and SQL."
	canonicalUrl="https://boitumedia.xyz"
	jsonLd={homeJsonLd}
/>

<Home />
