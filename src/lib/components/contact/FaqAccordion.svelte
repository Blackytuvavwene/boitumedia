<script lang="ts">
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	const faqs = [
		{
			id: 'item-1',
			question: 'What services does Boitumedia specialize in?',
			answer:
				'We specialize in full-stack web application development, mobile application design & engineering (iOS and Android), backend systems, cloud deployment, and custom AI integrations.'
		},
		{
			id: 'item-2',
			question: 'How long does a typical project take?',
			answer:
				'Project timelines vary depending on scope. Standard web applications take between 3 to 6 weeks, while large-scale enterprise solutions or custom mobile apps range from 8 to 14 weeks.'
		},
		{
			id: 'item-3',
			question: 'What is your technology stack?',
			answer:
				'We leverage modern web standards including SvelteKit, TypeScript, Tailwind CSS, Node.js, Python, PostgreSQL, and cloud providers like Vercel, AWS, and GCP.'
		},
		{
			id: 'item-4',
			question: 'Do you offer ongoing post-launch maintenance and support?',
			answer:
				'Yes! We offer comprehensive support, automated monitoring, server maintenance, performance audits, and continuous feature updates post-launch.'
		}
	];

	const {
		elements: { root },
		elements: { content, item, trigger },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1',
		multiple: false
	});
</script>

<div use:melt={$root} class="mx-auto w-full max-w-3xl space-y-4">
	{#each faqs as faq (faq.id)}
		<div
			use:melt={$item(faq.id)}
			class="border-border bg-card overflow-hidden rounded-xl border shadow-sm transition-colors"
		>
			<h3 class="flex">
				<button
					use:melt={$trigger(faq.id)}
					class="text-foreground hover:bg-muted/50 focus-visible:ring-primary flex w-full items-center justify-between p-5 text-left text-lg font-bold transition-colors focus-visible:ring-2 focus-visible:outline-none"
				>
					<span>{faq.question}</span>
					<ChevronDown
						class="text-primary h-5 w-5 transition-transform duration-300 {$isSelected(faq.id)
							? 'rotate-180'
							: ''}"
					/>
				</button>
			</h3>
			{#if $isSelected(faq.id)}
				<div
					use:melt={$content(faq.id)}
					transition:slide={{ duration: 250 }}
					class="text-muted-foreground border-border/40 border-t p-5 pt-0 text-sm leading-relaxed"
				>
					{faq.answer}
				</div>
			{/if}
		</div>
	{/each}
</div>
