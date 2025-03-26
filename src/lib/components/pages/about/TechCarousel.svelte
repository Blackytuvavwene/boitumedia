<script lang="ts">
    import { onMount } from 'svelte';
    
    const technologies = [
      { name: "React", icon: "/placeholder.svg?height=80&width=80" },
      { name: "Next.js", icon: "/placeholder.svg?height=80&width=80" },
      { name: "TypeScript", icon: "/placeholder.svg?height=80&width=80" },
      { name: "Node.js", icon: "/placeholder.svg?height=80&width=80" },
      { name: "Python", icon: "/placeholder.svg?height=80&width=80" },
      { name: "Django", icon: "/placeholder.svg?height=80&width=80" },
      { name: "MongoDB", icon: "/placeholder.svg?height=80&width=80" },
      { name: "PostgreSQL", icon: "/placeholder.svg?height=80&width=80" },
      { name: "AWS", icon: "/placeholder.svg?height=80&width=80" },
      { name: "Docker", icon: "/placeholder.svg?height=80&width=80" },
      { name: "Kubernetes", icon: "/placeholder.svg?height=80&width=80" },
      { name: "GraphQL", icon: "/placeholder.svg?height=80&width=80" },
    ];
    
    let scrollerRef: HTMLDivElement;
    let scrollerInnerRef: HTMLDivElement;
    
    onMount(() => {
      if (!scrollerRef || !scrollerInnerRef) return;
      
      // Clone the scroller inner element
      const scrollerContent = Array.from(scrollerInnerRef.children);
      
      // Duplicate the items
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerInnerRef) {
          scrollerInnerRef.appendChild(duplicatedItem);
        }
      });
      
      // Animation function
      const animate = () => {
        if (scrollerRef) {
          if (scrollerRef.scrollLeft >= scrollerInnerRef.clientWidth / 2) {
            scrollerRef.scrollLeft = 0;
          } else {
            scrollerRef.scrollLeft += 1;
          }
        }
        requestAnimationFrame(animate);
      };
      
      // Start the animation
      const animationId = requestAnimationFrame(animate);
      
      // Cleanup
      return () => {
        cancelAnimationFrame(animationId);
      };
    });
</script>
  
  <section class="py-20 bg-gray-800">
    <div class="container mx-auto px-4 mb-12">
      <h2 class="text-3xl font-bold text-white text-center mb-12">Technologies We Master</h2>
    </div>
  
    <div
      bind:this={scrollerRef}
      class="scroller relative max-w-full overflow-hidden"
      style="mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%); -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%);"
    >
      <div bind:this={scrollerInnerRef} class="scroller-inner flex space-x-12 py-4 w-max">
        {#each technologies as tech}
          <div class="flex flex-col items-center">
            <div class="w-24 h-24 bg-gray-700 rounded-xl flex items-center justify-center mb-3 p-4">
              <img
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={80}
                height={80}
                class="max-w-full max-h-full"
              />
            </div>
            <span class="text-white font-medium">{tech.name}</span>
          </div>
        {/each}
      </div>
    </div>
</section>