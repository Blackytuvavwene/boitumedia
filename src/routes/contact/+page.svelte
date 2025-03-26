<script lang="ts">
	import ContactForm from "$lib/components/pages/contact/ContactForm.svelte";
	import ContactHero from "$lib/components/pages/contact/ContactHero.svelte";
	import ContactInfo from "$lib/components/pages/contact/ContactInfo.svelte";
	import ContactMap from "$lib/components/pages/contact/ContactMap.svelte";
    import ContactFaq from "$lib/components/pages/contact/ContactFAQ.svelte";

</script>
  
  <svelte:head>
    <title>Contact Us - Boitumedia</title>
    <meta name="description" content="Get in touch with our team for web and mobile development services. We're here to help transform your digital presence." />
  </svelte:head>
  
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <ContactHero />
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <div>
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </div>
    <ContactFaq />
  </div>
  
  