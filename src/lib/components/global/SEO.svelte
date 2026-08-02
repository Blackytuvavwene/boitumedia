<script lang="ts">
	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		canonicalUrl?: string;
		ogImage?: string;
		ogType?: string;
		jsonLd?: Record<string, any> | Record<string, any>[];
	}

	let {
		title = 'Boitumedia | Web & Mobile Development Services',
		description = 'Boitumedia creates innovative digital solutions, transforming businesses through cutting-edge web development, mobile applications, and AI integrations.',
		keywords = 'web development, mobile development, SvelteKit, software engineering, digital agency, UI/UX design',
		canonicalUrl = 'https://boitumedia.xyz',
		ogImage = 'https://boitumedia.xyz/og-image.png',
		ogType = 'website',
		jsonLd
	}: Props = $props();

	const activeJsonLd = $derived(
		jsonLd
			? Array.isArray(jsonLd)
				? jsonLd
				: [jsonLd]
			: [
					{
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: 'Boitumedia',
						url: 'https://boitumedia.xyz',
						logo: 'https://boitumedia.xyz/favicon.png',
						description: description,
						sameAs: ['https://github.com', 'https://linkedin.com', 'https://twitter.com']
					},
					{
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: 'Boitumedia',
						url: 'https://boitumedia.xyz'
					}
				]
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:site_name" content="Boitumedia" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	<!-- JSON-LD Structured Data -->
	{#each activeJsonLd as schema, idx (idx)}
		{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	{/each}
</svelte:head>
