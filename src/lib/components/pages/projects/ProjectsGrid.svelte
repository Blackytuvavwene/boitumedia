<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { createDialog, melt } from '@melt-ui/svelte';
	import {
		Globe,
		Smartphone,
		Server,
		Code2,
		ExternalLink,
		X,
		Sparkles,
		Filter,
		ArrowUpRight
	} from '@lucide/svelte';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import Button from '$lib/components/global/ui/Button.svelte';

	interface Project {
		id: number;
		title: string;
		description: string;
		image: string;
		tags: string[];
		category: string;
		longDescription: string;
		challenges: string;
		results: string;
		features: string[];
		technologies: string[];
		liveLink: string;
		githubLink: string;
	}

	const categories = [
		{ id: 'all', label: 'All Projects' },
		{ id: 'flutter', label: 'Flutter Mobile' },
		{ id: 'svelte', label: 'Svelte Web' },
		{ id: 'python', label: 'Python & SQL' }
	];

	const projects: Project[] = [
		{
			id: 1,
			title: 'FinTech Mobile Pay App',
			description:
				'Native cross-platform mobile wallet built with Flutter & Dart featuring biometric security and instant transfers.',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
			category: 'flutter',
			longDescription:
				'A modern mobile payment application built with Flutter and Dart for seamless iOS and Android cross-platform functionality.',
			challenges:
				'Optimizing state management and secure local biometric storage across different mobile operating systems.',
			results:
				'Achieved a 60fps UI render rate and fast response times across mid-tier and flagship mobile devices.',
			features: [
				'Biometric login',
				'QR Code payments',
				'Real-time balance updates',
				'Transaction history',
				'Push alerts'
			],
			technologies: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Stripe API'],
			liveLink: 'https://example.com',
			githubLink: 'https://github.com/Blackytuvavwene'
		},
		{
			id: 2,
			title: 'Boitumedia SvelteKit Portfolio',
			description:
				'High-performance digital portfolio platform built with Svelte 5 runes, SvelteKit, and circuit trace canvas animations.',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['Svelte 5', 'SvelteKit', 'TypeScript', 'Tailwind'],
			category: 'svelte',
			longDescription:
				'Custom developer portfolio designed with modern glassmorphic aesthetics, animated electronic circuit canvas, and full accessibility.',
			challenges:
				'Integrating real-time HTML5 Canvas animation loops smoothly alongside Svelte 5 rune state.',
			results: '100/100 Lighthouse performance score with 0 Svelte diagnostics errors.',
			features: [
				'Circuit canvas background',
				'Svelte 5 runes',
				'Dark/Light mode switch',
				'Responsive layout',
				'SEO optimization'
			],
			technologies: ['Svelte 5', 'SvelteKit', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS'],
			liveLink: 'https://boitumedia.xyz',
			githubLink: 'https://github.com/Blackytuvavwene'
		},
		{
			id: 3,
			title: 'Database Engine & API Automation',
			description:
				'Python REST API backend powered by PostgreSQL database pooling, automated task scheduling, and SQL query optimization.',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQL'],
			category: 'python',
			longDescription:
				'Backend API system designed to process incoming data payloads and execute optimized SQL database queries with connection pooling.',
			challenges: 'Preventing database connection bottlenecks under concurrent request traffic.',
			results: 'Reduced query execution latency by 45% using indexed SQL schemas.',
			features: [
				'Async REST API endpoints',
				'PostgreSQL pooling',
				'SQL indexing',
				'JSON Schema validation',
				'Automated logs'
			],
			technologies: ['Python 3', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
			liveLink: 'https://example.com',
			githubLink: 'https://github.com/Blackytuvavwene'
		}
	];

	let selectedCategory = $state('all');
	let selectedProject = $state<Project | null>(null);

	const filteredProjects = $derived(
		selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory)
	);

	const {
		elements: { trigger, overlay, content, title, description, close },
		states: { open }
	} = createDialog();

	function openModal(project: Project) {
		selectedProject = project;
		open.set(true);
	}
</script>

<section class="bg-background py-16">
	<div class="container mx-auto max-w-6xl px-6">
		<!-- Category Filter Pills (Reference 1) -->
		<div class="mb-12 flex flex-wrap items-center justify-center gap-3">
			{#each categories as cat}
				<button
					onclick={() => (selectedCategory = cat.id)}
					class={`rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
						selectedCategory === cat.id
							? 'bg-primary text-primary-foreground scale-105 shadow-lg'
							: 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border-border border'
					}`}
				>
					{cat.label}
				</button>
			{/each}
		</div>

		<!-- Projects Grid (Reference 1 Card Styling) -->
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each filteredProjects as project (project.id)}
				<article
					class="group border-border bg-card hover:border-primary/50 flex flex-col justify-between overflow-hidden rounded-3xl border shadow-sm transition-all duration-400 hover:shadow-2xl"
					in:fly={{ y: 30, duration: 400 }}
				>
					<button
						onclick={() => openModal(project)}
						class="focus:ring-primary flex h-full w-full flex-col justify-between rounded-3xl text-left focus:ring-2 focus:outline-none"
					>
						<div>
							<!-- Image Container with Floating Circle Arrow Button (Reference 1) -->
							<div class="bg-muted relative h-60 overflow-hidden">
								<span
									class="bg-background/90 text-foreground border-border absolute top-4 left-4 z-10 rounded-full border px-3 py-1 text-xs font-bold backdrop-blur-md"
								>
									{project.category.toUpperCase()}
								</span>

								<!-- Circle Arrow Button -->
								<div
									class="bg-background/90 text-foreground group-hover:bg-primary group-hover:text-primary-foreground absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
								>
									<ArrowUpRight size={18} />
								</div>

								<img
									src={project.image}
									alt={project.title}
									class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							<!-- Card Content -->
							<div class="space-y-3 p-6">
								<h3
									class="text-foreground group-hover:text-primary text-xl font-bold transition-colors"
								>
									{project.title}
								</h3>
								<p class="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
									{project.description}
								</p>
							</div>
						</div>

						<!-- Card Footer Tags -->
						<div class="flex flex-wrap gap-2 p-6 pt-0">
							{#each project.tags as tag}
								<span
									class="bg-muted text-foreground border-border rounded-full border px-2.5 py-1 text-xs font-medium"
								>
									{tag}
								</span>
							{/each}
						</div>
					</button>
				</article>
			{/each}
		</div>

		<!-- Dialog Modal for Project Details -->
		{#if $open && selectedProject}
			<div
				use:melt={$overlay}
				class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
				in:fade={{ duration: 200 }}
			></div>
			<div
				use:melt={$content}
				class="bg-card border-border fixed top-[50%] left-[50%] z-50 max-h-[85vh] w-[90vw] max-w-3xl translate-x-[-50%] translate-y-[-50%] overflow-y-auto rounded-3xl border p-6 shadow-2xl focus:outline-none md:p-8"
				in:scale={{ duration: 250 }}
			>
				<div class="border-border mb-6 flex items-center justify-between border-b pb-4">
					<h2 use:melt={$title} class="text-foreground text-2xl font-bold">
						{selectedProject.title}
					</h2>
					<button
						use:melt={$close}
						aria-label="Close modal"
						class="bg-muted text-muted-foreground hover:text-foreground flex h-8 w-8 items-center justify-center rounded-full"
					>
						<X size={18} />
					</button>
				</div>

				<div class="space-y-6">
					<img
						src={selectedProject.image}
						alt={selectedProject.title}
						class="border-border h-64 w-full rounded-2xl border object-cover"
					/>
					<p use:melt={$description} class="text-muted-foreground leading-relaxed">
						{selectedProject.longDescription}
					</p>

					<div class="bg-muted/40 border-border grid gap-6 rounded-2xl border p-6 md:grid-cols-2">
						<div>
							<h4 class="text-foreground mb-2 font-bold">Key Challenges</h4>
							<p class="text-muted-foreground text-sm leading-relaxed">
								{selectedProject.challenges}
							</p>
						</div>
						<div>
							<h4 class="text-foreground mb-2 font-bold">Project Results</h4>
							<p class="text-muted-foreground text-sm leading-relaxed">{selectedProject.results}</p>
						</div>
					</div>

					<div class="border-border flex items-center space-x-4 border-t pt-4">
						<a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
							<Button variant="secondary" size="md" class="flex items-center space-x-2">
								<span>Source Code</span>
								<SiGithub size={16} />
							</Button>
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>
