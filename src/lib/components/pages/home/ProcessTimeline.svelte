<script>
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
	import TimelineStep from './components/TimelineStep.svelte';
  
    const steps = [
      { title: "Discovery", description: "We analyze your requirements and project goals." },
      { title: "Planning", description: "We create a detailed project roadmap and timeline." },
      { title: "Development", description: "Our team brings your vision to life with clean, efficient code." },
      { title: "Testing", description: "Rigorous quality assurance to ensure a flawless product." },
      { title: "Deployment", description: "We launch your project and provide ongoing support." },
    ];
  
    let visibleSteps = Array(steps.length).fill(false);
  
    function handleInView(index, inView) {
      if (inView) {
        visibleSteps[index] = true;
      }
    }
  </script>
  
  <section id="process" class="py-20 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">Our Development Process</h2>
      <div class="relative">
        <CircuitBoardLine />
        <div class="space-y-16">
          {#each steps as step, index (index)}
            <div 
              use:inview={{
                rootMargin: '0px 0px -100px 0px',
                unobserveOnEnter: true
              }}
              on:inview_change={({ detail }) => handleInView(index, detail.inView)}
            >
              {#if visibleSteps[index]}
                <TimelineStep {step} {index} >
                    <div class="bg-white p-6 rounded-lg shadow-md">
                        <h3 class="text-xl font-bold mb-2">${step.title}</h3>
                        <p class="text-gray-600">${step.description}</p>
                      </div>
                </TimelineStep>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
  
  <!-- <script context="module">
    function CircuitBoardLine() {
      return `
        <svg
          class="absolute left-1/2 transform -translate-x-1/2 h-full w-1"
          viewBox="0 0 2 100"
          preserveAspectRatio="none"
        >
          <path
            d="M1 0V100"
            stroke="#3B82F6"
            stroke-width="2"
            stroke-dasharray="4 4"
            class="path-animation"
          />
        </svg>
      `;
    }
  
    function TimelineStep({ step, index } : {step: {title: string, description: string}, index: number}) {
      const isLeft = index % 2 === 0;
      
      return `
        <div class="relative flex items-center justify-center">
          <div
            class="absolute ${isLeft ? "left-1/2 -translate-x-1/2 -translate-x-14" : "right-1/2 translate-x-1/2 translate-x-14"} w-8 h-8 rounded-full bg-blue-600 border-4 border-white z-10 scale-animation"
          ></div>
          <div
            class="w-5/12 ${isLeft ? "mr-auto pr-8 text-right" : "ml-auto pl-8 text-left"} slide-animation"
          >
            
          </div>
        </div>
      `;
    }
  </script>
  
  <style>
    .path-animation {
      stroke-dashoffset: 100;
      animation: dash 2s linear forwards;
    }
    
    .scale-animation {
      animation: scale 0.5s ease-out forwards;
    }
    
    .slide-animation {
      animation: slide 0.5s ease-out forwards;
    }
    
    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
    
    @keyframes scale {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
    
    @keyframes slide {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
</style> -->
  
  
