<script lang="ts">
	import { DEFAULT_LOGO, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '$lib/constants/site';

	interface BreadcrumbItem {
		name: string;
		item: string;
	}

	interface Props {
		title?: string;
		description?: string;
		keywords?: string;
		canonicalUrl?: string;
		ogImage?: string;
		ogType?: string;
		noindex?: boolean;
		breadcrumbs?: BreadcrumbItem[];
		jsonLd?: Record<string, any> | Record<string, any>[];
	}

	let {
		title = 'Boitumelo Tubabwene | Software Developer Portfolio',
		description = 'Portfolio of Boitumelo Tubabwene, a software developer in Botswana specializing in Flutter mobile apps, Svelte web solutions, Python APIs, and SQL.',
		keywords = 'Boitumelo Tubabwene, BoituMedia, software developer Botswana, Flutter developer, SvelteKit developer, Python APIs, SQL databases, web development, mobile development',
		canonicalUrl = SITE_URL,
		ogImage = DEFAULT_OG_IMAGE,
		ogType = 'website',
		noindex = false,
		breadcrumbs = [],
		jsonLd
	}: Props = $props();

	// Ensure canonicalUrl is normalized (no trailing slash for subpaths, always absolute)
	const normalizedCanonical = $derived(
		canonicalUrl.startsWith('http')
			? canonicalUrl.endsWith('/') && canonicalUrl !== `${SITE_URL}/` && canonicalUrl !== SITE_URL
				? canonicalUrl.slice(0, -1)
				: canonicalUrl
			: `${SITE_URL}${canonicalUrl.startsWith('/') ? '' : '/'}${canonicalUrl}`
	);

	const breadcrumbSchema = $derived(
		breadcrumbs.length > 0
			? {
					'@context': 'https://schema.org',
					'@type': 'BreadcrumbList',
					itemListElement: breadcrumbs.map((crumb, idx) => ({
						'@type': 'ListItem',
						position: idx + 1,
						name: crumb.name,
						item: crumb.item.startsWith('http') ? crumb.item : `${SITE_URL}${crumb.item}`
					}))
				}
			: null
	);

	const activeJsonLd = $derived.by(() => {
		const schemas: Record<string, any>[] = [];

		if (jsonLd) {
			if (Array.isArray(jsonLd)) {
				schemas.push(...jsonLd);
			} else {
				schemas.push(jsonLd);
			}
		} else {
			schemas.push(
				{
					'@context': 'https://schema.org',
					'@type': 'Organization',
					name: SITE_NAME,
					url: SITE_URL,
					logo: DEFAULT_LOGO,
					image: DEFAULT_OG_IMAGE,
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
					alternateName: ['BoituMedia Dev', 'Boitumelo Tubabwene'],
					url: SITE_URL
				}
			);
		}

		if (breadcrumbSchema) {
			schemas.push(breadcrumbSchema);
		}

		return schemas;
	});
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
	<link rel="canonical" href={normalizedCanonical} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={ogType} />
	<meta property="og:url" content={normalizedCanonical} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@Blackytubabwene" />
	<meta name="twitter:creator" content="@Blackytubabwene" />
	<meta name="twitter:url" content={normalizedCanonical} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={title} />

	<!-- JSON-LD Structured Data -->
	{#each activeJsonLd as schema, idx (idx)}
		{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
	{/each}
</svelte:head>

