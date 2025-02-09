<script lang="ts">
	import { socialLinks } from '$lib/utils/links/social.links.js';
    import { createDropdownMenu, melt} from '@melt-ui/svelte';
    import { Menu, Cross } from 'lucide-svelte'

    let isScrolled = $state(false)
    let isMenuOpen = $state(false)
    let scrollHeight = $state(0)


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
        <p>{isMenuOpen}</p>
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
        class="md:hidden btn btn-ghost btn-md text-primary-content" onclick={() => isMenuOpen = !isMenuOpen}>
            <span class="sr-only">Open main menu</span>
            {#if isMenuOpen}
                <Cross />
            {:else}
                <Menu />
            {/if}
        </button>

        <!-- Mobile Navigation Dropdown -->
         {#if isMenuOpen}
          <section 
          use:melt={$menu}
          class="md:hidden absolute top-full left-4 right-4 bg-gray-900 bg-opacity-95 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
            <ul class="flex flex-col divide-y divide-gray-600">
              {#each navLinks as navLink}
                <li class="py-4 px-4">
                  <a href={navLink.path} use:melt={$item} class="text-white hover:text-blue-400 py-2 transition-colors duration-300">
                    {navLink.name}
                  </a>
                </li>
              {/each}
            </ul>
          </section>
         {/if}
         



        <button class="hidden md:block btn btn-primary btn-md text-primary-content">
            Get a quote
        </button>
    </nav>
</header>