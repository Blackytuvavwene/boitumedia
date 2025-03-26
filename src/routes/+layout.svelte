<script lang="ts">
	import '../app.css';
    import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
</script>


<Navbar/>
<slot></slot>
<Footer/>
