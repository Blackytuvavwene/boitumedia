<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';


    // TODO:add my educational background from server
    const timelineItems = [
      {
        icon: "GraduationCap",
        title: "Computer Science Foundations",
        date: "2015 - 2018",
        side: "left",
        content: "Our founding team members hold degrees in Computer Science from top universities, with specializations in software engineering, artificial intelligence, and human-computer interaction."
      },
      {
        icon: "Award",
        title: "Industry Certifications",
        date: "2018 - 2020",
        side: "right",
        content: "Our developers maintain certifications in AWS, Google Cloud, Microsoft Azure, and other leading platforms to ensure we're always implementing best practices."
      },
      {
        icon: "BookOpen",
        title: "Continuous Learning",
        date: "2020 - Present",
        side: "left",
        content: "We invest heavily in ongoing education, with team members regularly attending conferences, workshops, and training sessions to stay at the cutting edge of technology."
      }
    ];
    
    let visibleItems = Array(timelineItems.length).fill(false);
    
    function handleInView(index: number, inView: boolean) {
      if (inView) {
        visibleItems[index] = true;
      }
    }
    
    function getIcon(iconName: string) {
      switch (iconName) {
        case 'GraduationCap':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>';
        case 'Award':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>';
        case 'BookOpen':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>';
        default:
          return '';
      }
    }
</script>
  
<section class="py-20 bg-primary-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-gray-300 text-center mb-12">Educational Background</h2>
  
      <div class="max-w-4xl mx-auto">
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-600"></div>
  
          <!-- Timeline items -->
          <div class="space-y-12">
            {#each timelineItems as item, index}
              <div 
                use:inview={{
                  rootMargin: '0px 0px -100px 0px',
                  unobserveOnEnter: true
                }}
                on:inview_change={({ detail }) => handleInView(index, detail.inView)}
                class="relative"
              >
                {#if visibleItems[index]}
                  <div 
                    in:fly={{ 
                      x: item.side === 'left' ? -50 : 50, 
                      duration: 500 
                    }}
                    class="relative"
                  >
                    <!-- Timeline node -->
                    <div class="absolute left-0 md:left-1/2 transform -translate-y-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-primary-600 border-4 border-primary-400 flex items-center justify-center z-10">
                      {@html getIcon(item.icon)}
                    </div>
  
                    <!-- Content -->
                    <div class={`md:w-1/2 ${item.side === "left" ? "md:pr-12 ml-12 md:ml-0" : "md:pl-12 ml-12 md:ml-auto"}`}>
                      <div class="bg-primary-800 border-gray-900 rounded-lg overflow-hidden">
                        <div class="p-4 border-b border-gray-600">
                          <div class="flex justify-between items-center">
                            <h4 class="text-white font-semibold">{item.title}</h4>
                            <span class="text-primary-400 text-sm font-medium">{item.date}</span>
                          </div>
                        </div>
                        <div class="p-4 text-base-600">
                          {item.content}
                        </div>
                      </div>
                    </div>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
</section>
  
  
