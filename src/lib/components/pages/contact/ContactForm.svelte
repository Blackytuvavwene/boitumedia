<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    
    let formVisible = false;
    let formSubmitted = false;
    let formSubmitting = false;
    
    // Form data
    let name = '';
    let email = '';
    let phone = '';
    let company = '';
    let projectType = '';
    let message = '';
    
    function handleFormInView({ detail }) {
      if (detail.inView) {
        formVisible = true;
      }
    }
    
    async function handleSubmit() {
      formSubmitting = true;
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      formSubmitting = false;
      formSubmitted = true;
      
      // Reset form after 5 seconds
      setTimeout(() => {
        formSubmitted = false;
        name = '';
        email = '';
        phone = '';
        company = '';
        projectType = '';
        message = '';
      }, 5000);
    }
</script>
  
  <div 
    use:inview={{
      rootMargin: '0px 0px -100px 0px',
      unobserveOnEnter: true
    }}
    on:inview_change={handleFormInView}
    class="bg-base-800 rounded-lg overflow-hidden border border-base-700 shadow-xl"
  >
    {#if formVisible}
      <div class="p-8" in:fly={{ y: 20, duration: 500 }}>
        <h2 class="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
        
        {#if formSubmitted}
          <div class="bg-blue-900/30 border border-blue-500 rounded-lg p-6 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400 mx-auto mb-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <h3 class="text-xl font-semibold text-white mb-2">Message Sent!</h3>
            <p class="text-gray-300">Thank you for reaching out. We'll get back to you as soon as possible.</p>
          </div>
        {:else}
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  bind:value={name}
                  required
                  class="w-full px-4 py-2 bg-base-700 border border-base-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  bind:value={email}
                  required
                  class="w-full px-4 py-2 bg-base-700 border border-base-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-300 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  bind:value={phone}
                  class="w-full px-4 py-2 bg-base-700 border border-base-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="+1 (123) 456-7890"
                />
              </div>
              
              <div>
                <label for="company" class="block text-sm font-medium text-gray-300 mb-1">Company Name</label>
                <input
                  type="text"
                  id="company"
                  bind:value={company}
                  class="w-full px-4 py-2 bg-base-700 border border-base-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Your Company"
                />
              </div>
            </div>
            
            <div>
              <label for="projectType" class="block text-sm font-medium text-gray-300 mb-1">Project Type *</label>
              <select
                id="projectType"
                bind:value={projectType}
                required
                class="w-full px-4 py-2 bg-base-700 border border-base-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              >
                <option value="" disabled selected>Select a project type</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile App Development</option>
                <option value="design">UI/UX Design</option>
                <option value="ecommerce">E-commerce</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1">Project Details *</label>
              <textarea
                id="message"
                bind:value={message}
                required
                rows="5"
                class="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                placeholder="Tell us about your project and requirements..."
              ></textarea>
            </div>
            
            <div class="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                required
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-base-600 rounded bg-base-700"
              />
              <label for="privacy" class="ml-2 block text-sm text-gray-300">
                I agree to the <a href="#" class="text-blue-400 hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={formSubmitting}
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
            >
              {#if formSubmitting}
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              {:else}
                Send Message
              {/if}
            </button>
          </form>
        {/if}
      </div>
    {/if}
</div>
  
  