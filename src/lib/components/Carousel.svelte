<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		items?: any[];
		autoplay?: boolean;
		interval?: number;
		showControls?: boolean;
		showIndicators?: boolean;
	}

	let {
		items = [],
		autoplay = true,
		interval = 5000,
		showControls = true,
		showIndicators = true
	}: Props = $props();

	let currentIndex = $state(0);
	let intervalId: number | undefined;

	onMount(() => {
		if (autoplay && items.length > 1) {
			startAutoplay();
		}

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});

	function startAutoplay() {
		intervalId = setInterval(() => {
			next();
		}, interval);
	}

	function stopAutoplay() {
		if (intervalId) clearInterval(intervalId);
	}

	function next() {
		if (!items.length) return;
		currentIndex = (currentIndex + 1) % items.length;
	}

	function prev() {
		if (!items.length) return;
		currentIndex = (currentIndex - 1 + items.length) % items.length;
	}

	function goToSlide(index: number) {
		currentIndex = index;
	}
</script>

<div
	class="relative h-full w-full overflow-hidden"
	onmouseenter={() => autoplay && stopAutoplay()}
	onmouseleave={() => autoplay && startAutoplay()}
	role="region"
	aria-roledescription="carousel"
	aria-label="Image carousel"
>
	<div class="relative h-full w-full" role="group" aria-label="Carousel slides">
		{#each items as item, i}
			<div
				class="absolute top-0 left-0 h-full w-full transition-transform duration-500 ease-in-out"
				style="transform: translateX({(i - currentIndex) * 100}%)"
				role="tabpanel"
				aria-hidden={i !== currentIndex}
				aria-label={`Slide ${i + 1} of ${items.length}`}
			>
				{#if item.type === 'image'}
					<img
						src={item.src}
						alt={item.alt || `Slide ${i + 1}`}
						class="h-full w-full object-cover"
					/>
				{:else}
					<div class="flex h-full w-full items-center justify-center">
						{@html item.content}
					</div>
				{/if}
			</div>
		{/each}
	</div>

	{#if showControls && items.length > 1}
		<button
			type="button"
			class="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-300 hover:bg-black/70 md:h-12 md:w-12"
			onclick={prev}
			aria-label="Go to previous slide"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="15 18 9 12 15 6"></polyline>
			</svg>
		</button>
		<button
			type="button"
			class="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition-colors duration-300 hover:bg-black/70 md:h-12 md:w-12"
			onclick={next}
			aria-label="Go to next slide"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<polyline points="9 18 15 12 9 6"></polyline>
			</svg>
		</button>
	{/if}

	{#if showIndicators && items.length > 1}
		<div
			class="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2"
			role="tablist"
			aria-label="Slide indicators"
		>
			{#each items as _, i}
				<button
					type="button"
					class="h-2.5 w-2.5 cursor-pointer rounded-full p-0 transition-colors duration-300 {i ===
					currentIndex
						? 'bg-white'
						: 'bg-white/50'}"
					onclick={() => goToSlide(i)}
					aria-label="Go to slide {i + 1}"
					aria-selected={i === currentIndex}
					role="tab"
				></button>
			{/each}
		</div>
	{/if}
</div>
