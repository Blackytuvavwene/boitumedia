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

	import { projects, type Project } from '$lib/data/projects';

	const categories = [
		{ id: 'all', label: 'All Projects' },
		{ id: 'flutter', label: 'Flutter Mobile' },
		{ id: 'svelte', label: 'Svelte Web' },
		{ id: 'python', label: 'Python & SQL' }
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
					type="button"
					onclick={() => (selectedCategory = cat.id)}
					aria-pressed={selectedCategory === cat.id}
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
						type="button"
						onclick={() => openModal(project)}
						class="focus:ring-primary flex h-full w-full flex-col justify-between rounded-3xl text-left focus:ring-2 focus:outline-none"
						aria-haspopup="dialog"
						aria-expanded={$open && selectedProject?.id === project.id}
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
									loading="lazy"
									decoding="async"
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
					<div class="grid gap-4 {selectedProject.mobileImage ? 'md:grid-cols-3' : 'grid-cols-1'}">
						<img
							src={selectedProject.image}
							alt={`${selectedProject.title} Desktop View`}
							class="border-border h-64 w-full rounded-2xl border object-cover {selectedProject.mobileImage
								? 'md:col-span-2'
								: ''}"
							loading="lazy"
							decoding="async"
						/>
						{#if selectedProject.mobileImage}
							<img
								src={selectedProject.mobileImage}
								alt={`${selectedProject.title} Mobile View`}
								class="border-border h-64 w-full rounded-2xl border object-cover"
								loading="lazy"
								decoding="async"
							/>
						{/if}
					</div>
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

					<div class="border-border flex flex-wrap items-center gap-3 border-t pt-4">
						{#if selectedProject.liveLink}
							<a href={selectedProject.liveLink} target="_blank" rel="noopener noreferrer">
								<Button size="md" class="flex items-center space-x-2">
									<span>Live Site</span>
									<ExternalLink size={16} />
								</Button>
							</a>
						{/if}
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
