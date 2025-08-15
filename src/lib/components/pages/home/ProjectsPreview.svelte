<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Button from '$lib/components/global/ui/Button.svelte';
  import { HomePageStrings } from '$lib/utils/strings';

  type Project = {
    id: number;
    title: string;
    description: string;
    image?: string;
    tags?: string[];
    href?: string;
  };

  // Temporary showcase data. Replace with real data or load from an API later.
  const featured: Project[] = [
    {
      id: 1,
      title: 'E‑commerce Platform',
      description: 'Full‑stack store with checkout, analytics, and admin tools.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['SvelteKit', 'Node', 'Stripe'],
      href: '/projects'
    },
    {
      id: 2,
      title: 'Telemedicine App',
      description: 'Secure virtual care with video, EHR, and prescriptions.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['WebRTC', 'MongoDB', 'Twilio'],
      href: '/projects'
    },
    {
      id: 3,
      title: 'AI Content Studio',
      description: 'Generate on‑brand content with measurable impact.',
      image: '/placeholder.svg?height=400&width=600',
      tags: ['AI', 'FastAPI', 'React'],
      href: '/projects'
    }
  ];

  const SECTION_TITLE = HomePageStrings?.PROJECTS_TITLE ?? 'Featured Projects';
  const SECTION_SUB = HomePageStrings?.PROJECTS_SUBTITLE ?? 'A quick look at what we build.';
</script>

<section class="w-full bg-base-100/5 py-16" aria-labelledby="projects-preview-heading">
  <div class="container mx-auto px-6">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
      <div>
        <h2 id="projects-preview-heading" class="text-2xl md:text-3xl font-black tracking-tight">
          {SECTION_TITLE}
        </h2>
        <p class="text-base-content/70 mt-2">
          {SECTION_SUB}
        </p>
      </div>
      <a href="/projects" class="self-start md:self-auto">
        <Button size="lg" class="hover:scale-105 transition-transform">View all projects</Button>
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each featured as p (p.id)}
        <article
          class="group rounded-xl overflow-hidden border border-base-300/30 bg-base-200/20 backdrop-blur-sm"
          in:fly={{ y: 24, duration: 350 }}
          out:fade={{ duration: 150 }}
        >
          <a href={p.href ?? '/projects'} class="block focus:outline-none focus:ring-2 focus:ring-primary/70">
            <div class="h-44 bg-base-300 overflow-hidden">
              <img
                src={p.image || '/placeholder.svg'}
                alt={p.title}
                class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div class="p-5">
              <h3 class="font-semibold text-lg">{p.title}</h3>
              <p class="text-base-content/70 mt-1">{p.description}</p>
              {#if p.tags?.length}
                <div class="flex flex-wrap gap-2 mt-3">
                  {#each p.tags.slice(0,3) as tag}
                    <span class="px-2 py-0.5 rounded-full text-xs bg-base-300/60">{tag}</span>
                  {/each}
                </div>
              {/if}
            </div>
          </a>
        </article>
      {/each}
    </div>

    <div class="text-center mt-10">
      <a href="/projects" aria-label="See more projects">
        <Button variant="secondary" class="hover:scale-105 transition-transform">See more</Button>
      </a>
    </div>
  </div>
</section>

<style>
  :global(.container) { max-width: 1200px; }
  .text-base-content\/70 { color: rgba(255,255,255,0.7); }
  .bg-base-100\/5 { background: rgba(0,0,0,0.05); }
  .bg-base-200\/20 { background: rgba(255,255,255,0.06); }
  .border-base-300\/30 { border-color: rgba(255,255,255,0.18); }
</style>
