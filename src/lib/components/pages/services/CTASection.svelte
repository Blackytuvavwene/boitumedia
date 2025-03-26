<script lang='ts'>
    import { fade, fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    
    let ctaVisible = false;
    
    function handleCtaInView({ detail }) {
      if (detail.inView) {
        ctaVisible = true;
      }
    }
</script>
  
  <section 
    class="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden"
    use:inview={{
      rootMargin: '0px 0px -100px 0px',
      unobserveOnEnter: true
    }}
    oninview_change={handleCtaInView}
  >
    <!-- Circuit board pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern-cta" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="none" />
            <path d="M0,50 H100" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" stroke-dasharray="5,5" />
            <path d="M50,0 V100" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" stroke-dasharray="5,5" />
            <circle cx="50" cy="50" r="3" fill="rgba(255, 255, 255, 0.5)" />
            <path d="M50,50 L75,75" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
            <path d="M50,50 L25,75" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
            <path d="M50,50 L75,25" stroke="rgba(255, 255, 255, 0.5)" stroke-width="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-cta)" />
        </svg>
      </div>
    </div>
  
    {#if ctaVisible}
      <div class="container mx-auto px-4 relative z-10" in:fade={{ duration: 800 }}>
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-6" in:fly={{ y: 20, duration: 500 }}>Ready to Transform Your Digital Presence?</h2>
          <p class="text-xl text-blue-100 mb-8" in:fly={{ y: 20, duration: 500, delay: 100 }}>
            Let's discuss how our services can help you achieve your business goals and drive growth in the digital landscape.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4" in:fly={{ y: 20, duration: 500, delay: 200 }}>
            <button class="bg-white text-blue-900 hover:bg-gray-100 inline-flex items-center justify-center text-sm font-medium h-11 rounded-md px-8">
              Schedule a Consultation
            </button>
            <button class="border-white text-white hover:bg-white/10 inline-flex items-center justify-center text-sm font-medium border h-11 rounded-md px-8">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    {/if}
</section>  