<script>
	import { HomePageStrings } from './../../../utils/strings.ts';
	import Button from "$lib/components/global/ui/Button.svelte";

</script>
<section class="relative min-h-[80vh] flex items-center justify-center bg-linear-to-b from-secondary to-blue-900 pt-16">

    <!-- geometric shapes -->
    <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
    <!-- hero content -->
    <div class="container mx-6 relative text-center text-white z-10">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Transform Your Business:
            <br>
            <span class="text-primary text-stroke-black stroke-4">
                Go Digital, Go Beyond
            </span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
            {HomePageStrings.HERO_PARAGRAPH}
        </p>
        <div class="flex textarea-xs flex-col justify-center gap-4 md:flex-row">
          
            <a href="/contact">
              <Button
                size="lg"
                class="hover:cursor-pointer hover:bg-blue-600 transition-all hover:scale-105 hover:shadow-lg"
              >
                Start Your Digital Journey
              </Button>
            </a>
            <a href="/services" >
              <Button
                size="lg"
                variant="secondary"
                class="hover:cursor-pointer hover:bg-blue-600 transition-all hover:scale-105 hover:shadow-lg"
              >
                See Success Stories
              </Button>
            </a>
        </div>
    </div>

    <!-- animated lines -->
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

    <!-- Animated circuit board lines  -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-full h-full">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 100,100" fill="none" stroke="rgba(59, 130, 246, 0.5)" stroke-width="0.5">
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="M0,0 L100,0 100,100;M0,100 L100,0 100,100;M0,0 L100,0 100,100"
            />
          </path>
          <path d="M0,100 L100,0 100,100" fill="none" stroke="rgba(99, 102, 241, 0.5)" stroke-width="0.5">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="M0,100 L100,0 100,100;M0,0 L100,100 100,100;M0,100 L100,0 100,100"
            />
          </path>
        </svg>
      </div>
    </div>
</section>