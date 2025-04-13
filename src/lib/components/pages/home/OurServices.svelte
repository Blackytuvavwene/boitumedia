<script lang="ts">
  import { Globe, Smartphone, Server, Code } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import { linear } from 'svelte/easing';
	import { HomePageStrings } from '$lib/utils/strings';
	import AnimateInView from '$lib/components/global/AnimateInView.svelte';

  // services provided
  const services = [
    {
      icon: Globe,
      title: HomePageStrings.services.WEB_DEV.title,
      description: HomePageStrings.services.WEB_DEV.description,
      ariaLabel: HomePageStrings.services.WEB_DEV.ariaLabel
    },
    {
      icon: Smartphone,
      title: HomePageStrings.services.MOBILE_DEV.title,
      description: HomePageStrings.services.MOBILE_DEV.description,
      ariaLabel: HomePageStrings.services.MOBILE_DEV.ariaLabel
    },
    {
      icon: Server,
      title: HomePageStrings.services.BACKEND_DEV.title,
      description: HomePageStrings.services.BACKEND_DEV.description,
      ariaLabel: HomePageStrings.services.BACKEND_DEV.ariaLabel
    },
    {
      icon: Code,
      title: HomePageStrings.services.UI_UX_DESIGN.title,
      description: HomePageStrings.services.UI_UX_DESIGN.description,
      ariaLabel: HomePageStrings.services.UI_UX_DESIGN.ariaLabel
    },
  ];

  // Function to calculate animation parameters based on index
  function getAnimationParams(index: number) {
    const baseDelay = 600;
    const baseDuration = 500;
    const delayIncrement = 150;
    const durationIncrement = 100;

    return {
      x: 600,
      duration: baseDuration + index * durationIncrement,
      delay: baseDelay + index * delayIncrement,
      easing: linear,
    };
  }

  // calculate the width of each service card based on the number of services
  // This comment can be removed or completed if needed
</script>

<section class="w-full bg-base-200 flex flex-col items-center m-auto py-10 min-h-92 h-full" aria-labelledby="services-heading">
  <h2 id="services-heading" class="font-black text-2xl">
    {HomePageStrings.SERVICES_TITLE}
  </h2>
  <ul class="grid md:grid-cols-2 m-16 gap-8 h-full overflow-hidden" aria-label="Our Services">
    {#each services as service, index (service.title)}
      <AnimateInView animate={fly} animationConfig={getAnimationParams(index)}>
        <li
          class="bg-white p-8 w-full rounded-xl flex flex-col gap-4 focus-within:ring-2 focus-within:ring-primary hover:shadow-lg transition-shadow"
          role="article"
          aria-label={service.ariaLabel}
        >
          <div class="text-primary" aria-hidden="true">
            <service.icon size="34px" />
          </div>

          <div class="service-details">
            <h3 class="font-bold text-xl" id={`service-${index}`}>
              {service.title}
            </h3>
            <p aria-labelledby={`service-${index}`}>
              {service.description}
            </p>
          </div>
        </li>
      </AnimateInView>
    {/each}
  </ul>
</section>
