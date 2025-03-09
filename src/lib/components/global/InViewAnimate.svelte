<script lang="ts">
    import { onMount, type Snippet } from "svelte";
    import type { TransitionConfig } from "svelte/transition";


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
            threshold : number,
        } = $props()
 

    // state to track visibility
    let visible = $state(false)

    // check if element has animated
    let hasAnimated= $state(false)

    // ref to the element
    let ref: HTMLElement  

    // update visibility when element is intersecting viewport when mounted
    onMount(()=>{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // check if element is intersecting viewport
                if (entry.isIntersecting && entry.boundingClientRect.y > 20) {
                    // if not already visible, set it to true
                    visible = true
                }
            })
        }, { threshold: threshold })

        // observe the ref
        observer.observe(ref)

        // cleanup on unmount
        return () => {
            observer.unobserve(ref)
        }
    })

</script>


<div bind:this={ref}>
    {#if visible}
        <div transition:animate={animate}>
            {@render children()}
        </div>
    {/if}
</div>
