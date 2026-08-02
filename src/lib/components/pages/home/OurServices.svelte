<script lang="ts">
	import { Smartphone, Code, Terminal, Database } from '@lucide/svelte';
	import { inview } from 'svelte-inview';
	import { HomePageStrings } from '$lib/utils/strings';
	import Button from '$lib/components/global/ui/Button.svelte';

	const services = [
		{
			icon: Smartphone,
			title: HomePageStrings.services.FLUTTER_DEV.title,
			description: HomePageStrings.services.FLUTTER_DEV.description,
			ariaLabel: HomePageStrings.services.FLUTTER_DEV.ariaLabel
		},
		{
			icon: Code,
			title: HomePageStrings.services.SVELTE_DEV.title,
			description: HomePageStrings.services.SVELTE_DEV.description,
			ariaLabel: HomePageStrings.services.SVELTE_DEV.ariaLabel
		},
		{
			icon: Terminal,
			title: HomePageStrings.services.PYTHON_BACKEND.title,
			description: HomePageStrings.services.PYTHON_BACKEND.description,
			ariaLabel: HomePageStrings.services.PYTHON_BACKEND.ariaLabel
		},
		{
			icon: Database,
			title: HomePageStrings.services.DATABASE_SQL.title,
			description: HomePageStrings.services.DATABASE_SQL.description,
			ariaLabel: HomePageStrings.services.DATABASE_SQL.ariaLabel
		}
	];

	let isHeaderInView = $state(false);
	let isCardsInView = $state(false);
</script>

<section
	class="bg-background border-border/50 w-full border-b py-20"
	aria-labelledby="services-heading"
>
	<div class="container mx-auto px-6">
		<!-- Section Header with Smooth CSS Scroll Slide-In -->
		<div
			use:inview={{ rootMargin: '0px 0px -50px 0px', unobserveOnEnter: true }}
			oninview_change={({ detail }) => {
				if (detail.inView) isHeaderInView = true;
			}}
			class="mx-auto mb-16 max-w-3xl transform text-center transition-all duration-700 ease-out {isHeaderInView
				? 'translate-y-0 opacity-100'
				: 'translate-y-10 opacity-0'}"
		>
			<span
				class="bg-primary/10 text-primary border-primary/20 mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold shadow-sm"
			>
				Capabilities & Stack
			</span>
			<h2
				id="services-heading"
				class="text-foreground text-3xl font-extrabold tracking-tight md:text-5xl"
			>
				{HomePageStrings.SERVICES_TITLE}
			</h2>
			<p class="text-muted-foreground mt-4 text-base leading-relaxed">
				Specialized development skills and solutions crafted for performance, accessibility, and
				clean architecture.
			</p>
		</div>

		<!-- Services Grid with Staggered Scroll Slide-In -->
		<div
			use:inview={{ rootMargin: '0px 0px -60px 0px', unobserveOnEnter: true }}
			oninview_change={({ detail }) => {
				if (detail.inView) isCardsInView = true;
			}}
		>
			<ul class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2" aria-label="Core Stack">
				{#each services as service, index (service.title)}
					<li
						class="group bg-card border-border hover:border-primary/50 relative flex transform flex-col gap-5 rounded-2xl border p-8 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-2xl {isCardsInView
							? 'translate-y-0 opacity-100'
							: 'translate-y-12 opacity-0'}"
						style="transition-delay: {index * 130}ms;"
						aria-label={service.ariaLabel}
					>
						<div
							class="from-primary pointer-events-none absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r via-cyan-400 to-indigo-500 opacity-0 transition-opacity group-hover:opacity-100"
						></div>
						<div
							class="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm transition-colors"
						>
							<service.icon size={26} />
						</div>

						<div class="space-y-2">
							<h3 class="text-foreground text-2xl font-bold" id={`service-${index}`}>
								{service.title}
							</h3>
							<p
								class="text-muted-foreground text-sm leading-relaxed"
								aria-labelledby={`service-${index}`}
							>
								{service.description}
							</p>
						</div>
					</li>
				{/each}
			</ul>
		</div>

		<div
			class="mt-12 transform text-center transition-all delay-500 duration-700 ease-out {isCardsInView
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			<a href="/projects">
				<Button size="lg" class="shadow-md transition-transform hover:scale-105">
					Explore All Projects
				</Button>
			</a>
		</div>
	</div>
</section>
