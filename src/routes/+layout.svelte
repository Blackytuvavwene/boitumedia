<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import SEO from '$lib/components/global/SEO.svelte';
	import { page } from '$app/state';
	import { themeState } from '$lib/stores/theme.svelte';
	import type { Snippet } from 'svelte';

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
	title={page.data.title}
	description={page.data.description}
	keywords={page.data.keywords}
	canonicalUrl={page.data.canonicalUrl || page.url.href}
/>

<div
	class="bg-background text-foreground selection:bg-primary/20 selection:text-primary flex min-h-screen flex-col"
>
	<Navbar />
	<main class="flex-grow pt-16">
		{#if children}
			{@render children()}
		{/if}
	</main>
	<Footer />
</div>
