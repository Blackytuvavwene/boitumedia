<script lang="ts">
	import { page } from '$app/state';
	import SEO from '$lib/components/global/SEO.svelte';
	import Button from '$lib/components/global/ui/Button.svelte';
	import { SITE_URL } from '$lib/constants/site';
	import { ArrowLeft, ExternalLink, CheckCircle2, Code2 } from '@lucide/svelte';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { fly } from 'svelte/transition';

	import { projects } from '$lib/data/projects';

	const projectId = $derived(page.params.id);
	const project = $derived(projects.find((p) => p.id === projectId) || projects[0]);

	const projectJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: project.title,
		description: project.description,
		applicationCategory: project.category === 'mobile' ? 'MobileApplication' : 'WebApplication',
		operatingSystem: 'All',
		url: `${SITE_URL}/projects/${project.id}`
	});
</script>

<SEO
	title={`${project.title} | Case Study by Boitumedia`}
	description={project.description}
	canonicalUrl={`${SITE_URL}/projects/${project.id}`}
	jsonLd={projectJsonLd}
/>

<section class="bg-background py-16 md:py-24">
	<div class="container mx-auto max-w-5xl px-6">
		<a
			href="/projects"
			class="text-primary hover:text-primary/80 mb-8 inline-flex items-center space-x-2 text-sm font-semibold transition-colors"
		>
			<ArrowLeft size={16} />
			<span>Back to all projects</span>
		</a>

		<div class="space-y-8" in:fly={{ y: 20, duration: 400 }}>
			<div>
				<div class="mb-4 flex flex-wrap gap-2">
					{#each project.tags as tag (tag)}
						<span
							class="bg-primary/10 text-primary border-primary/20 rounded-full border px-3 py-1 text-xs font-semibold"
						>
							{tag}
						</span>
					{/each}
				</div>
				<h1 class="text-foreground mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
					{project.title}
				</h1>
				<p class="text-muted-foreground text-xl leading-relaxed">
					{project.description}
				</p>
			</div>

			<!-- Project Hero Image(s) -->
			<div class="grid gap-4 {project.mobileImage ? 'md:grid-cols-3' : 'grid-cols-1'}">
				<div class="border-border bg-card relative overflow-hidden rounded-2xl border shadow-lg {project.mobileImage ? 'md:col-span-2' : ''}">
					<img
						src={project.image}
						alt={`${project.title} Desktop View`}
						loading="eager"
						decoding="async"
						fetchpriority="high"
						class="h-80 w-full object-cover md:h-[420px]"
					/>
				</div>
				{#if project.mobileImage}
					<div class="border-border bg-card relative overflow-hidden rounded-2xl border shadow-lg">
						<img
							src={project.mobileImage}
							alt={`${project.title} Mobile View`}
							loading="lazy"
							decoding="async"
							class="h-80 w-full object-cover md:h-[420px]"
						/>
					</div>
				{/if}
			</div>

			<!-- Project Details Grid -->
			<div class="grid gap-12 pt-8 lg:grid-cols-12">
				<div class="space-y-8 lg:col-span-8">
					<div class="space-y-4">
						<h2 class="text-foreground text-2xl font-bold">Project Overview</h2>
						<p class="text-muted-foreground text-base leading-relaxed">{project.longDescription}</p>
					</div>

					<div class="space-y-4">
						<h2 class="text-foreground text-2xl font-bold">Key Features</h2>
						<ul class="grid gap-3 md:grid-cols-2">
							{#each project.features as feature (feature)}
								<li class="bg-card border-border flex items-start space-x-3 rounded-xl border p-3">
									<CheckCircle2 size={18} class="text-primary mt-0.5 shrink-0" />
									<span class="text-foreground text-sm font-medium">{feature}</span>
								</li>
							{/each}
						</ul>
					</div>

					<div class="space-y-4">
						<h2 class="text-foreground text-2xl font-bold">Challenges & Solutions</h2>
						<p class="text-muted-foreground text-base leading-relaxed">{project.challenges}</p>
					</div>

					<div class="bg-primary/5 border-primary/20 space-y-2 rounded-2xl border p-6">
						<h3 class="text-primary text-lg font-bold">Results & Impact</h3>
						<p class="text-foreground text-sm leading-relaxed">{project.results}</p>
					</div>
				</div>

				<div class="space-y-6 lg:col-span-4">
					<div class="bg-card border-border space-y-6 rounded-2xl border p-6 shadow-sm">
						<h3 class="text-foreground text-lg font-bold">Technologies Used</h3>
						<div class="flex flex-wrap gap-2">
							{#each project.technologies as tech (tech)}
								<span
									class="bg-muted text-foreground border-border rounded-lg border px-3 py-1.5 text-xs font-semibold"
								>
									{tech}
								</span>
							{/each}
						</div>

						<div class="border-border space-y-3 border-t pt-4">
							<a href={project.liveLink} target="_blank" rel="noopener noreferrer" class="w-full">
								<Button size="lg" class="flex w-full items-center justify-center space-x-2">
									<span>View Live Project</span>
									<ExternalLink size={16} />
								</Button>
							</a>
							<a href={project.githubLink} target="_blank" rel="noopener noreferrer" class="w-full">
								<Button
									variant="secondary"
									size="lg"
									class="flex w-full items-center justify-center space-x-2"
								>
									<span>Source Code</span>
									<SiGithub size={16} />
								</Button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
