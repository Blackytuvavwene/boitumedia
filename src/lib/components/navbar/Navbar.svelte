<script lang="ts">
	import { socialLinks } from '$lib/utils/links/social.links.js';
    import { createDropdownMenu, melt} from '@melt-ui/svelte';
    import { Menu, Cross, X } from 'lucide-svelte'
	import { fly } from 'svelte/transition';

    let isScrolled = $state(false)
    let isMenuOpen = $state(false)
    let scrollHeight = $state(0)


    // elements from melt ui to use in our dropdown menu
    const { elements : { menu, item, trigger} } = createDropdownMenu({
        onOutsideClick: () => {
            isMenuOpen = false
        }
    })

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

    // control isScrolled state
    $effect(() => {
        isScrolled = scrollHeight > 100
    })

    
</script>

<svelte:window bind:scrollY={scrollHeight}/>

<header class="fixed top-0 w-full z-50 {isScrolled ? "bg-secondary bg-opacity-10" : "bg-transparent"}">
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

        <!-- Mobile menu button -->
        <button 
        type="button"
        use:melt={$trigger}
        class="lg:hidden btn-md " onclick={() => isMenuOpen = !isMenuOpen}>
            <!-- <span class="sr-only">Open main menu</span> -->
            {#if isMenuOpen}
                <X color="white"/>
            {:else}
                <Menu color="white"/>
            {/if}
        </button>

        <!-- Mobile Navigation Dropdown -->
         {#if isMenuOpen}
          <section 
          use:melt={$menu}
          transition:fly={{y: -50 , duration: 300,}}
          class="lg:hidden absolute max-w-[98vw] w-full bg-gray-900 bg-opacity-95 rounded-lg shadow-lg flex flex-col gap-2 mt-6">
            <ul class="flex flex-col divide-y divide-gray-600 px-4">
              {#each navLinks as navLink}
                <li class="py-4 px-4">
                  <a href={navLink.path} use:melt={$item} class="text-white hover:text-blue-400 py-2">
                    {navLink.name}
                  </a>
                </li>
              {/each}
            </ul>
            <!-- get a quote button -->
             <a href="#contact" class="btn btn-primary m-4 ">
                Get a quote
             </a>
          </section>

         {/if}
         



        <button class="hidden lg:block btn btn-primary btn-md text-primary-content">
            Get a quote
        </button>
    </nav>
</header>