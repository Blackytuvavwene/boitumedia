<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import { page } from '$app/state';

	// Default SEO values
	const defaultSeo = {
		title: 'Boitumedia - Web & Mobile Development Services',
		description: 'Innovative digital solutions for transforming businesses through cutting-edge web and mobile development.',
		keywords: 'web development, mobile development, digital solutions, software services',
		canonicalUrl: 'https://boitumedia.xyz'
	};
</script>

<svelte:head>
	<title> {page.data.title || defaultSeo.title}</title>
	<meta name="description" content={page.data.description || defaultSeo.description}/>
	<meta name="keywords" content={page.data.keywords || defaultSeo.keywords}/>
	<link rel="canonical" href={page.data.canonicalUrl || defaultSeo.canonicalUrl}/>

	
	<!--  Open Graph / Facebook  -->
	
	<meta property="og:type" content="website"/>
	<meta property="og:url" content={page.data.canonicalUrl || defaultSeo.canonicalUrl}/>
	<meta property="og:title" content={page.data.title || defaultSeo.title}/>
	<meta property="og:description" content={page.data.description || defaultSeo.description}/>

	<!-- Twitter  -->
	<meta property="twitter:card" content="summary_large_image"/>
	<meta property="twitter:url" content={page.data.canonicalUrl || defaultSeo.canonicalUrl}/>
	<meta property="twitter:title" content={page.data.title || defaultSeo.title}/>
	<meta property="twitter:description" content={page.data.description || defaultSeo.description}/>
</svelte:head>

<Navbar/>
<slot></slot>
<Footer/>
