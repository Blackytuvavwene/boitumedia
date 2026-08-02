<script lang="ts">
	import type { Snippet } from 'svelte';
	import { inview } from 'svelte-inview';
	import type { Options, ObserverEventDetails } from 'svelte-inview';
	import type { TransitionConfig } from 'svelte/transition';
	import { useMediaQuery } from '$lib/utils/useMediaQuery';

	interface Props {
		children: Snippet;
		animate?: (node: HTMLElement, params: any) => TransitionConfig;
		threshold?: number;
		animationConfig?: Record<string, any>;
	}

	let { children, animate, threshold = 0.2, animationConfig = {} }: Props = $props();

	const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

	const options: Options = {
		rootMargin: '-30px',
		unobserveOnEnter: true
	};

	let isInView = $state(false);

	const handleInViewChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (detail.inView) {
			isInView = true;
		}
	};
</script>

<div use:inview={options} oninview_change={handleInViewChange}>
	{#if isInView || $isReducedMotion}
		{#if animate && !$isReducedMotion}
			<div transition:animate={animationConfig}>
				{@render children()}
			</div>
		{:else}
			<div>
				{@render children()}
			</div>
		{/if}
	{:else}
		<div class="opacity-0">
			{@render children()}
		</div>
	{/if}
</div>
