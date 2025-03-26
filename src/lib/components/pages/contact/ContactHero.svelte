<script lang="ts">
    import { fade } from 'svelte/transition';
</script>
  
  <section class="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
    <!-- Background with animated gradient -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900"></div>
  
    <!-- Circuit board pattern -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 right-0 bottom-0">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern-contact" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="none" />
            <path d="M0,50 H100" stroke="rgba(96, 165, 250, 0.5)" stroke-width="1" stroke-dasharray="5,5" />
            <path d="M50,0 V100" stroke="rgba(96, 165, 250, 0.5)" stroke-width="1" stroke-dasharray="5,5" />
            <circle cx="50" cy="50" r="3" fill="rgba(96, 165, 250, 0.5)" />
            <path d="M50,50 L75,75" stroke="rgba(96, 165, 250, 0.5)" stroke-width="1" />
            <path d="M50,50 L25,75" stroke="rgba(96, 165, 250, 0.5)" stroke-width="1" />
            <path d="M50,50 L75,25" stroke="rgba(96, 165, 250, 0.5)" stroke-width="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern-contact)" />
        </svg>
      </div>
    </div>
  
    <!-- Content -->
    <div class="container relative mx-auto px-4 z-10" in:fade={{ duration: 1000 }}>
      <a href="/" class="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        Back to Home
      </a>
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
        Get in <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
      </h1>
      <p class="text-xl text-gray-300 max-w-2xl">
        Have a project in mind? We'd love to hear from you. Reach out to us and let's create something amazing together.
      </p>
    </div>
</section>
  
  