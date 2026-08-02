<script lang="ts">
	import { fly } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	const steps = [
		{
			title: 'Discovery',
			description: 'We analyze your business goals, target audience, and functional requirements.'
		},
		{
			title: 'Architecture & Planning',
			description:
				'We design a clean system architecture, project roadmap, and responsive UX frames.'
		},
		{
			title: 'Agile Development',
			description:
				'Our engineering team crafts modular, type-safe code backed by modern web standards.'
		},
		{
			title: 'Testing & QA',
			description:
				'Comprehensive performance audits, security validation, and cross-device testing.'
		},
		{
			title: 'Deployment & Scaling',
			description: 'Seamless cloud launch with continuous monitoring, maintenance, and analytics.'
		}
	];

	let visibleSteps = $state(Array(steps.length).fill(false));

	function handleInView(index: number, inView: boolean) {
		if (inView) {
			visibleSteps[index] = true;
		}
	}
</script>

<section id="process" class="bg-muted/20 border-border/50 border-y py-20">
	<div class="container mx-auto px-6">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<span
				class="bg-primary/10 text-primary border-primary/20 mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold"
			>
				How We Work
			</span>
			<h2 class="text-foreground text-3xl font-extrabold tracking-tight md:text-5xl">
				Our Development Process
			</h2>
			<p class="text-muted-foreground mt-4">
				From concept to deployment, our structured workflow ensures quality, speed, and
				transparency.
			</p>
		</div>

		<div class="relative mx-auto max-w-4xl">
			<!-- Vertical Line -->
			<div
				class="from-primary via-secondary to-primary absolute top-0 bottom-0 left-4 hidden w-0.5 -translate-x-1/2 bg-gradient-to-b sm:block md:left-1/2"
			></div>

			<div class="space-y-12">
				{#each steps as step, index (step.title)}
					{@const isEven = index % 2 === 0}
					<div
						use:inview={{ rootMargin: '0px 0px -80px 0px', unobserveOnEnter: true }}
						oninview_change={({ detail }) => handleInView(index, detail.inView)}
						class="relative flex flex-col items-center sm:flex-row"
					>
						<!-- Step Number Badge -->
						<div
							class="bg-primary text-primary-foreground border-background absolute left-4 z-10 flex hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 font-extrabold shadow-md sm:flex md:left-1/2"
						>
							{index + 1}
						</div>

						<!-- Step Content Card -->
						{#if visibleSteps[index]}
							<div
								in:fly={{ x: isEven ? -40 : 40, duration: 400 }}
								class="w-full sm:w-[calc(50%-2.5rem)] {isEven
									? 'sm:mr-auto sm:text-right'
									: 'sm:ml-auto sm:text-left'} bg-card border-border hover:border-primary/50 rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1"
							>
								<div class="text-primary mb-1 text-xs font-bold tracking-wider uppercase">
									Step {index + 1}
								</div>
								<h3 class="text-foreground mb-2 text-xl font-bold">{step.title}</h3>
								<p class="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
							</div>
						{:else}
							<div class="invisible h-28 w-full"></div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
