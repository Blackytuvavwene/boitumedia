<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    
    let infoVisible = false;
    
    function handleInfoInView({ detail }) {
      if (detail.inView) {
        infoVisible = true;
      }
    }
</script>
  
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div 
        class="max-w-3xl mx-auto text-center mb-16"
        use:inview={{
          rootMargin: '0px 0px -100px 0px',
          unobserveOnEnter: true
        }}
        oninview_change={handleInfoInView}
      >
        {#if infoVisible}
          <div in:fly={{ y: 20, duration: 500 }}>
            <h2 class="text-3xl font-bold text-white mb-6">Who We Are</h2>
            <p class="text-gray-300 text-lg leading-relaxed">
              Boitumedia is a forward-thinking web and mobile development company dedicated to transforming businesses
              through innovative digital solutions. Founded in 2018, we've helped companies of all sizes establish
              powerful digital presences and create seamless user experiences.
            </p>
            <p class="text-gray-300 text-lg leading-relaxed mt-4">
              Our team of expert developers, designers, and strategists work collaboratively to deliver cutting-edge
              applications that drive growth and enhance user engagement.
            </p>
          </div>
        {/if}
      </div>
  
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          use:inview={{
            rootMargin: '0px 0px -100px 0px',
            unobserveOnEnter: true
          }}
          oninview_change={({ detail }) => detail.inView && (infoVisible = true)}
        >
          {#if infoVisible}
            <div 
              class="bg-gray-800 border-gray-700 rounded-lg overflow-hidden"
              in:fly={{ y: 20, duration: 500, delay: 100 }}
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-blue-400 mr-3"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                  <h3 class="text-xl font-semibold text-white">Technical Excellence</h3>
                </div>
                <p class="text-gray-300">
                  We pride ourselves on clean, efficient code and staying ahead of the latest technological advancements.
                </p>
              </div>
            </div>
          {/if}
        </div>
  
        <div 
          use:inview={{
            rootMargin: '0px 0px -100px 0px',
            unobserveOnEnter: true
          }}
          oninview_change={({ detail }) => detail.inView && (infoVisible = true)}
        >
          {#if infoVisible}
            <div 
              class="bg-gray-800 border-gray-700 rounded-lg overflow-hidden"
              in:fly={{ y: 20, duration: 500, delay: 200 }}
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-blue-400 mr-3"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <h3 class="text-xl font-semibold text-white">Client-Focused</h3>
                </div>
                <p class="text-gray-300">
                  Your success is our priority. We work closely with you to understand your unique needs and business
                  goals.
                </p>
              </div>
            </div>
          {/if}
        </div>
  
        <div 
          use:inview={{
            rootMargin: '0px 0px -100px 0px',
            unobserveOnEnter: true
          }}
          oninview_change={({ detail }) => detail.inView && (infoVisible = true)}
        >
          {#if infoVisible}
            <div 
              class="bg-gray-800 border-gray-700 rounded-lg overflow-hidden"
              in:fly={{ y: 20, duration: 500, delay: 300 }}
            >
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-blue-400 mr-3"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 22 4-10 4 10"/><path d="M12 22v-3"/></svg>
                  <h3 class="text-xl font-semibold text-white">Innovative Solutions</h3>
                </div>
                <p class="text-gray-300">
                  We don't just build websites and apps; we create innovative solutions to complex business challenges.
                </p>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </section>
  
  