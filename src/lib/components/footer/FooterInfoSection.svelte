<script lang="ts">
    import { SiGithub, SiFacebook, SiX, SiWhatsapp} from '@icons-pack/svelte-simple-icons'
    import { Code, Database, Server} from 'lucide-svelte'


    // my social links
    const socialLinks = [
        {
            name: 'GitHub',
            icon: SiGithub,
            href: 'https://github.com/Blackytuvavwene',
        },
        {
            name: 'Facebook',
            icon: SiFacebook,
            href: 'https://www.facebook.com/your_username',
        },
        {
            name: 'Twitter',
            icon: SiX,
            href: 'https://twitter.com/your_username',
        },
        {
            name: 'Whatsapp',
            icon: SiWhatsapp,
            href: 'https://www.linkedin.com/in/your_username',
        },
    ];

    // more projects info here...
    const moreInfo = [
        {
            title: 'Projects',
            icon: Code,
            links: [
                {
                    title: 'Web Projects',
                    href: '/projects',
                },
                {
                    title: 'Mobile Projects',
                    href: '/projects',
                },
                {
                    title: 'Backend Projects',
                    href: '/projects',
                }
            ]
        },
        {
            title: 'Resources',
            icon: Database,
            links: [
                {
                    title: 'Projects',
                    href: '/projects',
                }
            ]
        }
    ]
</script>

<section class="container mx-auto px-6 py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="col-span-1 md:col-span-1">
            <a href="/"
                class="text-2xl font-bold mb-4 inline-block text-white"
            >
                BoituMedia
            </a>
            <p class="text-gray-400 mb-6">
                Crafting innovative web and mobile solutions for businesses worldwide.
            </p>
            <div class="flex space-x-4">
                {#each socialLinks as link}
                    <a
                        href={link.href}
                        class="text-gray-400 hover:text-white transition-colors"
                    >
                        <link.icon size={20} />
                    </a>
                {/each}
            </div>
        </div>
        {#each moreInfo as section}
         <div>
            <h4 class="text-lg text-white font-semibold mb-4 flex items-center">
                <section.icon size={24} class="mr-2 h-4 w-4 text-blue-400" />
                {section.title}
            </h4>
            <ul class="space-y-2">
                {#each section.links as link}
                    <li class="flex items-center">
                        <a href={link.href} class="text-gray-600 hover:text-white transition-colors">
                            {link.title}
                        </a>
                    </li>
                {/each}
            </ul>
         </div>
        {/each}

    </div>
</section>