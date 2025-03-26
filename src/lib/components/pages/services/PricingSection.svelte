<script lang="ts">
    import { fly } from 'svelte/transition';
  
    let billingCycle = "monthly";
  
    const pricingPlans = [
      {
        name: "Starter",
        description: "Perfect for small businesses and startups",
        price: {
          monthly: 999,
          yearly: 899
        },
        features: [
          "Responsive website design",
          "Up to 5 pages",
          "Basic SEO optimization",
          "Contact form integration",
          "Mobile-friendly design",
          "3 months of support"
        ],
        popular: false,
        cta: "Get Started"
      },
      {
        name: "Professional",
        description: "Ideal for growing businesses",
        price: {
          monthly: 1999,
          yearly: 1799
        },
        features: [
          "Everything in Starter",
          "Up to 10 pages",
          "Advanced SEO optimization",
          "E-commerce functionality (up to 50 products)",
          "Blog integration",
          "Social media integration",
          "Google Analytics setup",
          "6 months of support"
        ],
        popular: true,
        cta: "Choose Professional"
      },
      {
        name: "Enterprise",
        description: "For established businesses with complex needs",
        price: {
          monthly: 3999,
          yearly: 3599
        },
        features: [
          "Everything in Professional",
          "Unlimited pages",
          "Custom web application development",
          "Advanced e-commerce features",
          "Custom integrations",
          "Performance optimization",
          "Priority support",
          "12 months of support"
        ],
        popular: false,
        cta: "Contact Sales"
      }
    ];
  </script>
  
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-white mb-4">Transparent Pricing</h2>
        <p class="text-gray-300 max-w-2xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our core quality services and dedicated support.
        </p>
        
        <div class="mt-8 inline-flex items-center p-1 bg-gray-800 rounded-lg">
          <button
            on:click={() => billingCycle = "monthly"}
            class={`px-4 py-2 rounded-md transition-colors ${
              billingCycle === "monthly" 
                ? "bg-blue-600 text-white" 
                : "text-gray-300 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            on:click={() => billingCycle = "yearly"}
            class={`px-4 py-2 rounded-md transition-colors ${
              billingCycle === "yearly" 
                ? "bg-blue-600 text-white" 
                : "text-gray-300 hover:text-white"
            }`}
          >
            Yearly <span class="text-xs text-blue-400 ml-1">Save 10%</span>
          </button>
        </div>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {#each pricingPlans as plan, index}
          <div
            in:fly={{ y: 20, duration: 400, delay: index * 100 }}
            class={`flex flex-col ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
          >
            <div class={`bg-gray-800 border-gray-700 h-full flex flex-col rounded-lg overflow-hidden ${
              plan.popular ? 'border-blue-500 shadow-lg shadow-blue-900/20 border' : 'border border-gray-700'
            }`}>
              {#if plan.popular}
                <div class="bg-blue-600 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              {/if}
              <div class="p-6 border-b border-gray-700">
                <h3 class="text-white text-2xl">{plan.name}</h3>
                <p class="text-gray-400 mt-2">{plan.description}</p>
              </div>
              <div class="p-6 flex-grow">
                <div class="mb-6">
                  <p class="text-4xl font-bold text-white">
                    ${billingCycle === "monthly" ? plan.price.monthly : plan.price.yearly}
                  </p>
                  <p class="text-gray-400 mt-1">per month</p>
                </div>
                
                <ul class="space-y-3">
                  {#each plan.features as feature}
                    <li class="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 text-blue-400 mr-2 shrink-0 mt-0.5"><path d="M20 6 9 17l-5-5"/></svg>
                      <span class="text-gray-300">{feature}</span>
                    </li>
                  {/each}
                </ul>
              </div>
              <div class="p-6 pt-0">
                <button 
                  class={`w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      <div class="mt-12 text-center">
        <p class="text-gray-400">
          Need a custom solution? <a href="#" class="text-blue-400 hover:underline">Contact us</a> for a personalized quote.
        </p>
      </div>
    </div>
</section>
  
  