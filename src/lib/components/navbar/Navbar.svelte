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

<header class="w-full bg-primary h-1/6">
    <nav class="w-full flex flex-row">
            <div class="m-2">
                <div class="w-8 h-6">
                    <button use:melt={$trigger} class="btn btn-ghost box-border flex flex-col h-full justify-between w-full">
                        {#each menuDivs as divs}
                            <span class="w-full h-1 bg-black"></span>
                        {/each}
                    </button>
                </div>
                <menu use:melt={$menu} class="mt-4 bg-primary w-28 bg-white">
                    {#each navLinks as nav (nav.id)}
                        <li use:melt={$item} class="{$page.url.pathname === nav.path ? 'text-primary' : ''}">
                            <a href={nav.path}
                                class="w-full justify-between items-center flex flex-col h-full"
                            >
                                <p class=" text-primary-content">
                                    {nav.name}
                                </p>
                                <!-- <div class="{$page.url.pathname === nav.path ? 'bg-primary transition-all h-1 w-8' : ''}"></div> -->
                            </a>
                        </li>
                    {/each}
                </menu>
            </div>
        <div class="btn btn-ghost w-1/2 lg:w-0 navbar-end">
            Logo
        </div>
        <ul class="hidden md:flex h-16 justify-evenly w-[50%] navbar-end">
            {#each navLinks as nav (nav.id)}
                <li class="w-full box-border h-full  {$page.url.pathname === nav.path ? 'text-primary' : ''}">
                    <a href={nav.path}
                        class="w-full justify-between items-center flex flex-col h-full"
                    >
                    <span></span>
                        <p class="">
                            {nav.name}
                        </p>
                        <div class="{$page.url.pathname === nav.path ? 'bg-primary transition-all h-1 w-8' : ''}"></div>
                    </a>
                </li>
            {/each}
        </ul>
        <ul class="hidden lg:flex h-16 justify-evenly">
            {#each socialLinks as socialLink (socialLink.props.id)}
                <li class="w-full box-border h-full">
                    <a class="w-full flex flex-col items-center justify-center h-full" href={socialLink.props.path}>
                        <img class=" w-10 h-10" src={socialLink.icon} alt={socialLink.props.name}>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</header>