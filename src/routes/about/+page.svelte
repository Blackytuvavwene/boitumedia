<script lang="ts">
	import SEO from '$lib/components/global/SEO.svelte';
	import Button from '$lib/components/global/ui/Button.svelte';
	import HeroComponent from '$lib/components/global/ui/HeroComponent.svelte';
	import {
		Code,
		Smartphone,
		Database,
		Terminal,
		ShieldCheck,
		Award,
		GraduationCap,
		Cpu,
		Layers
	} from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	const skills = [
		{
			icon: Smartphone,
			title: 'Flutter & Mobile Apps',
			description:
				'Building smooth, responsive cross-platform mobile apps for Android & iOS with Flutter & Dart.'
		},
		{
			icon: Code,
			title: 'Svelte Ecosystem',
			description:
				'Crafting ultra-fast, lightweight web applications using Svelte 5, SvelteKit, TypeScript, and modern CSS.'
		},
		{
			icon: Terminal,
			title: 'Python & Automation',
			description:
				'Developing backend APIs, automation scripts, data handling, and backend logic with Python.'
		},
		{
			icon: Database,
			title: 'SQL & Database Systems',
			description:
				'Designing structured relational databases, writing optimized SQL queries, and handling schema migrations.'
		}
	];

	const certification = {
		title: 'Google IT Support Professional Certificate',
		provider: 'Coursera / Google',
		status: 'Currently Enrolled',
		details:
			'Mastering IT infrastructure, networking protocols, system administration, OS management, and cybersecurity fundamentals.'
	};

	const aboutJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Boitumelo Tubabwene',
		jobTitle: 'Self-Taught Software Developer',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'BW'
		},
		knowsAbout: ['Flutter', 'Python', 'Svelte', 'SvelteKit', 'SQL', 'IT Support'],
		url: 'https://boitumedia.xyz/about'
	};
</script>

<SEO
	title="About Boitumelo Tubabwene | Developer in Botswana"
	description="Learn about Boitumelo Tubabwene, a self-taught developer in Botswana specializing in Flutter, Python, Svelte, and SQL, currently pursuing the Google IT Support Professional Certificate."
	canonicalUrl="https://boitumedia.xyz/about"
	jsonLd={aboutJsonLd}
/>

<!-- Shared Circuit-Animated Hero -->
<HeroComponent
	badge="Self-Taught Developer • Botswana"
	title={{ heading: 'About', subheading: 'Boitumelo Tubabwene' }}
	content="Passionate about creating modern mobile and web experiences from Botswana. Self-taught software engineer specializing in Flutter, Python, the Svelte ecosystem, and SQL, while continuously advancing system support skills."
	showBack={true}
/>

<section class="bg-background py-16">
	<div class="container mx-auto max-w-5xl px-6">
		<!-- Bio Story Section -->
		<div class="mb-20 grid items-center gap-12 md:grid-cols-12">
			<div class="md:col-span-7" in:fly={{ y: 20, duration: 400 }}>
				<div
					class="text-primary mb-3 inline-flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase"
				>
					<GraduationCap size={16} />
					<span>My Tech Journey</span>
				</div>
				<h2 class="text-foreground mb-6 text-3xl font-extrabold md:text-4xl">
					Driven by Curiosity & Continuous Growth
				</h2>
				<div class="text-muted-foreground space-y-4 text-base leading-relaxed">
					<p>
						Hello! I'm <strong class="text-foreground">Boitumelo Tubabwene</strong>, a dedicated
						self-taught developer based in Botswana. My passion for technology began with a desire
						to solve real-world problems through clean code and intuitive software.
					</p>
					<p>
						Over the years, I've built hands-on expertise across mobile development with <strong
							class="text-foreground">Flutter</strong
						>, modern web development powered by the
						<strong class="text-foreground">Svelte ecosystem</strong>
						(Svelte 5 & SvelteKit), backend scripting in
						<strong class="text-foreground">Python</strong>, and data structuring using
						<strong class="text-foreground">SQL</strong>.
					</p>
					<p>
						To complement my developer background with deep technical operations knowledge, I am
						actively enrolled in the <strong class="text-primary"
							>Google IT Support Professional Certificate</strong
						>, expanding my skills in networking, system administration, and security.
					</p>
				</div>
			</div>

			<!-- Google IT Support Card -->
			<div class="md:col-span-5">
				<div
					class="from-primary/10 via-card to-secondary/10 border-primary/30 relative overflow-hidden rounded-3xl border bg-gradient-to-br p-8 shadow-lg"
				>
					<div
						class="bg-primary/10 pointer-events-none absolute -right-6 -bottom-6 h-32 w-32 rounded-full blur-2xl"
					></div>
					<div
						class="bg-primary/20 text-primary mb-6 flex h-12 w-12 items-center justify-center rounded-2xl"
					>
						<Award size={26} />
					</div>
					<span
						class="bg-primary text-primary-foreground mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold"
					>
						{certification.status}
					</span>
					<h3 class="text-foreground mb-1 text-xl font-bold">{certification.title}</h3>
					<p class="text-primary mb-4 text-xs font-semibold">{certification.provider}</p>
					<p class="text-muted-foreground text-sm leading-relaxed">
						{certification.details}
					</p>
				</div>
			</div>
		</div>

		<!-- Skills & Technologies -->
		<div class="mb-20">
			<div class="mx-auto mb-12 max-w-2xl text-center">
				<h2 class="text-foreground mb-3 text-3xl font-bold">Core Tech Stack</h2>
				<p class="text-muted-foreground">
					The primary tools and technologies I use to build robust digital solutions.
				</p>
			</div>

			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
				{#each skills as item, idx (item.title)}
					<div
						class="bg-card border-border hover:border-primary/50 flex flex-col items-start rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1"
						in:fly={{ y: 25, duration: 400, delay: idx * 80 }}
					>
						<div
							class="bg-primary/10 text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl"
						>
							<item.icon size={24} />
						</div>
						<h3 class="text-foreground mb-2 text-lg font-bold">{item.title}</h3>
						<p class="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
					</div>
				{/each}
			</div>
		</div>

		<!-- Call to Action -->
		<div
			class="bg-card border-border mx-auto max-w-4xl rounded-3xl border p-10 text-center shadow-md md:p-12"
		>
			<h2 class="text-foreground mb-4 text-2xl font-bold md:text-4xl">
				Interested in Collaborating?
			</h2>
			<p class="text-muted-foreground mx-auto mb-8 max-w-xl">
				Whether you need a Flutter mobile application, a SvelteKit web solution, or a Python script,
				let's get in touch.
			</p>
			<a href="/contact">
				<Button size="lg" class="transition-transform hover:scale-105">Contact Me</Button>
			</a>
		</div>
	</div>
</section>
