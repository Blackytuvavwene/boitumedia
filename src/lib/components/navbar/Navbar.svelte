<script lang="ts">
	import { useClickOutside } from '@ariefsn/svelte-use';
	import { Menu, X, ArrowUpRight } from '@lucide/svelte';
	import { fly, fade } from 'svelte/transition';
	import { page } from '$app/state';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import Button from '$lib/components/global/ui/Button.svelte';

	let y = $state(0);
	const isScrolled = $derived(y > 40);

	let isMenuOpen = $state(false);
	let headerElement = $state<HTMLElement | null>(null);
	const mobileMenuId = 'mobile-navigation-menu';

	// Use Svelte 5 composable hook from @ariefsn/svelte-use to close menu on outside clicks
	useClickOutside(
		() => headerElement,
		() => {
			if (isMenuOpen) {
				isMenuOpen = false;
			}
		}
	);

	function closeMenu() {
		isMenuOpen = false;
	}

	const navLinks = [
		{ name: 'Home', path: '/' },
		{ name: 'About', path: '/about' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'Contact', path: '/contact' }
	];
</script>

<svelte:window bind:scrollY={y} />

<header
	bind:this={headerElement}
	class="fixed top-0 right-0 left-0 z-50 w-full border-b transition-all duration-300 ease-in-out {isScrolled
		? 'glass-panel border-border/80 py-3 shadow-md'
		: 'bg-background/80 border-transparent py-4 backdrop-blur-md'}"
>
	<nav
		class="container mx-auto flex items-center justify-between px-6"
		aria-label="Main Navigation"
	>
		<!-- Brand Logo -->
		<a
			href="/"
			onclick={closeMenu}
			aria-label="BoituMedia Home"
			class="group flex items-center space-x-2.5"
		>
			<img
				src="/logo-icon.png"
				alt="BoituMedia Logo Icon"
				width="34"
				height="34"
				class="h-8.5 w-8.5 object-contain transition-transform duration-200 group-hover:scale-105"
			/>
			<div class="flex items-center tracking-tight">
				<span class="text-foreground group-hover:text-primary text-2xl font-black transition-colors">
					Boitu
				</span>
				<span class="text-primary text-2xl font-black">Media</span>
			</div>
		</a>

		<!-- Desktop Links -->
		<ul class="hidden items-center space-x-8 md:flex">
			{#each navLinks as link (link.path)}
				{@const isActive = page.url.pathname === link.path}
				<li>
					<a
						href={link.path}
						class="relative px-2 py-1 text-sm font-semibold transition-colors duration-200 {isActive
							? 'text-primary font-bold'
							: 'text-foreground/80 hover:text-primary'}"
					>
						{link.name}
						{#if isActive}
							<span
								class="bg-primary absolute right-0 bottom-0 left-0 h-0.5 rounded-full"
								in:fly={{ y: 2, duration: 150 }}
							></span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Desktop Actions: Theme Toggle & Get a Quote Button -->
		<div class="hidden items-center gap-4 md:flex">
			<ThemeToggle />
			<a href="/contact">
				<Button
					size="md"
					class="flex items-center space-x-1.5 shadow-md transition-transform hover:scale-105"
				>
					<span>Get a Quote</span>
					<ArrowUpRight size={16} />
				</Button>
			</a>
		</div>

		<!-- Mobile Menu Toggle Button -->
		<div class="flex items-center gap-3 md:hidden">
			<ThemeToggle />
			<button
				type="button"
				aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
				aria-expanded={isMenuOpen}
				aria-controls={mobileMenuId}
				class="text-foreground bg-muted/60 hover:bg-muted focus-visible:ring-primary border-border cursor-pointer rounded-xl border p-2 focus-visible:ring-2 focus-visible:outline-none"
				onclick={() => (isMenuOpen = !isMenuOpen)}
			>
				{#if isMenuOpen}
					<X size={22} />
				{:else}
					<Menu size={22} />
				{/if}
			</button>
		</div>
	</nav>

	<!-- Mobile Dropdown Navigation Drawer -->
	{#if isMenuOpen}
		<!-- Backdrop Overlay -->
		<button
			type="button"
			tabindex="-1"
			aria-label="Close menu backdrop"
			class="fixed inset-0 top-[65px] z-40 h-full w-full cursor-default border-none bg-black/60 p-0 backdrop-blur-sm md:hidden"
			onclick={closeMenu}
			in:fade={{ duration: 200 }}
		></button>

		<!-- Dropdown Panel -->
		<div
			id={mobileMenuId}
			transition:fly={{ y: -15, duration: 250 }}
			role="dialog"
			aria-modal="true"
			aria-label="Mobile navigation"
			class="bg-card/95 border-border fixed top-[65px] right-0 left-0 z-50 space-y-5 border-b p-6 shadow-2xl backdrop-blur-2xl md:hidden"
		>
			<ul class="flex flex-col space-y-2">
				{#each navLinks as link (link.path)}
					{@const isActive = page.url.pathname === link.path}
					<li>
						<a
							href={link.path}
							onclick={closeMenu}
							class="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition-colors {isActive
								? 'bg-primary/10 text-primary border-primary/20 border font-bold'
								: 'text-foreground hover:bg-muted'}"
						>
							<span>{link.name}</span>
							{#if isActive}
								<span class="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
							{/if}
						</a>
					</li>
				{/each}
			</ul>

			<div class="border-border flex items-center justify-between border-t pt-4">
				<span class="text-muted-foreground text-xs font-semibold">Boitumelo Tubabwene</span>
				<a href="/contact" onclick={closeMenu}>
					<Button size="sm" class="flex items-center space-x-1.5 shadow-md">
						<span>Get a Quote</span>
						<ArrowUpRight size={14} />
					</Button>
				</a>
			</div>
		</div>
	{/if}
</header>
