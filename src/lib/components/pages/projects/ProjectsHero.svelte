<script lang="ts">
    import HeroComponent from './../../global/ui/HeroComponent.svelte';
    import { fade } from 'svelte/transition';
</script>

<HeroComponent 
  title={{
    heading: 'Our',
    subheading: 'Projects'
  }}
  content={'Explore our portfolio of successful digital solutions that have helped businesses transform and grow.'}
  backText={'Back to Home'}
/>