<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import { ArrowLeft } from '@lucide/svelte';
	import { useMediaQuery } from '$lib/utils/useMediaQuery';

	let {
		title,
		content,
		badge = '',
		backText = 'Back to Home',
		showBack = false,
		watermarkText = ''
	}: {
		title: {
			heading: string;
			subheading: string;
		};
		content: string;
		badge?: string;
		backText?: string;
		showBack?: boolean;
		watermarkText?: string;
	} = $props();

	let canvasEl: HTMLCanvasElement | undefined = $state();
	const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

	const displayWatermark = $derived(watermarkText || title.subheading || title.heading);

	onMount(() => {
		if (typeof window === 'undefined' || !canvasEl || $isReducedMotion) return;

		const canvas = canvasEl;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		let animationFrameId: number;
		let width = 0;
		let height = 0;

		const resize = () => {
			width = canvas.parentElement?.clientWidth || window.innerWidth;
			height = canvas.parentElement?.clientHeight || 450;
			canvas.width = width;
			canvas.height = height;
		};

		resize();
		window.addEventListener('resize', resize);

		interface Node {
			x: number;
			y: number;
			size: number;
			pulse: number;
			pulseSpeed: number;
		}

		interface Signal {
			pathIndex: number;
			progress: number;
			speed: number;
			size: number;
		}

		const paths: { start: { x: number; y: number }; end: { x: number; y: number } }[] = [];
		const nodes: Node[] = [];
		const numNodes = Math.floor(Math.max(width, 600) / 110);

		for (let i = 0; i < numNodes; i++) {
			nodes.push({
				x: Math.random() * width,
				y: Math.random() * height,
				size: Math.random() * 3 + 2,
				pulse: Math.random() * Math.PI * 2,
				pulseSpeed: 0.02 + Math.random() * 0.03
			});
		}

		for (let i = 0; i < nodes.length; i++) {
			for (let j = i + 1; j < nodes.length; j++) {
				const n1 = nodes[i];
				const n2 = nodes[j];
				const dist = Math.hypot(n1.x - n2.x, n1.y - n2.y);
				if (dist < 180 && Math.random() > 0.4) {
					const midX = n1.x;
					const midY = n2.y;
					paths.push({ start: { x: n1.x, y: n1.y }, end: { x: midX, y: midY } });
					paths.push({ start: { x: midX, y: midY }, end: { x: n2.x, y: n2.y } });
				}
			}
		}

		const signals: Signal[] = [];
		const numSignals = Math.min(paths.length, 18);
		for (let i = 0; i < numSignals; i++) {
			signals.push({
				pathIndex: Math.floor(Math.random() * paths.length),
				progress: Math.random(),
				speed: 0.003 + Math.random() * 0.006,
				size: Math.random() * 2 + 2
			});
		}

		const render = () => {
			ctx.clearRect(0, 0, width, height);

			const isDark = document.documentElement.classList.contains('dark');
			const lineBaseColor = isDark ? 'rgba(0, 240, 255, 0.12)' : 'rgba(2, 132, 199, 0.15)';
			const nodeBaseColor = isDark ? '#00F0FF' : '#0284C7';
			const signalGlowColor = isDark ? '#38BDF8' : '#0284C7';

			ctx.lineWidth = 1.2;
			ctx.strokeStyle = lineBaseColor;
			ctx.beginPath();
			paths.forEach((p) => {
				ctx.moveTo(p.start.x, p.start.y);
				ctx.lineTo(p.end.x, p.end.y);
			});
			ctx.stroke();

			nodes.forEach((n) => {
				n.pulse += n.pulseSpeed;
				const glow = (Math.sin(n.pulse) + 1) / 2;

				ctx.beginPath();
				ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
				ctx.fillStyle = nodeBaseColor;
				ctx.globalAlpha = 0.35 + glow * 0.45;
				ctx.fill();

				ctx.beginPath();
				ctx.arc(n.x, n.y, n.size + 3 + glow * 2, 0, Math.PI * 2);
				ctx.strokeStyle = nodeBaseColor;
				ctx.lineWidth = 0.8;
				ctx.globalAlpha = 0.2 * glow;
				ctx.stroke();
			});

			signals.forEach((s) => {
				if (paths.length === 0) return;
				s.progress += s.speed;
				if (s.progress >= 1) {
					s.progress = 0;
					s.pathIndex = Math.floor(Math.random() * paths.length);
				}

				const p = paths[s.pathIndex];
				if (!p) return;

				const curX = p.start.x + (p.end.x - p.start.x) * s.progress;
				const curY = p.start.y + (p.end.y - p.start.y) * s.progress;

				ctx.beginPath();
				ctx.arc(curX, curY, s.size + 4, 0, Math.PI * 2);
				ctx.fillStyle = signalGlowColor;
				ctx.globalAlpha = 0.25;
				ctx.fill();

				ctx.beginPath();
				ctx.arc(curX, curY, s.size, 0, Math.PI * 2);
				ctx.fillStyle = '#FFFFFF';
				ctx.globalAlpha = 0.9;
				ctx.fill();
			});

			ctx.globalAlpha = 1.0;
			animationFrameId = requestAnimationFrame(render);
		};

		render();

		return () => {
			window.removeEventListener('resize', resize);
			if (animationFrameId) cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<section
	class="from-background via-muted/40 to-background border-border/60 relative flex min-h-[380px] items-center overflow-hidden border-b bg-gradient-to-b py-16 md:min-h-[440px]"
>
	<!-- Giant Background Watermark Text -->
	<div
		class="text-stroke-watermark pointer-events-none absolute top-4 left-1/2 z-0 -translate-x-1/2 text-[13vw] leading-none font-black tracking-widest whitespace-nowrap uppercase select-none"
	>
		/{displayWatermark}
	</div>

	<!-- Animated Circuit Canvas Background -->
	{#if !$isReducedMotion}
		<canvas
			bind:this={canvasEl}
			class="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-75 dark:opacity-90"
		></canvas>
	{/if}

	<!-- Ambient Glow Overlays -->
	<div
		class="bg-primary/15 animate-pulse-glow pointer-events-none absolute top-1/4 left-1/4 z-0 h-72 w-72 rounded-full blur-3xl"
	></div>
	<div
		class="bg-secondary/15 animate-pulse-glow pointer-events-none absolute right-1/4 bottom-1/4 z-0 h-80 w-80 rounded-full blur-3xl"
		style="animation-delay: 2s;"
	></div>

	<!-- Content -->
	<div class="relative z-10 container mx-auto max-w-5xl px-6">
		{#if showBack}
			<div in:fly={{ y: -10, duration: 400 }}>
				<a
					href="/"
					class="text-primary hover:text-primary/80 group mb-6 inline-flex items-center space-x-2 text-sm font-semibold transition-colors"
				>
					<ArrowLeft size={16} class="transition-transform group-hover:-translate-x-1" />
					<span>{backText}</span>
				</a>
			</div>
		{/if}

		{#if badge}
			<div
				in:scale={{ duration: 400, delay: 150 }}
				class="bg-primary/10 text-primary border-primary/30 mb-4 inline-flex items-center space-x-2 rounded-full border px-3.5 py-1 text-xs font-semibold shadow-sm backdrop-blur-md transition-transform hover:scale-105"
			>
				<span class="bg-primary h-2 w-2 animate-pulse rounded-full"></span>
				<span>{badge}</span>
			</div>
		{/if}

		<h1
			in:fly={{ y: 25, duration: 500, delay: 250 }}
			class="text-foreground mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
		>
			{title.heading} <span class="animate-shimmer">{title.subheading}</span>
		</h1>

		<p
			in:fade={{ duration: 500, delay: 400 }}
			class="text-muted-foreground max-w-3xl text-lg leading-relaxed font-normal md:text-xl"
		>
			{content}
		</p>
	</div>
</section>
