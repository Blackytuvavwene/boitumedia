<script lang="ts">
    // import cva
    import { cva, type VariantProps } from 'class-variance-authority';
	import type { Snippet } from 'svelte';
    import type {HTMLButtonAttributes} from 'svelte/elements'

    const buttonVariants = cva(
            "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            techGlow:
            "bg-blue-600 text-white border border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] hover:bg-blue-700 transition-all duration-300 ease-in-out",
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10",
        },
        },
        defaultVariants: {
        variant: "default",
        size: "default",
        },
    },
    )

    let {slot, buttonProps} :{slot : Snippet, buttonProps : HTMLButtonAttributes}  = $props()

</script>

<button {...buttonProps}>
    <slot></slot>
</button>