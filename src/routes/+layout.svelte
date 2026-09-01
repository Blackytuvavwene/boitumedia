<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
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
