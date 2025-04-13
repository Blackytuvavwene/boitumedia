<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
	import CountUp from './CountUp.svelte';
    
    const stats = [
      {
        icon: "Code",
        value: 150,
        label: "Projects Completed",
        suffix: "+",
      },
      {
        icon: "Users",
        value: 98,
        label: "Satisfied Clients",
        suffix: "%",
      },
      {
        icon: "Award",
        value: 25,
        label: "Industry Awards",
        suffix: "",
      },
      {
        icon: "Clock",
        value: 12,
        label: "Years of Experience",
        suffix: "+",
      }
    ];
    
    function getIcon(iconName) {
      switch (iconName) {
        case 'Code':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
        case 'Users':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
        case 'Award':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>';
        case 'Clock':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
        default:
          return '';
      }
    }
    
    let inViewStats = Array(stats.length).fill(false);
    
    function handleInView(index, inView) {
      inViewStats[index] = inView;
    }
  </script>
  
  <section class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-white text-center mb-16">Our Track Record</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {#each stats as stat, index}
          <div 
            use:inview={{
              rootMargin: '0px 0px -100px 0px',
              unobserveOnEnter: true
            }}
            on:inview_change={({ detail }) => handleInView(index, detail.inView)}
          >
            {#if inViewStats[index]}
              <div
                in:fly={{ y: 20, duration: 500, delay: index * 100 }}
                class="bg-gray-700 border-gray-600 rounded-lg overflow-hidden"
              >
                <div class="p-6 text-center">
                  <div class="flex justify-center mb-4">
                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      {@html getIcon(stat.icon)}
                    </div>
                  </div>
                  <div class="flex items-center justify-center">
                    <CountUp value={stat.value} />
                    <span class="text-4xl font-bold text-white">{stat.suffix}</span>
                  </div>
                  <p class="text-gray-300 text-lg">{stat.label}</p>
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
</section>
  
  
