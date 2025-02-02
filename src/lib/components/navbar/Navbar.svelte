<script lang="ts">

	import { page } from '$app/stores';
	import { socialLinks } from '$lib/utils/links/social.links.js';
    import { createDropdownMenu, melt} from '@melt-ui/svelte';

    // elements from melt ui to use in our dropdown menu
    const { elements : { menu, item, trigger} } = createDropdownMenu()

    // nav links
    let navLinks = [
        {
            name: 'Home',
            path: '/',
            id: 1
        },
        {
            name: 'About',
            path: '/about',
            id: 2
        },
        {
            name: 'Services',
            path: '/services',
            id: 4
        },
        {
            name: 'Projects',
            path: '/projects',
            id: 5
        },
        {
            name: 'Contact',
            path: '/contact',
            id: 6
        }
    ]

    // menu items
    const menuDivs = [
        1,
        2,
        3
    ]

    
</script>

<header class="fixed top-0 w-full  z-50">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/home" aria-label="Home" class="">
            <span class="text-2xl font-bold text-white">
                Boitu
            </span><span class="font-bold text-white text-2xl">
                Media
            </span>
        </a>
        <!-- Desktop menu -->
        <ul class="items-center flex-grow hidden justify-center space-x-8 lg:flex">
            {#each navLinks as navLink}
            <li>
                <a href={navLink.path} class="text-white hover:text-blue-400 transition-colors duration-300 relative group px-4">
                    {navLink.name}
                </a>
            </li>
            {/each}
        </ul>
        <button class="hidden md:block">
            Get a quote
        </button>
    </nav>
</header>