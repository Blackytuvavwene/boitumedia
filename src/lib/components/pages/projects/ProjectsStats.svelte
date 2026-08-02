<script lang="ts">
	import { inview } from 'svelte-inview';
	import CountUp from './CountUp.svelte';
	import { FolderCheck, Users, Globe, Award } from '@lucide/svelte';

	const stats = [
		{
			id: 1,
			value: 50,
			suffix: '+',
			label: 'Completed Projects',
			description: 'Delivered across web, mobile, and enterprise domains.',
			icon: FolderCheck
		},
		{
			id: 2,
			value: 30,
			suffix: '+',
			label: 'Happy Clients',
			description: 'From ambitious startups to global brands.',
			icon: Users
		},
		{
			id: 3,
			value: 15,
			suffix: '+',
			label: 'Countries Reached',
			description: 'Global solutions built with modern standards.',
			icon: Globe
		},
		{
			id: 4,
			value: 99,
			suffix: '%',
			label: 'Client Satisfaction',
			description: 'Commitment to performance, security, and design.',
			icon: Award
		}
	];

	let inViewStats = $state(Array(stats.length).fill(false));

	function handleInView(index: number, inView: boolean) {
		if (inView) {
			inViewStats[index] = true;
		}
	}
</script>

<section class="bg-muted/20 border-border/50 border-t py-20">
	<div class="container mx-auto px-6">
		<div class="mx-auto mb-16 max-w-3xl text-center">
			<span
				class="bg-primary/10 text-primary border-primary/20 mb-4 inline-block rounded-full border px-3 py-1 text-xs font-semibold"
			>
				Track Record
			</span>
			<h2 class="text-foreground text-3xl font-extrabold tracking-tight md:text-5xl">
				Impact in Numbers
			</h2>
			<p class="text-muted-foreground mt-4">
				Measurable engineering results driving growth for our clients worldwide.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			{#each stats as stat, index (stat.id)}
				<div
					use:inview={{ rootMargin: '0px 0px -50px 0px', unobserveOnEnter: true }}
					oninview_change={({ detail }) => handleInView(index, detail.inView)}
					class="bg-card border-border hover:border-primary/50 flex flex-col items-center space-y-4 rounded-2xl border p-8 text-center shadow-sm transition-all hover:-translate-y-1"
				>
					<div
						class="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-2xl"
					>
						<stat.icon size={28} />
					</div>

					<div class="text-foreground text-4xl font-black tracking-tight md:text-5xl">
						{#if inViewStats[index]}
							<CountUp end={stat.value} duration={2000} />
							<span>{stat.suffix}</span>
						{:else}
							<span>0{stat.suffix}</span>
						{/if}
					</div>

					<div>
						<h3 class="text-foreground text-lg font-bold">{stat.label}</h3>
						<p class="text-muted-foreground mt-1 text-xs leading-relaxed">{stat.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
