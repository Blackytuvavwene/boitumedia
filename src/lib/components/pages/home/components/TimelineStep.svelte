<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { Snippet } from 'svelte';
	import { useAnimation, M, Motion } from 'svelte-motion';

    // animation controls
    let controls = useAnimation()

    // props
    let { step, index, children} : {
        step : {
            title : string,
            description: string
        },
        index : number,
        children : Snippet
    } = $props()

    // check is left
    const isLeft = index % 2 === 0

    // use inview
    let isInView = $state(false)

    // function to change inview
    $effect(()=>{
        if(isInView){
            controls.start('visible')
        }
    })
    
</script>


<div
    use:inview
    oninview_change={({detail})=>{
        isInView = detail.inView
    }}
>
    <Motion 
        initial={{ scale: 0 }}
        animate={controls}
        variants={{
        visible: { scale: 1, transition: { duration: 0.5 } },
        }}
        let:motion>
        <div 
            class="absolute w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10 {isLeft ? 'left-1/2 -translate-x-14' : 'right-1/2 translate-x-1/2'}"
            use:motion
        >
        </div>
    </Motion>
    <Motion
        let:motion
        animate={controls}
        initial="hidden"
        variants={{
            visible: {
                x: 0,
                opacity: 1,
                transition: {
                    duration: 0.5
                }
            }
        }}
    >
        <div
            use:motion
            class="w-5/12 {isLeft ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left"}"
        >
            {@render children()}
        </div>
    </Motion>
</div>