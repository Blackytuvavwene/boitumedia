<script lang="ts">
	import { SiGithub, SiFacebook, SiX, SiWhatsapp } from '@icons-pack/svelte-simple-icons';
	import { Code, Compass, LifeBuoy } from '@lucide/svelte';

	const socialLinks = [
		{ name: 'GitHub', icon: SiGithub, href: 'https://github.com/Blackytuvavwene' },
		{ name: 'Facebook', icon: SiFacebook, href: 'https://www.facebook.com/boitumelo.blacky' },
		{ name: 'X (Twitter)', icon: SiX, href: 'https://x.com/Blackytubabwene' },
		{ name: 'WhatsApp', icon: SiWhatsapp, href: 'https://wa.me/26777465201' }
	];

	const moreInfo = [
		{
			title: 'Navigation',
			icon: Compass,
			links: [
				{ title: 'Home', href: '/' },
				{ title: 'About Boitumelo', href: '/about' },
				{ title: 'Projects Showcase', href: '/projects' },
				{ title: 'Contact Me', href: '/contact' }
			]
		},
		{
			title: 'Core Stack',
			icon: Code,
			links: [
				{ title: 'Flutter Mobile Engineering', href: '/about' },
				{ title: 'Svelte & SvelteKit Web Apps', href: '/about' },
				{ title: 'Python & API Microservices', href: '/about' },
				{ title: 'SQL & Database Architecture', href: '/about' }
			]
		},
		{
			title: 'Certifications',
			icon: LifeBuoy,
			links: [
				{ title: 'Google IT Support Professional (Enrolled)', href: '/about' },
				{ title: 'Self-Taught Software Development', href: '/about' }
			]
		}
	];
</script>

<section class="container mx-auto px-6 py-12">
	<div class="grid grid-cols-1 gap-10 md:grid-cols-4">
		<div class="col-span-1 space-y-4">
			<a href="/" class="group inline-flex items-center space-x-2.5">
				<img
					src="/logo-icon.png"
					alt="BoituMedia Logo"
					width="28"
					height="28"
					class="h-7 w-7 object-contain transition-transform group-hover:scale-105"
				/>
				<span class="text-foreground text-xl font-black tracking-tight">
					Boitu<span class="text-primary">Media</span>
				</span>
			</a>
			<p class="text-muted-foreground text-sm leading-relaxed">
				Software & web development by Boitumelo Tubabwene in Botswana. Crafting mobile apps and web platforms with Flutter, SvelteKit, Python, and SQL.
			</p>
			<div class="flex space-x-3 pt-2">
				{#each socialLinks as link (link.name)}
					<a
						href={link.href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.name}
						class="bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 border-border flex h-9 w-9 items-center justify-center rounded-lg border transition-colors"
					>
						<link.icon size={18} />
					</a>
				{/each}
			</div>
		</div>

		{#each moreInfo as section (section.title)}
			<div class="space-y-4">
				<h4 class="text-foreground flex items-center space-x-2 text-base font-bold">
					<section.icon size={18} class="text-primary" />
					<span>{section.title}</span>
				</h4>
				<ul class="space-y-2.5">
					{#each section.links as link (link.title)}
						<li>
							<a
								href={link.href}
								class="text-muted-foreground hover:text-primary text-sm transition-colors"
							>
								{link.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
