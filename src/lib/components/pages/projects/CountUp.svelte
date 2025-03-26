<script>
	import { onMount } from 'svelte';

    // display value state signal
    let displayValue = $state(0)

    // props
    let value = $props()

    onMount(() => {
        let start = 0;
        const end = value;
        const duration = 2000;
        const startTime = Date.now();
        
        const timer = setInterval(() => {
          const now = Date.now();
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          displayValue = Math.floor(progress * end);
          
          if (progress === 1) {
            clearInterval(timer);
          }
        }, 16);
        
        return () => clearInterval(timer);
      });
</script>

<span class="text-4xl font-bold text-white">
    {displayValue}
</span>