<script lang="ts">
	import SEO from '$lib/components/global/SEO.svelte';
	import Button from '$lib/components/global/ui/Button.svelte';
	import HeroComponent from '$lib/components/global/ui/HeroComponent.svelte';
	import FaqAccordion from '$lib/components/contact/FaqAccordion.svelte';
	import { SITE_URL } from '$lib/constants/site';
	import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from '@lucide/svelte';
	import { fly } from 'svelte/transition';

	let formSubmitted = $state(false);
	let isSubmitting = $state(false);

	let formData = $state({
		name: '',
		email: '',
		projectType: 'flutter',
		message: ''
	});

	function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		setTimeout(() => {
			isSubmitting = false;
			formSubmitted = true;
		}, 800);
	}

	const contactJsonLd = [
		{
			'@context': 'https://schema.org',
			'@type': 'ContactPage',
			name: 'Contact Boitumelo Tubabwene',
			description:
				'Get in touch with Boitumelo Tubabwene in Botswana for Flutter mobile apps, SvelteKit web development, Python APIs, and database engineering.',
			url: `${SITE_URL}/contact`
		}
	];
</script>

<SEO
	title="Contact Boitumelo Tubabwene | Software Developer"
	description="Get in touch with Boitumelo Tubabwene in Botswana for Flutter mobile apps, SvelteKit web development, Python APIs, and database engineering."
	canonicalUrl={`${SITE_URL}/contact`}
	breadcrumbs={[
		{ name: 'Home', item: '/' },
		{ name: 'Contact', item: '/contact' }
	]}
	jsonLd={contactJsonLd}
/>

<!-- Shared Circuit-Animated Hero -->
<HeroComponent
	badge="Get In Touch • Boitumelo Tubabwene"
	title={{ heading: "Let's", subheading: 'Connect' }}
	content="Have a project idea, technical question, or collaboration proposal? Reach out directly to me in Botswana."
	showBack={true}
/>

<section class="bg-background py-16">
	<div class="container mx-auto px-6">
		<div class="mx-auto mb-20 grid max-w-6xl gap-12 lg:grid-cols-12">
			<!-- Contact Information Sidebar -->
			<div class="space-y-6 lg:col-span-5">
				<div class="bg-card border-border space-y-6 rounded-2xl border p-8 shadow-sm">
					<h2 class="text-foreground text-2xl font-bold">Contact Information</h2>
					<p class="text-muted-foreground text-sm leading-relaxed">
						I am open for freelance projects, technical roles, or software collaborations. Drop me a
						message below!
					</p>

					<div class="space-y-4 pt-2">
						<div class="flex items-start space-x-4">
							<div
								class="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
							>
								<Mail size={20} />
							</div>
							<div>
								<div class="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
									Email
								</div>
								<a
									href="mailto:hello@boitumedia.com"
									class="text-foreground hover:text-primary font-medium transition-colors"
								>
									hello@boitumedia.com
								</a>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div
								class="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
							>
								<Phone size={20} />
							</div>
							<div>
								<div class="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
									Phone & WhatsApp
								</div>
								<a
									href="https://wa.me/26777465201"
									target="_blank"
									rel="noopener noreferrer"
									class="text-foreground hover:text-primary font-medium transition-colors"
								>
									+267 77 465 201
								</a>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div
								class="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
							>
								<MapPin size={20} />
							</div>
							<div>
								<div class="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
									Location
								</div>
								<div class="text-foreground font-medium">Gaborone, Botswana</div>
							</div>
						</div>

						<div class="flex items-start space-x-4">
							<div
								class="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
							>
								<Clock size={20} />
							</div>
							<div>
								<div class="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
									Availability
								</div>
								<div class="text-foreground font-medium">Open for opportunities</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Interactive Contact Form -->
			<div class="lg:col-span-7">
				<div class="bg-card border-border rounded-2xl border p-8 shadow-sm md:p-10">
					{#if formSubmitted}
						<div class="space-y-4 py-12 text-center" in:fly={{ y: 15, duration: 300 }}>
							<div
								class="bg-primary/10 text-primary mx-auto flex h-16 w-16 items-center justify-center rounded-full"
							>
								<CheckCircle2 size={36} />
							</div>
							<h2 class="text-foreground text-2xl font-bold">Message Sent!</h2>
							<p class="text-muted-foreground mx-auto max-w-md">
								Thank you for reaching out. Boitumelo will read your message and respond as soon as
								possible.
							</p>
							<Button variant="secondary" onclick={() => (formSubmitted = false)}>
								Send Another Message
							</Button>
						</div>
					{:else}
						<form onsubmit={handleSubmit} class="space-y-6">
							<h2 class="text-foreground mb-6 text-2xl font-bold">Send Me a Message</h2>
							<p class="sr-only" id="contact-response-time">
								Boitumelo typically replies as soon as possible after receiving your message.
							</p>

							<div class="grid gap-6 md:grid-cols-2">
								<div class="space-y-2">
									<label for="name" class="text-foreground text-sm font-semibold">Your Name</label>
									<input
										type="text"
										id="name"
										name="name"
										autocomplete="name"
										required
										bind:value={formData.name}
										placeholder="Your Name"
										class="border-input bg-background text-foreground focus:ring-primary w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:outline-none"
									/>
								</div>

								<div class="space-y-2">
									<label for="email" class="text-foreground text-sm font-semibold"
										>Email Address</label
									>
									<input
										type="email"
										id="email"
										name="email"
										autocomplete="email"
										required
										bind:value={formData.email}
										placeholder="your.email@example.com"
										class="border-input bg-background text-foreground focus:ring-primary w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:outline-none"
									/>
								</div>
							</div>

							<div class="space-y-2">
								<label for="projectType" class="text-foreground text-sm font-semibold"
									>Topic / Tech Focus</label
								>
								<select
									id="projectType"
									name="projectType"
									bind:value={formData.projectType}
									class="border-input bg-background text-foreground focus:ring-primary w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:outline-none"
								>
									<option value="flutter">Flutter Mobile App</option>
									<option value="svelte">Svelte / SvelteKit Web Application</option>
									<option value="python">Python & API Backend</option>
									<option value="sql">SQL / Database Engineering</option>
									<option value="other">General Tech Inquiry</option>
								</select>
							</div>

							<div class="space-y-2">
								<label for="message" class="text-foreground text-sm font-semibold">Message</label>
								<textarea
									id="message"
									name="message"
									rows={5}
									required
									bind:value={formData.message}
									placeholder="Tell me about your project or inquiry..."
									class="border-input bg-background text-foreground focus:ring-primary w-full resize-y rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:outline-none"
								></textarea>
							</div>

							<Button
								type="submit"
								size="lg"
								class="flex w-full items-center justify-center space-x-2"
								disabled={isSubmitting}
								aria-describedby="contact-response-time"
							>
								<span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
								<Send size={18} />
							</Button>
						</form>
					{/if}
				</div>
			</div>
		</div>

		<!-- FAQ Section -->
		<div class="mx-auto max-w-4xl pt-8">
			<div class="mb-12 text-center">
				<h2 class="text-foreground mb-4 text-3xl font-bold">Frequently Asked Questions</h2>
				<p class="text-muted-foreground">Common questions about working with Boitumelo.</p>
			</div>
			<FaqAccordion />
		</div>
	</div>
</section>
