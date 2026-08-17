<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import SEO from '$lib/components/global/SEO.svelte';
	import { DEFAULT_OG_IMAGE, SITE_URL } from '$lib/constants/site';
	import { page } from '$app/state';
	import { themeState } from '$lib/stores/theme.svelte';
	import type { Snippet } from 'svelte';

	const defaultSeo = {
		title: 'Boitumedia | Web & Mobile Development Services',
		description:
			'Boitumedia builds fast, accessible web and mobile products with SvelteKit, Flutter, Python, and SQL.',
		keywords:
			'Boitumedia, web development, mobile development, SvelteKit, Flutter, Python, SQL, accessibility, SEO',
		canonicalUrl: SITE_URL,
		ogImage: DEFAULT_OG_IMAGE,
		ogType: 'website' as const
	};

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	$effect(() => {
		themeState.updateResolvedTheme();
		themeState.applyTheme();
	});
</script>

<svelte:head>
	<link
		rel="preload"
		as="image"
		href="/developer_portrait.jpg"
		fetchpriority="high"
		type="image/jpeg"
	/>
	<script>
		(function () {
			try {
				const theme = localStorage.getItem('theme') || 'light';
				let resolvedTheme = theme;
				if (theme === 'system') {
					resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
						? 'dark'
						: 'light';
				}
				document.documentElement.classList.remove('light', 'dark');
				document.documentElement.classList.add(resolvedTheme);
			} catch (e) {}
		})();
	</script>
</svelte:head>

<SEO
	title={page.data.title || defaultSeo.title}
	description={page.data.description || defaultSeo.description}
	keywords={page.data.keywords || defaultSeo.keywords}
	canonicalUrl={page.data.canonicalUrl || page.url.href}
	ogImage={page.data.ogImage || defaultSeo.ogImage}
	ogType={page.data.ogType || defaultSeo.ogType}
	noindex={page.data.noindex}
/>

<div
	class="bg-background text-foreground selection:bg-primary/20 selection:text-primary flex min-h-screen flex-col"
>
	<Navbar />
	<a
		href="#main-content"
		class="bg-background text-foreground focus-visible:ring-primary sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:px-4 focus:py-2 focus:shadow-md focus:outline-none focus-visible:ring-2"
	>
		Skip to main content
	</a>
	<main id="main-content" class="flex-grow pt-16">
		{#if children}
			{@render children()}
		{/if}
	</main>
	<Footer />
</div>
