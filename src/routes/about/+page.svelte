<script lang="ts">
	import AboutHero from "$lib/components/pages/about/AboutHero.svelte";
	import AboutInfo from "$lib/components/pages/about/AboutInfo.svelte";
	import Education from "$lib/components/pages/about/Education.svelte";
	import Projects from "$lib/components/pages/about/Projects.svelte";
	import TechCarousel from "$lib/components/pages/about/TechCarousel.svelte";


</script>

<svelte:head>
  <title>About Us - Boitumedia</title>
  <meta name="description" content="Learn about Boitumedia, our journey, expertise, and the innovative solutions we've created for businesses worldwide." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <AboutHero />
    <AboutInfo />
    <TechCarousel />
    <Education />
    <Projects />
  </div>