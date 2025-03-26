<script lang="ts">
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
  
    const steps = [
      {
        icon: "FileSearch",
        title: "Discovery & Planning",
        description: "We begin by understanding your business goals, target audience, and project requirements through in-depth consultations and research."
      },
      {
        icon: "FileText",
        title: "Strategy & Design",
        description: "Our team creates a comprehensive strategy and design plan, including wireframes, prototypes, and technical specifications."
      },
      {
        icon: "FileCode",
        title: "Development",
        description: "We bring your project to life using the latest technologies and best practices, with regular updates and milestone reviews."
      },
      {
        icon: "FileCheck",
        title: "Testing & QA",
        description: "Rigorous testing across devices and platforms ensures your product is bug-free, secure, and performs optimally."
      },
      {
        icon: "FileSpreadsheet",
        title: "Launch & Support",
        description: "We handle the deployment process and provide ongoing support and maintenance to ensure long-term success."
      }
    ];
  
    let visibleSteps = Array(steps.length).fill(false);
  
    function handleInView(index, inView) {
      if (inView) {
        visibleSteps[index] = true;
      }
    }
  
    function getIcon(iconName) {
      switch (iconName) {
        case 'FileSearch':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="11.5" cy="14.5" r="2.5"/><path d="M13.25 16.25 15 18"/></svg>';
        case 'FileText':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>';
        case 'FileCode':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m10 13-2 2 2 2"/><path d="m14 17 2-2-2-2"/></svg>';
        case 'FileCheck':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="m9 11 3 3 7-7"/></svg>';
        case 'FileSpreadsheet':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>';
        default:
          return '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>';
      }
    }
  </script>
  
  <section class="py-20 bg-gray-800">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-white text-center mb-16">Our Service Process</h2>
      
      <div class="max-w-5xl mx-auto">
        <div class="relative">
          <!-- Process steps -->
          <div class="space-y-16">
            {#each steps as step, index}
              <div 
                use:inview={{
                  rootMargin: '0px 0px -100px 0px',
                  unobserveOnEnter: true
                }}
                oninview_change={({ detail }) => handleInView(index, detail.inView)}
                class="relative"
              >
                {#if visibleSteps[index]}
                  <div
                    in:fly={{ x: index % 2 === 0 ? -50 : 50, duration: 500, delay: 200 }}
                    class={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  >
                    <div class="hidden md:flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full shrink-0">
                      {@html getIcon(step.icon)}
                    </div>
                    
                    <div class={`flex-grow ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div class="bg-gray-700 border-gray-600 rounded-lg overflow-hidden">
                        <div class="p-4 flex md:flex-row items-start gap-4">
                          <div class="md:hidden flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full shrink-0">
                            {@html getIcon(step.icon)}
                          </div>
                          <div>
                            <h4 class="text-white text-xl flex items-center">
                              <span class="inline-block w-8 h-8 bg-blue-600 text-white rounded-full text-center leading-8 mr-3 md:hidden">
                                {index + 1}
                              </span>
                              {step.title}
                            </h4>
                          </div>
                        </div>
                        <div class="p-4 pt-0 text-gray-300">
                          {step.description}
                        </div>
                      </div>
                    </div>
                    
                    <div class="hidden md:flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full text-white font-bold shrink-0">
                      {index + 1}
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
  
  
