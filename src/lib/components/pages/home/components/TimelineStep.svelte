<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		step: { title: string; description: string };
		index: number;
		children?: Snippet;
	}

	let { step, index, children }: Props = $props();
	const isLeft = $derived(index % 2 === 0);
</script>

<div class="relative flex items-center justify-center">
	<div
		class="absolute {isLeft
			? 'left-1/2 -translate-x-1/2 -translate-x-14'
			: 'right-1/2 translate-x-1/2 translate-x-14'} bg-primary border-background z-10 h-8 w-8 rounded-full border-4"
	></div>
	<div class="w-5/12 {isLeft ? 'mr-auto pr-8 text-right' : 'ml-auto pl-8 text-left'}">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
