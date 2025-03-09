<script lang="ts">
  import {Globe, Smartphone, Server, Code } from 'lucide-svelte'
	import { fly } from 'svelte/transition';
	import { elasticIn, quintOut, quintIn, cubicIn, linear } from 'svelte/easing';
	import AnimateInView from '../global/AnimateInView.svelte';

// services provided
const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your needs.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android.",
    },
    { icon: Server, title: "Backend Development", description: "Robust and scalable server-side solutions and APIs." },
    {
      icon: Code,
      title: "Frontend Development",
      description: "Responsive and interactive user interfaces with modern frameworks.",
    },
  ]

  //
  // Function to calculate animation parameters based on index
  function getAnimationParams(index: number) {
        const baseDelay = 600;
        const baseDuration = 500;
        const delayIncrement = 150;
        const durationIncrement = 100;

        return {
            x: 600,
            duration: baseDuration + (index * durationIncrement),
            delay: baseDelay + (index * delayIncrement),
            easing: linear
        };
    }
</script>

<section class="w-full bg-base-200 flex flex-col items-center m-auto py-10 min-h-92 h-full">
    <h2 class="font-black text-2xl">
        Services We Offer
    </h2>
    <ul class="grid md:grid-cols-2 m-16 gap-8 h-full overflow-hidden">
      {#each services as service, index (service.title)}
          <AnimateInView
          animate={(node)=>fly(node, getAnimationParams(index))}
           >
            <li class="bg-white p-8 w-full rounded-xl flex flex-col gap-4" id="">
                    <div class=" ">
                      <service.icon color="blue" size="34px"/>
                    </div>
  
                    <div class="service-details">
                      <h3 class="font-bold text-xl">
                          {service.title}
                      </h3>
                      <p>
                          {service.description}
                      </p>
                    </div>
              </li>
          </AnimateInView>
      {/each}
    </ul>
</section>