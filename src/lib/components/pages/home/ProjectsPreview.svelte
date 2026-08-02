<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Button from '$lib/components/global/ui/Button.svelte';
	import { ArrowUpRight } from '@lucide/svelte';

	type Project = {
		id: number;
		title: string;
		subtitle: string;
		description: string;
		image: string;
		category: string;
		categoryLabel: string;
		tags: string[];
		href: string;
	};

	let selectedCategory = $state('all');

	const projects: Project[] = [
		{
			id: 1,
			title: 'FinTech Wallet & Mobile Pay',
			subtitle: 'Flutter Mobile Application',
			description:
				'Cross-platform mobile wallet built with Flutter & Dart featuring biometric security and real-time transaction tracking.',
			image: '/placeholder.svg?height=400&width=600',
			category: 'flutter',
			categoryLabel: 'Flutter App',
			tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
			href: '/projects/1'
		},
		{
			id: 2,
			title: 'Boitumedia Platform',
			subtitle: 'SvelteKit Web Application',
			description:
				'Ultra-fast, high-contrast digital portfolio and client portal built with Svelte 5 runes, SvelteKit, and Tailwind CSS.',
			image: '/placeholder.svg?height=400&width=600',
			category: 'svelte',
			categoryLabel: 'Svelte Web',
			tags: ['Svelte 5', 'SvelteKit', 'TypeScript', 'Tailwind'],
			href: '/projects/2'
		},
		{
			id: 3,
			title: 'Database & API Engine',
			subtitle: 'Python & SQL Microservice',
			description:
				'Scalable backend API engine with PostgreSQL database connection pools, authentication, and automated data processing.',
			image: '/placeholder.svg?height=400&width=600',
			category: 'python',
			categoryLabel: 'Python & SQL',
			tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQL'],
			href: '/projects/3'
		}
	];

	const filteredProjects = $derived(
		selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory)
	);
</script>

<section class="bg-background border-border/50 relative w-full overflow-hidden border-b py-24">
	<!-- Giant Background Watermark Text (Reference 1) -->
	<div
		class="text-stroke-watermark pointer-events-none absolute top-6 left-1/2 z-0 -translate-x-1/2 text-[12vw] leading-none font-black tracking-widest whitespace-nowrap uppercase select-none"
	>
		PORTFOLIO
	</div>

	<div class="relative z-10 container mx-auto px-6">
		<!-- Header & Title (Reference 1) -->
		<div class="mx-auto mb-10 max-w-3xl text-center">
			<span
				class="bg-primary/10 text-primary border-primary/20 mb-3 inline-block rounded-full border px-3.5 py-1 text-xs font-semibold"
			>
				Portfolio Showcase
			</span>
			<h2
				class="text-foreground text-4xl font-black tracking-tight uppercase sm:text-5xl md:text-6xl"
			>
				/SELECTED WORK
			</h2>
			<p class="text-muted-foreground mt-3 text-base">
				Real-world mobile applications, web platforms, and backend software built by Boitumelo
				Tubabwene.
			</p>
		</div>

		<!-- Category Filter Tabs & View All Button Row (Reference 1) -->
		<div
			class="border-border/60 mx-auto mb-12 flex max-w-5xl flex-col items-center justify-between gap-6 border-b pb-6 sm:flex-row"
		>
			<!-- Filter Pills -->
			<div class="flex flex-wrap items-center justify-center gap-2">
				<button
					onclick={() => (selectedCategory = 'all')}
					class={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'all'
							? 'bg-primary text-primary-foreground shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					All Work
				</button>
				<button
					onclick={() => (selectedCategory = 'flutter')}
					class={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'flutter'
							? 'bg-primary text-primary-foreground shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					Flutter Apps
				</button>
				<button
					onclick={() => (selectedCategory = 'svelte')}
					class={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'svelte'
							? 'bg-primary text-primary-foreground shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					Svelte Web
				</button>
				<button
					onclick={() => (selectedCategory = 'python')}
					class={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'python'
							? 'bg-primary text-primary-foreground shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					Python & SQL
				</button>
			</div>

			<!-- Top Right Button (Reference 1) -->
			<a href="/projects">
				<Button
					size="sm"
					variant="secondary"
					class="glass-pill flex items-center space-x-2 rounded-full transition-transform hover:scale-105"
				>
					<span>View All Work</span>
					<ArrowUpRight size={14} />
				</Button>
			</a>
		</div>

		<!-- Project Cards Grid (Reference 1) -->
		<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as p (p.id)}
				<article
					class="group border-border bg-card hover:border-primary/50 relative flex transform-gpu flex-col overflow-hidden rounded-3xl border shadow-sm transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl"
					in:fly={{ y: 30, duration: 400 }}
					out:fade={{ duration: 150 }}
				>
					<a href={p.href} class="block flex h-full flex-col">
						<!-- Image Container with Hover Circle Arrow Button (Reference 1) -->
						<div class="bg-muted relative h-60 overflow-hidden">
							<span
								class="bg-background/90 text-foreground border-border absolute top-4 left-4 z-10 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md"
							>
								{p.categoryLabel}
							</span>

							<!-- Floating Circle Arrow Button on Image (Reference 1) -->
							<div
								class="bg-background/90 text-foreground group-hover:bg-primary group-hover:text-primary-foreground absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
							>
								<ArrowUpRight size={18} />
							</div>

							<img
								src={p.image}
								alt={p.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								loading="lazy"
							/>
						</div>

						<!-- Card Body -->
						<div class="flex flex-grow flex-col justify-between space-y-4 p-6">
							<div>
								<span class="text-primary text-xs font-semibold tracking-wide uppercase"
									>{p.subtitle}</span
								>
								<h3
									class="text-foreground group-hover:text-primary mt-1 text-xl font-bold transition-colors"
								>
									{p.title}
								</h3>
								<p class="text-muted-foreground mt-2 text-sm leading-relaxed">{p.description}</p>
							</div>

							<!-- Tags Footer (Reference 1) -->
							<div class="border-border/50 flex flex-wrap gap-2 border-t pt-2">
								{#each p.tags as tag}
									<span
										class="bg-muted text-foreground border-border rounded-full border px-2.5 py-1 text-xs font-medium"
									>
										{tag}
									</span>
								{/each}
							</div>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
</section>
