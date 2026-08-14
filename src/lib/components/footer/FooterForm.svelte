<script lang="ts">
	import Button from '$lib/components/global/ui/Button.svelte';
	import { Send } from '@lucide/svelte';

	let formSubmitted = $state(false);
</script>

<section class="bg-card border-border w-full border-t px-6 py-16">
	<div class="container mx-auto max-w-2xl space-y-6 text-center">
		<div class="space-y-2">
			<span
				class="bg-primary/10 text-primary border-primary/20 inline-block rounded-full border px-3 py-1 text-xs font-semibold"
			>
				Quick Consultation
			</span>
			<h3 class="text-foreground text-2xl font-extrabold tracking-tight md:text-3xl">
				Start Your Web or Mobile Project Today
			</h3>
			<p class="text-muted-foreground text-sm">
				Fill out the quick form below and receive a detailed project proposal within 24 hours.
			</p>
		</div>

		{#if formSubmitted}
			<div class="bg-primary/10 text-primary border-primary/20 rounded-xl border p-6 font-bold">
				Thank you! Your project request has been submitted successfully.
			</div>
		{:else}
			<form
				onsubmit={(e) => {
					e.preventDefault();
					formSubmitted = true;
				}}
				class="bg-background border-border space-y-4 rounded-2xl border p-6 text-left shadow-sm md:p-8"
			>
				<div class="grid gap-4 md:grid-cols-2">
					<div class="space-y-1.5">
						<label for="footer-name" class="text-foreground text-xs font-bold">Your Name</label>
						<input
							type="text"
							id="footer-name"
							name="name"
							autocomplete="name"
							required
							placeholder="Jane Doe"
							class="border-input bg-card text-foreground focus:ring-primary w-full rounded-xl border px-3.5 py-2.5 text-sm focus:ring-2 focus:outline-none"
						/>
					</div>

					<div class="space-y-1.5">
						<label for="footer-email" class="text-foreground text-xs font-bold">Email Address</label
						>
						<input
							type="email"
							id="footer-email"
							name="email"
							autocomplete="email"
							required
							placeholder="jane@example.com"
							class="border-input bg-card text-foreground focus:ring-primary w-full rounded-xl border px-3.5 py-2.5 text-sm focus:ring-2 focus:outline-none"
						/>
					</div>
				</div>

				<div class="space-y-1.5">
					<label for="footer-details" class="text-foreground text-xs font-bold"
						>Project Summary</label
					>
					<textarea
						id="footer-details"
						name="projectSummary"
						rows={3}
						required
						placeholder="Briefly describe your product goals..."
						class="border-input bg-card text-foreground focus:ring-primary w-full resize-y rounded-xl border px-3.5 py-2.5 text-sm focus:ring-2 focus:outline-none"
					></textarea>
				</div>

				<Button type="submit" size="md" class="flex w-full items-center justify-center space-x-2">
					<span>Request Free Consultation</span>
					<Send size={16} />
				</Button>
			</form>
		{/if}
	</div>
</section>
