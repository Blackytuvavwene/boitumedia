<script lang="ts">
    import type { Snippet } from "svelte";
    import { inview } from "svelte-inview";
    import type { Options, ObserverEventDetails } from 'svelte-inview';
    import type { TransitionConfig } from "svelte/transition";
    import { cubicOut, cubicInOut, quintOut, quintIn } from 'svelte/easing';

    // Enhanced easing options
    const easingOptions = {
        cubicOut,
        cubicInOut,
        quintOut,
        quintIn
    };

    // Animation configuration type
    interface AnimationConfig {
        duration?: number;
        delay?: number;
        easing?: keyof typeof easingOptions | ((t: number) => number);
        [key: string]: any;
    }

    // props
    let { 
        children, 
        animate, 
        threshold = 0.5,
        animationConfig = {}
    } : { 
        children: Snippet, 
        animate: (node: HTMLElement, params: any) => TransitionConfig, 
        threshold?: number,
        animationConfig?: AnimationConfig
    } = $props()

    // Inview options
    const options: Options = {
        rootMargin: '-50px',
        unobserveOnEnter: true,
    }

    // State to track view and animation
    let isInView = $state(false);
    let shouldAnimate = $state(false);

    // Handle inview changes
    const handleInViewChange = ({detail}: CustomEvent<ObserverEventDetails>) => {
        isInView = detail.inView;
        
        // Only trigger animation when entering view
        if (detail.inView) {
            // Add a small delay to ensure scroll has occurred
            setTimeout(() => {
                shouldAnimate = true;
            }, 50);
        }
    }
</script>

<div
    use:inview={options}
    oninview_change={handleInViewChange}
 >
    {#if isInView && shouldAnimate}
        <div transition:animate={animationConfig}>
            {@render children()}
        </div>
    {/if}
</div>