<script lang="ts">
	import { Sun, Moon } from '@lucide/svelte';
	import { themeState } from '$lib/stores/theme.svelte';

	function handleToggle() {
		themeState.toggle();
	}
</script>

<button
	type="button"
	onclick={handleToggle}
	class="group border-border bg-card/80 hover:border-primary/50 text-foreground relative flex cursor-pointer items-center justify-center rounded-full border p-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-md active:scale-95"
	aria-label={`Switch to ${themeState.resolvedTheme === 'dark' ? 'Light' : 'Dark'} Mode`}
>
	<div
		class="relative flex h-5 w-5 items-center justify-center transition-transform duration-500 group-hover:rotate-45"
	>
		{#if themeState.resolvedTheme === 'dark'}
			<Sun class="h-5 w-5 animate-pulse text-amber-400" />
		{:else}
			<Moon class="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
		{/if}
	</div>

	<!-- Tooltip badge on hover -->
	<span
		class="bg-popover text-popover-foreground border-border pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-md border px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap opacity-0 shadow-md transition-opacity group-hover:opacity-100"
	>
		{themeState.resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
	</span>
</button>
