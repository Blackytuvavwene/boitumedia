<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		value?: number;
		end?: number;
		duration?: number;
	}

	let { value = 0, end = 0, duration = 2000 }: Props = $props();

	const targetValue = $derived(end || value);
	let displayValue = $state(0);

	onMount(() => {
		const startTime = Date.now();
		const final = targetValue;

		const timer = setInterval(() => {
			const now = Date.now();
			const elapsed = now - startTime;
			const progress = Math.min(elapsed / duration, 1);

			displayValue = Math.floor(progress * final);

			if (progress === 1) {
				clearInterval(timer);
			}
		}, 16);

		return () => clearInterval(timer);
	});
</script>

<span>
	{displayValue}
</span>
