<script lang="ts">
	import PricingSection from "$lib/components/pages/services/PricingSection.svelte";
	import ServiceProcess from "$lib/components/pages/services/ServiceProcess.svelte";
	import ServicesHero from "$lib/components/pages/services/ServicesHero.svelte";
	import ServicesList from "$lib/components/pages/services/ServicesList.svelte";
    import CTASection from "$lib/components/pages/services/CTASection.svelte";


</script>

<svelte:head>
  <title>Our Services - Boitumedia</title>
  <meta name="description" content="Explore our comprehensive range of web and mobile development services designed to transform your business." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
  <ServicesHero />
  <ServicesList />
  <ServiceProcess />
  <PricingSection />
  <CTASection />
</div>