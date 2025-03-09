<script lang="ts">
	import type { Snippet } from "svelte";
	import { inview } from "svelte-inview";
    import type { Options, ObserverEventDetails } from 'svelte-inview';
	import type { TransitionConfig } from "svelte/transition";

  

    // inview status
    let isInView = $state(false)

    // inview options
    const options: Options = {
        rootMargin: '-50px',
        unobserveOnEnter: true,
    }

    type AnimateFunction = (node: HTMLElement, params: any) => TransitionConfig;

    interface AnimateObject {
        (node: HTMLElement, params: any): TransitionConfig;
        duration?: number;
        delay?: number;
        easing?: (t: number) => number;
    }

    type Animate = AnimateFunction | AnimateObject;

    // props
    let { 
        children, 
        animate, 
        threshold = 0.5,
    } : 
        { 
            children : Snippet, 
            animate : Animate,
            threshold? : number,
        } = $props()


    // function to handle inview changes
    const handleInView = ({detail} : CustomEvent<ObserverEventDetails>) => {
        isInView = detail.inView
    }

</script>

<div
    use:inview={options}
    oninview_change={handleInView}
 >
    {#if isInView}
    <div transition:animate={animate}>
        {@render children()}
    </div>
    {/if}
</div>