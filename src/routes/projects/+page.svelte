<script lang="ts">
	import ProjectsGrid from "$lib/components/pages/projects/ProjectsGrid.svelte";
	import ProjectsHero from "$lib/components/pages/projects/ProjectsHero.svelte";
	import ProjectsStats from "$lib/components/pages/projects/ProjectsStats.svelte";

</script>
<div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
    <ProjectsHero />
    <ProjectsGrid />
    <ProjectsStats />
  </div>