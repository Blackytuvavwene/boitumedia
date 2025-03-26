<script lang="ts">
	import { Motion } from "svelte-motion";


</script>

<svg
    class="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
    viewBox="0 0 2 100"
    preserveAspectRatio="none"
>
    <Motion
        let:motion={m}
        
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2 }}
        isSVG={true}
     >
     <path
        stroke="#3B82F6"

        use:m
        d="M1 0V100"
        stroke-width="2"
        stroke-dasharray="4 4"
     />
    </Motion>
</svg>
