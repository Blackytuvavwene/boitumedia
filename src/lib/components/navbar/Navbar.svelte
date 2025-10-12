<script lang="ts">
	import { socialLinks } from '$lib/utils/links/social.links.js';
    import { createDropdownMenu, melt} from '@melt-ui/svelte';
    import { Menu, Cross, X } from 'lucide-svelte'
	import { fly } from 'svelte/transition';
    import { page } from '$app/state';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

    let isScrolled = $state(false)
    let isMenuOpen = $state(false)
    let scrollHeight = $state(0)

    // is link active
    let isActive = $state(false)

    // check if link is active
    $effect(() => {
        isActive = navLinks.some(link => link.path === page
.url.pathname
        )
    })


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
            name: 'Projects',
            path: '/projects',
            id: 3
        },
        {
            name: 'Contact',
            path: '/contact',
            id: 4
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

<header class="fixed top-0 left-0 right-0 w-full z-50 {isScrolled ? " backdrop-blur-md " : "bg-transparent"} transition-colors duration-300 ease-in-out border-b border-border bg-background/80">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" aria-label="Home" class="">
            <span class="text-2xl font-bold text-white">
                Boitu
            </span><span class="font-bold text-white text-2xl">
                Media 
            </span>
        </a>
        <!-- Desktop menu -->
        <ul class="items-center flex-grow hidden justify-center space-x-8 md:flex">
            {#each navLinks as navLink}
            <li>
                <a href={navLink.path} class="text-foreground hover:text-primary transition-colors duration-300 relative group px-4">
                    {navLink.name}
                </a>
            </li>
            {/each}
        </ul>

		<!-- Desktop actions -->
		<div class="hidden md:flex items-center gap-4">
			<ThemeToggle />
			<button class="btn btn-primary btn-md text-primary-content">
				Get a quote
			</button>
		</div>

        <!-- Mobile menu button -->
        <button 
        type="button"
        use:melt={$trigger}
        class="md:hidden btn-md " onclick={() => isMenuOpen = !isMenuOpen}>
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
          class="md:hidden container mx-auto px-4 py-4 bg-background/95 backdrop-blur-md w-full overflow-hidden transition-all duration-300 ease-in-out max-h-screen opacity-100">
            <ul class="flex flex-col divide-y divide-border px-4">
                <div class="container mx-auto px-4 py-4 bg-background/95 backdrop-blur-md border-b border-border">
                    {#each navLinks as navLink}
                      <li class="flex flex-col gap-2">
                        <a href={navLink.path} use:melt={$item} class="text-foreground hover:text-primary py-2">
                          {navLink.name}
                        </a>
                      </li>
                    {/each}
                </div>
            </ul>
			<!-- Theme toggle and quote button -->
			<div class="flex items-center justify-between px-4 py-3 border-t border-border">
				<ThemeToggle />
				<a href="#contact" class="btn btn-primary btn-sm">
					Get a quote
				</a>
			</div>
          </section>
         {/if}
    </nav>
</header>