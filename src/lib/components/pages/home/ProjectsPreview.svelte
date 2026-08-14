<script lang="ts">
	import { inview } from 'svelte-inview';
	import Button from '$lib/components/global/ui/Button.svelte';
	import { ArrowUpRight } from '@lucide/svelte';

	import { projects } from '$lib/data/projects';

	let selectedCategory = $state('all');
	let isHeaderInView = $state(false);
	let isCardsInView = $state(false);

	const previewProjects = $derived(
		projects.map((p) => ({
			...p,
			href: `/projects/${p.id}`
		}))
	);

	const filteredProjects = $derived(
		selectedCategory === 'all'
			? previewProjects
			: previewProjects.filter((p) => p.category === selectedCategory)
	);
</script>

<section class="bg-background border-border/50 relative w-full overflow-hidden border-b py-24">
	<!-- Giant Background Watermark Text -->
	<div
		class="text-stroke-watermark pointer-events-none absolute top-6 left-1/2 z-0 -translate-x-1/2 text-[12vw] leading-none font-black tracking-widest whitespace-nowrap uppercase select-none"
	>
		PORTFOLIO
	</div>

	<div class="relative z-10 container mx-auto px-6">
		<!-- Header & Title with Scroll-Triggered Slide-In -->
		<div
			use:inview={{ rootMargin: '0px 0px -50px 0px', unobserveOnEnter: true }}
			oninview_change={({ detail }) => {
				if (detail.inView) isHeaderInView = true;
			}}
			class="mx-auto mb-10 max-w-3xl transform text-center transition-all duration-700 ease-out {isHeaderInView
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			<span
				class="bg-primary/10 text-primary border-primary/20 mb-3 inline-block rounded-full border px-3.5 py-1 text-xs font-semibold shadow-sm"
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

		<!-- Category Filter Tabs & View All Button Row -->
		<div
			class="border-border/60 mx-auto mb-12 flex max-w-5xl transform flex-col items-center justify-between gap-6 border-b pb-6 transition-all delay-200 duration-700 ease-out sm:flex-row {isHeaderInView
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			<!-- Filter Pills -->
			<div class="flex flex-wrap items-center justify-center gap-2">
				<button
					type="button"
					onclick={() => (selectedCategory = 'all')}
					aria-pressed={selectedCategory === 'all'}
					class={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'all'
							? 'bg-primary text-primary-foreground scale-105 shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					All Work
				</button>
				<button
					type="button"
					onclick={() => (selectedCategory = 'flutter')}
					aria-pressed={selectedCategory === 'flutter'}
					class={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'flutter'
							? 'bg-primary text-primary-foreground scale-105 shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					Flutter Apps
				</button>
				<button
					type="button"
					onclick={() => (selectedCategory = 'svelte')}
					aria-pressed={selectedCategory === 'svelte'}
					class={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'svelte'
							? 'bg-primary text-primary-foreground scale-105 shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					Svelte Web
				</button>
				<button
					type="button"
					onclick={() => (selectedCategory = 'python')}
					aria-pressed={selectedCategory === 'python'}
					class={`cursor-pointer rounded-full px-4 py-2 text-xs font-bold transition-all ${
						selectedCategory === 'python'
							? 'bg-primary text-primary-foreground scale-105 shadow-md'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					Python & SQL
				</button>
			</div>

			<!-- Top Right Button -->
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

		<!-- Project Cards Grid with Staggered Scroll Slide-In -->
		<div
			use:inview={{ rootMargin: '0px 0px -60px 0px', unobserveOnEnter: true }}
			oninview_change={({ detail }) => {
				if (detail.inView) isCardsInView = true;
			}}
		>
			<div class="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
				{#each filteredProjects as p, index (p.id)}
					<article
						class="group border-border bg-card hover:border-primary/50 relative flex transform-gpu flex-col overflow-hidden rounded-3xl border shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl {isCardsInView
							? 'translate-y-0 opacity-100'
							: 'translate-y-14 opacity-0'}"
						style="transition-delay: {index * 140}ms;"
					>
						<a href={p.href} class="block flex h-full flex-col">
							<!-- Image Container with Hover Circle Arrow Button -->
							<div class="bg-muted relative h-60 overflow-hidden">
								<span
									class="bg-background/90 text-foreground border-border absolute top-4 left-4 z-10 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md"
								>
									{p.categoryLabel}
								</span>

								<!-- Floating Circle Arrow Button on Image -->
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
									decoding="async"
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

								<!-- Tags Footer -->
								<div class="border-border/50 flex flex-wrap gap-2 border-t pt-2">
									{#each p.tags as tag (tag)}
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
	</div>
</section>
