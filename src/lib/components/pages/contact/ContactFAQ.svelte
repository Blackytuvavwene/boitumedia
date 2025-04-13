<script lang="ts">
    import { fly, slide } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    
    let faqVisible = false;
    let activeIndex = -1;
    
    function handleFaqInView({ detail }) {
      if (detail.inView) {
        faqVisible = true;
      }
    }
    
    function toggleFaq(index) {
      activeIndex = activeIndex === index ? -1 : index;
    }
    
    const faqs = [
      {
        question: "What services does Boitumedia offer?",
        answer: "Boitumedia offers a comprehensive range of digital services including web development, mobile app development, UI/UX design, e-commerce solutions, backend development, and more. We specialize in creating custom digital solutions tailored to your specific business needs."
      },
      {
        question: "How long does it take to complete a project?",
        answer: "Project timelines vary depending on the scope, complexity, and requirements. A simple website might take 4-6 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we'll provide you with a detailed timeline based on your specific project."
      },
      {
        question: "What is your pricing structure?",
        answer: "We offer flexible pricing options including fixed-price quotes for well-defined projects and hourly rates for ongoing development work. Our pricing is transparent and competitive, reflecting the quality and expertise we bring to each project. Contact us for a custom quote based on your project requirements."
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer: "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch. Our support services include bug fixes, security updates, performance optimization, and feature enhancements. We can tailor a support plan to meet your specific needs."
      },
      {
        question: "How do you handle project communication?",
        answer: "We believe in transparent and regular communication throughout the project lifecycle. We use project management tools like Jira or Trello, conduct regular video meetings, and provide weekly progress reports. You'll have a dedicated project manager as your main point of contact."
      },
      {
        question: "Can you work with clients remotely?",
        answer: "We have successfully completed projects for clients worldwide. Our remote collaboration process is well-established, utilizing video conferencing, project management tools, and regular communication to ensure smooth project execution regardless of geographical location."
      }
    ];
  </script>
  
  <section 
    class="py-20 bg-base-900"
    use:inview={{
      rootMargin: '0px 0px -100px 0px',
      unobserveOnEnter: true
    }}
    oninview_change={handleFaqInView}
  >
    {#if faqVisible}
      <div class="container mx-auto px-4" in:fly={{ y: 20, duration: 500 }}>
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p class="text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and more. If you don't see your question here, feel free to contact us directly.
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div class="space-y-4">
            {#each faqs as faq, index}
              <div 
                class="bg-base-800 border border-base-700 rounded-lg overflow-hidden"
                in:fly={{ y: 20, duration: 500, delay: index * 100 }}
              >
                <button 
                  onclick={() => toggleFaq(index)}
                  class="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <span class="text-lg font-medium text-white">{faq.question}</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    class={`text-blue-400 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                
                {#if activeIndex === index}
                  <div transition:slide={{ duration: 300 }} class="px-6 pb-4">
                    <p class="text-gray-300">{faq.answer}</p>
                  </div>
                {/if}
              </div>
            {/each}
          </div>
        </div>
        
        <div class="text-center mt-12">
          <p class="text-gray-300 mb-6">Still have questions?</p>
          <a 
            href="#" 
            class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white h-11 px-8"
          >
            Contact Our Support Team
          </a>
        </div>
      </div>
    {/if}
</section>
  
  