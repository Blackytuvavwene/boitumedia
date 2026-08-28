<script lang="ts">
	import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '$lib/constants/site';

	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		canonicalUrl?: string;
		ogImage?: string;
		ogType?: string;
		noindex?: boolean;
		jsonLd?: Record<string, any> | Record<string, any>[];
	}

	let {
		title = 'Boitumedia | Web & Mobile Development Services',
		description = 'Boitumedia creates innovative digital solutions, transforming businesses through cutting-edge web development, mobile applications, and AI integrations.',
		keywords = 'web development, mobile development, SvelteKit, software engineering, digital agency, UI/UX design',
		canonicalUrl = SITE_URL,
		ogImage = DEFAULT_OG_IMAGE,
		ogType = 'website',
		noindex = false,
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
						name: SITE_NAME,
						url: SITE_URL,
						logo: `${SITE_URL}/favicon.png`,
						description: description,
						sameAs: [
							'https://github.com/Blackytuvavwene',
							'https://x.com/Blackytubabwene',
							'https://www.facebook.com/boitumelo.blacky'
						]
					},
					{
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: SITE_NAME,
						url: SITE_URL
					}
				]
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />
	<meta
		name="robots"
		content={noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
	/>
	<meta name="author" content="Boitumelo Tubabwene" />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={canonicalUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={title} />

	<!-- JSON-LD Structured Data -->
	{#each activeJsonLd as schema, idx (idx)}
		{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	{/each}
</svelte:head>
