<script lang="ts">
	import FooterForm from './FooterForm.svelte';
	import FooterInfoSection from './FooterInfoSection.svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="bg-background border-border relative overflow-hidden border-t">
	<FooterForm />
	<FooterInfoSection />
	<section class="border-border/60 bg-muted/20 border-t py-6">
		<div class="container mx-auto px-6">
			<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
				<p class="text-muted-foreground text-center text-xs md:text-left">
					&copy; {currentYear} Boitumedia. All rights reserved.
				</p>
				<div class="flex space-x-6">
					<a
						href="/privacy"
						class="text-muted-foreground hover:text-primary text-xs transition-colors"
					>
						Privacy Policy
					</a>
					<a
						href="/terms"
						class="text-muted-foreground hover:text-primary text-xs transition-colors"
					>
						Terms of Service
					</a>
					<a
						href="/sitemap.xml"
						class="text-muted-foreground hover:text-primary text-xs transition-colors"
					>
						Sitemap
					</a>
				</div>
			</div>
		</div>
	</section>
</footer>
