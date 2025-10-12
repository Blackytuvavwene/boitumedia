<script lang="ts">
	import { Sun, Moon, Monitor } from 'lucide-svelte';
	import { themeState } from '$lib/stores/theme.svelte';
	import type { Theme } from '$lib/types/theme';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { fly } from 'svelte/transition';

	const themes: { value: Theme; label: string; icon: any }[] = [
		{ value: 'light', label: 'Light', icon: Sun },
		{ value: 'dark', label: 'Dark', icon: Moon },
		{ value: 'system', label: 'System', icon: Monitor }
	];

	let isOpen = $state(false);

	const {
		elements: { menu, item, trigger }
	} = createDropdownMenu({
		onOutsideClick: () => {
			isOpen = false;
		}
	});

	function handleThemeChange(theme: Theme) {
		themeState.setTheme(theme);
		isOpen = false;
	}
</script>

<div class="relative">
	<button
		type="button"
		use:melt={$trigger}
		onclick={() => (isOpen = !isOpen)}
		class="p-2 rounded-lg hover:bg-accent/10 transition-colors duration-200 text-foreground"
		aria-label="Toggle theme"
	>
		{#if themeState.resolvedTheme === 'dark'}
			<Moon class="w-5 h-5" />
		{:else}
			<Sun class="w-5 h-5" />
		{/if}
	</button>

	{#if isOpen}
		<div
			use:melt={$menu}
			transition:fly={{ y: -10, duration: 200 }}
			class="absolute right-0 mt-2 w-40 rounded-lg border border-border bg-popover shadow-lg overflow-hidden z-50"
		>
			<div class="py-1">
				{#each themes as theme}
					{@const Icon = theme.icon}
					<button
						type="button"
						use:melt={$item}
						onclick={() => handleThemeChange(theme.value)}
						class="w-full px-4 py-2 text-left text-sm hover:bg-accent/10 transition-colors duration-150 flex items-center gap-3 {themeState.theme ===
						theme.value
							? 'bg-accent/20 text-accent-foreground'
							: 'text-popover-foreground'}"
					>
						<Icon class="w-4 h-4" />
						<span>{theme.label}</span>
						{#if themeState.theme === theme.value}
							<span class="ml-auto text-primary">✓</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>
