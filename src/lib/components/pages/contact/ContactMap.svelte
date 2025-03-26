<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    
    let mapVisible = false;
    
    function handleMapInView({ detail }) {
      if (detail.inView) {
        mapVisible = true;
      }
    }
</script>
  
  <div 
    use:inview={{
      rootMargin: '0px 0px -100px 0px',
      unobserveOnEnter: true
    }}
    on:inview_change={handleMapInView}
    class="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 shadow-xl"
  >
    {#if mapVisible}
      <div in:fly={{ y: 20, duration: 500 }}>
        <div class="p-8 pb-4">
          <h2 class="text-2xl font-bold text-white mb-2">Our Location</h2>
          <p class="text-gray-300">Visit us at our office in San Francisco</p>
        </div>
        
        <div class="relative h-80 w-full overflow-hidden">
          <!-- Placeholder for an actual map integration -->
          <div class="absolute inset-0 bg-gray-700 flex items-center justify-center">
            <div class="text-center p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 mx-auto mb-4"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              <p class="text-gray-300 mb-4">Interactive map would be displayed here</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-600 text-white h-10 px-4 py-2">
                Open in Google Maps
              </a>
            </div>
          </div>
          
          <!-- Tech-inspired overlay -->
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
            <div class="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>
    {/if}
</div>
  
  