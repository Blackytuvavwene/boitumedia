<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly, scale } from 'svelte/transition';
	import Button from '$lib/components/global/ui/Button.svelte';
	import { HomePageStrings } from '$lib/utils/strings';
	import { themeState } from '$lib/stores/theme.svelte';
	import { useMediaQuery } from '$lib/utils/useMediaQuery';
	import {
		ArrowUpRight,
		Sparkles,
		Code2,
		Smartphone,
		Database,
		Terminal,
		Award,
		Mail
	} from '@lucide/svelte';
	import { SiGithub, SiFacebook, SiX, SiWhatsapp } from '@icons-pack/svelte-simple-icons';

	let canvasEl: HTMLCanvasElement | undefined = $state();
	const isReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

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
			height = canvas.parentElement?.clientHeight || 680;
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
		const numNodes = Math.floor(Math.max(width, 700) / 95);

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
				if (dist < 190 && Math.random() > 0.45) {
					const midX = n1.x;
					const midY = n2.y;
					paths.push({ start: { x: n1.x, y: n1.y }, end: { x: midX, y: midY } });
					paths.push({ start: { x: midX, y: midY }, end: { x: n2.x, y: n2.y } });
				}
			}
		}

		const signals: Signal[] = [];
		const numSignals = Math.min(paths.length, 24);
		for (let i = 0; i < numSignals; i++) {
			signals.push({
				pathIndex: Math.floor(Math.random() * paths.length),
				progress: Math.random(),
				speed: 0.003 + Math.random() * 0.007,
				size: Math.random() * 2 + 2
			});
		}

		const render = () => {
			ctx.clearRect(0, 0, width, height);

			const isDark = themeState.resolvedTheme === 'dark';
			const lineBaseColor = isDark ? 'rgba(0, 240, 255, 0.14)' : 'rgba(2, 132, 199, 0.16)';
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
				ctx.globalAlpha = 0.95;
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

	const techBadges = [
		{ name: 'Flutter', icon: Smartphone, color: 'text-primary' },
		{ name: 'Python', icon: Terminal, color: 'text-emerald-500' },
		{ name: 'Svelte & SvelteKit', icon: Code2, color: 'text-orange-500' },
		{ name: 'SQL', icon: Database, color: 'text-blue-500' },
		{ name: 'Google IT Support Enrolled', icon: Award, color: 'text-primary', highlight: true }
	];

	const socialPills = [
		{ name: 'GitHub', href: 'https://github.com/Blackytuvavwene', icon: SiGithub },
		{ name: 'X', href: 'https://x.com/Blackytubabwene', icon: SiX },
		{ name: 'Facebook', href: 'https://www.facebook.com/boitumelo.blacky', icon: SiFacebook },
		{ name: 'Email', href: 'mailto:hello@boitumedia.xyz', icon: Mail },
		{ name: 'WhatsApp', href: 'https://wa.me/26777465201', icon: SiWhatsapp }
	];
</script>

<section
	class="from-background via-muted/30 to-background relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b pt-24 pb-16"
>
	<!-- Giant Outline Watermark Typography -->
	<div
		class="text-stroke-watermark pointer-events-none absolute top-10 left-1/2 z-0 -translate-x-1/2 text-[14vw] leading-none font-black tracking-widest whitespace-nowrap uppercase select-none sm:text-[16vw]"
	>
		BOITUMELO
	</div>

	<!-- Animated Circuit Canvas Background -->
	{#if !$isReducedMotion}
		<canvas
			bind:this={canvasEl}
			class="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-80 dark:opacity-90"
		></canvas>
	{/if}

	<!-- Ambient Glow Overlays -->
	<div
		class="bg-primary/15 animate-pulse-glow pointer-events-none absolute top-1/3 left-1/4 z-0 h-96 w-96 rounded-full blur-3xl"
	></div>
	<div
		class="bg-secondary/15 animate-pulse-glow pointer-events-none absolute right-1/4 bottom-1/4 z-0 h-96 w-96 rounded-full blur-3xl"
		style="animation-delay: 2s;"
	></div>

	<div class="relative z-10 container mx-auto px-6">
		<!-- Top Bar Status Pill -->
		<div class="mb-8 flex items-center justify-between">
			<div
				in:fly={{ y: -15, duration: 400, delay: 100 }}
				class="glass-pill text-foreground inline-flex items-center space-x-2.5 rounded-full px-4 py-1.5 text-xs font-semibold shadow-sm transition-transform hover:scale-105"
			>
				<span class="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500"></span>
				<span>Available for New Projects</span>
			</div>

			<!-- Desktop Nav Quick Count Badges -->
			<div
				in:fade={{ duration: 400, delay: 200 }}
				class="text-muted-foreground hidden items-center space-x-6 text-xs font-medium md:flex"
			>
				<a href="/projects" class="hover:text-primary transition-colors"
					>Work <span class="text-xs opacity-65">[04]</span></a
				>
				<a href="/about" class="hover:text-primary transition-colors"
					>Stack <span class="text-xs opacity-65">[04]</span></a
				>
				<a href="/about" class="hover:text-primary transition-colors"
					>Certificate <span class="text-xs opacity-65">[Google IT]</span></a
				>
			</div>
		</div>

		<!-- Main Hero Grid -->
		<div class="grid items-center gap-12 pt-4 lg:grid-cols-12">
			<!-- Left Hero Text & CTA Content -->
			<div class="space-y-6 text-left lg:col-span-7">
				<!-- Editorial Intro Greeting -->
				<div in:fly={{ y: 20, duration: 500, delay: 200 }}>
					<span
						class="text-primary mb-1 block font-serif text-2xl font-normal italic sm:text-3xl md:text-4xl"
					>
						Hey there, I am
					</span>

					<h1
						in:fly={{ y: 25, duration: 600, delay: 300 }}
						class="text-foreground text-4xl leading-[1.05] font-black tracking-tight sm:text-6xl md:text-7xl"
					>
						BOITUMELO <br />
						<span class="animate-shimmer"> TUBABWENE </span>
					</h1>
				</div>

				<!-- Role Tag -->
				<div
					in:fly={{ y: 15, duration: 400, delay: 400 }}
					class="bg-primary/10 text-primary border-primary/20 inline-block rounded-lg border px-3.5 py-1 text-sm font-semibold shadow-sm"
				>
					Self-Taught Software Developer • Botswana 🇧🇼
				</div>

				<!-- Bio Paragraph -->
				<p
					in:fade={{ duration: 500, delay: 500 }}
					class="text-muted-foreground max-w-xl text-base leading-relaxed font-normal sm:text-lg"
				>
					{HomePageStrings.HERO_PARAGRAPH}
				</p>

				<!-- Tech Badges (Staggered Animations) -->
				<div class="flex flex-wrap items-center gap-2 pt-2">
					{#each techBadges as badge, idx (badge.name)}
						{@const Icon = badge.icon}
						<div
							in:fly={{ y: 15, duration: 400, delay: 600 + idx * 70 }}
							class={`inline-flex items-center space-x-1.5 rounded-lg border px-3 py-1 text-xs shadow-sm transition-transform hover:-translate-y-1 ${
								badge.highlight
									? 'bg-primary/10 border-primary/30 text-primary font-semibold'
									: 'bg-card border-border text-foreground font-medium'
							}`}
						>
							<Icon size={14} class={badge.color} />
							<span>{badge.name}</span>
						</div>
					{/each}
				</div>

				<!-- Action Buttons -->
				<div
					in:fly={{ y: 20, duration: 500, delay: 900 }}
					class="flex flex-wrap items-center gap-4 pt-4"
				>
					<a href="/contact">
						<Button
							size="lg"
							class="flex items-center space-x-2 shadow-lg transition-transform hover:scale-105"
						>
							<span>Let's Collaborate</span>
							<ArrowUpRight size={18} />
						</Button>
					</a>
					<a href="/projects">
						<Button
							size="lg"
							variant="secondary"
							class="flex items-center space-x-2 transition-transform hover:scale-105"
						>
							<span>Selected Work</span>
							<ArrowUpRight size={18} />
						</Button>
					</a>
				</div>
			</div>

			<!-- Right Developer Portrait Frame & Floating Social Matrix -->
			<div class="relative flex flex-col items-center justify-center lg:col-span-5">
				<div
					in:scale={{ duration: 700, delay: 350 }}
					class="group animate-float relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96"
				>
					<!-- Animated Circuit Glow Ring -->
					<div
						class="from-primary to-secondary animate-pulse-glow absolute -inset-4 rounded-full bg-gradient-to-r via-cyan-400 opacity-60 blur-xl transition-opacity group-hover:opacity-100"
					></div>

					<!-- Circuit Frame Container -->
					<div
						class="border-primary/40 bg-card relative h-full w-full overflow-hidden rounded-3xl border-2 shadow-2xl"
					>
						<img
							src="/developer_portrait.jpg"
							alt="Boitumelo Tubabwene - Self-Taught Developer"
							loading="eager"
							fetchpriority="high"
							decoding="async"
							class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
						/>
						<div
							class="from-background/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60"
						></div>
						<div class="absolute right-4 bottom-4 left-4 text-center">
							<span
								class="text-foreground bg-background/85 border-border rounded-full border px-3.5 py-1 text-xs font-bold tracking-wider uppercase shadow-md backdrop-blur-md"
							>
								Boitumelo Tubabwene
							</span>
						</div>
					</div>
				</div>

				<!-- Floating Glassmorphic Social Links Matrix -->
				<div class="mt-8 flex flex-wrap items-center justify-center gap-2.5">
					{#each socialPills as social, idx (social.name)}
						{@const SocialIcon = social.icon}
						<a
							in:fly={{ y: 15, duration: 400, delay: 800 + idx * 80 }}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							class="glass-pill text-foreground flex items-center space-x-2 rounded-full px-4 py-2 text-xs font-semibold shadow-sm transition-transform duration-300 hover:scale-110"
						>
							<SocialIcon size={14} />
							<span>{social.name}</span>
							<ArrowUpRight size={12} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
