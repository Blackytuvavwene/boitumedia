<script lang="ts">
	import { page } from '$app/state';
	import SEO from '$lib/components/global/SEO.svelte';
	import Button from '$lib/components/global/ui/Button.svelte';
	import { ArrowLeft, ExternalLink, CheckCircle2, Code2 } from '@lucide/svelte';
	import { SiGithub } from '@icons-pack/svelte-simple-icons';
	import { fly } from 'svelte/transition';

	// Projects data source
	const projects = [
		{
			id: '1',
			title: 'E-commerce Platform',
			description:
				'A full-stack e-commerce solution with advanced product filtering, user authentication, and payment processing.',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
			category: 'web',
			longDescription:
				'This comprehensive e-commerce platform was built for a retail client looking to expand their online presence. The solution includes advanced product filtering, user authentication, shopping cart functionality, and secure payment processing through Stripe.',
			challenges:
				'Implementing a real-time inventory system that could handle high traffic volumes during sales events was a significant challenge. We solved this by implementing a caching layer and optimizing database queries.',
			results:
				"The platform increased the client's online sales by 150% in the first quarter after launch, with a 30% improvement in conversion rates.",
			features: [
				'Advanced product filtering and search',
				'User authentication and profiles',
				'Shopping cart and wishlist',
				'Secure payment processing',
				'Order tracking and history',
				'Admin dashboard with analytics'
			],
			technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'AWS S3', 'Redis'],
			liveLink: 'https://example.com',
			githubLink: 'https://github.com'
		},
		{
			id: '2',
			title: 'Health & Fitness App',
			description:
				'A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['React Native', 'Firebase', 'Machine Learning'],
			category: 'mobile',
			longDescription:
				'This health and fitness mobile application helps users track their workouts, nutrition, and health metrics. It provides personalized recommendations based on user goals and progress.',
			challenges:
				'Developing an algorithm that could provide personalized workout and nutrition recommendations based on user data was complex.',
			results:
				'The app has maintained a 4.8/5 star rating on app stores with over 100,000 downloads.',
			features: [
				'Personalized workout plans',
				'Nutrition tracking and meal suggestions',
				'Progress tracking with charts and photos',
				'Social sharing and community features'
			],
			technologies: ['React Native', 'Firebase', 'TensorFlow Lite', 'Apple HealthKit'],
			liveLink: 'https://example.com',
			githubLink: 'https://github.com'
		},
		{
			id: '3',
			title: 'Real Estate Portal',
			description:
				'A web application for property listings with virtual tours, mortgage calculator, and agent communication tools.',
			image: '/placeholder.svg?height=400&width=600',
			tags: ['Next.js', 'PostgreSQL', 'Google Maps API'],
			category: 'web',
			longDescription:
				'This real estate portal allows users to browse property listings, take virtual tours, calculate mortgage payments, and communicate with agents.',
			challenges:
				'Implementing the virtual tour feature with 360-degree views while maintaining fast load times required significant optimization.',
			results:
				'The portal facilitated over $15 million in property transactions within its first year.',
			features: [
				'Property search with advanced filters',
				'Virtual tours with 360° views',
				'Mortgage calculator',
				'Agent-client messaging system'
			],
			technologies: ['Next.js', 'PostgreSQL', 'Google Maps API', 'Three.js', 'AWS'],
			liveLink: 'https://example.com',
			githubLink: 'https://github.com'
		}
	];

	const projectId = $derived(page.params.id);
	const project = $derived(projects.find((p) => p.id === projectId) || projects[0]);

	const projectJsonLd = $derived({
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: project.title,
		description: project.description,
		applicationCategory: project.category === 'mobile' ? 'MobileApplication' : 'WebApplication',
		operatingSystem: 'All',
		url: `https://boitumedia.xyz/projects/${project.id}`
	});
</script>

<SEO
	title={`${project.title} | Case Study by Boitumedia`}
	description={project.description}
	canonicalUrl={`https://boitumedia.xyz/projects/${project.id}`}
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

			<!-- Project Hero Image -->
			<div class="border-border bg-card relative overflow-hidden rounded-2xl border shadow-lg">
				<img
					src={project.image}
					alt={project.title}
					class="h-80 w-full object-cover md:h-[420px]"
				/>
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
