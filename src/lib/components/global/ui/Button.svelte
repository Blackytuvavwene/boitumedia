<script lang="ts">
	import { cn } from '$lib/utils/utils';
	import { cva, type VariantProps } from 'class-variance-authority';
	import type { Snippet } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';

	const buttonVariants = cva(
		'inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
					destructive:
						'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
					outline:
						'border border-border bg-card text-foreground hover:bg-muted hover:border-primary/50',
					secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
					ghost: 'hover:bg-muted text-foreground',
					link: 'text-primary underline-offset-4 hover:underline'
				},
				size: {
					default: 'h-10 px-4 py-2',
					sm: 'h-9 px-3 text-xs',
					md: 'h-10 px-4 py-2 text-sm',
					lg: 'h-12 px-6 text-base font-bold',
					icon: 'h-10 w-10 p-0'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	type ButtonVariants = VariantProps<typeof buttonVariants>;

	interface Props extends HTMLButtonAttributes {
		children?: Snippet;
		class?: string;
		variant?: ButtonVariants['variant'];
		size?: ButtonVariants['size'];
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
	}

	let {
		children,
		class: className,
		variant,
		size,
		type = 'button',
		disabled = false,
		onclick,
		...restProps
	}: Props = $props();

	let mergedClass = $derived(cn(buttonVariants({ variant, size, class: className })));
</script>

<button {type} {disabled} {onclick} class={mergedClass} {...restProps}>
	{#if children}
		{@render children()}
	{/if}
</button>
