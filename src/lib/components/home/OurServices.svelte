<script lang="ts">
 import {Globe, Smartphone, Server, Code } from 'lucide-svelte'

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
</script>

<section class="w-full bg-base-200 flex flex-col items-center m-auto py-10">
    <h2 class="font-black text-2xl">
        Services We Offer
    </h2>
    <ul class="grid md:grid-cols-2 m-16 gap-8">
      {#each services as service}
        <li class="bg-white p-8 w-full rounded-xl flex flex-col gap-2" id="">
          <div class="service-icon">
            <service.icon color="blue" size="34px"/>
          </div>
          <div class="service-details">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        </li>
      {/each}
    </ul>
  
</section>