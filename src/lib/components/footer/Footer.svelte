<script>
	import FooterForm from "./FooterForm.svelte";
	import FooterInfoSection from "./FooterInfoSection.svelte";

    // current year
    let currentYear = new Date().getFullYear();

</script>

<footer class="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900  overflow-hidden">
    <FooterForm />
    <FooterInfoSection />
    <section class="border-t border-gray-800">
        <div class="container mx-auto p-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm">
                    &copy; {currentYear} BoituMedia. All rights reserved.
                </p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <!-- TODO: add links to policies -->
                    <a href="/" target="_blank" rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-400 text-sm"
                    >
                        Privacy Policy
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-400 text-sm"
                    >
                        Terms of Service
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer"
                    class="text-gray-500 hover:text-gray-400 text-sm"
                    >
                        Cookie Policy
                    </a>
                </div>
            </div>
        </div>
    </section>
</footer>