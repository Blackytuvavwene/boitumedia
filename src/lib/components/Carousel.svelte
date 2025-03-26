<script lang="ts">
    import { onMount } from 'svelte';

    export let items: string | any[] = [];
    export let autoplay = true;
    export let interval = 5000;
    export let showControls = true;
    export let showIndicators = true;

    let currentIndex = 0;
    let intervalId: number | undefined;
    let carouselRef: HTMLDivElement;

    onMount(() => {
        if (autoplay && items.length > 1) {
            startAutoplay();
        }

        // Add keyboard navigation
        carouselRef.addEventListener('keydown', handleKeyDown);

        return () => {
            if (intervalId) clearInterval(intervalId);
            carouselRef.removeEventListener('keydown', handleKeyDown);
        };
    });

    function startAutoplay() {
        intervalId = setInterval(() => {
            next();
        }, interval);
    }

    function stopAutoplay() {
        if (intervalId) clearInterval(intervalId);
    }

    function next() {
        currentIndex = (currentIndex + 1) % items.length;
    }

    function prev() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
    }

    function goToSlide(index: number) {
        currentIndex = index;
    }

    function handleMouseEnter() {
        if (autoplay) stopAutoplay();
    }

    function handleMouseLeave() {
        if (autoplay) startAutoplay();
    }

    // Add keyboard navigation handler
    function handleKeyDown(event: KeyboardEvent) {
        switch (event.key) {
            case 'ArrowRight':
                event.preventDefault();
                next();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                prev();
                break;
            case 'Home':
                event.preventDefault();
                goToSlide(0);
                break;
            case 'End':
                event.preventDefault();
                goToSlide(items.length - 1);
                break;
        }
    }
</script>

<div
    bind:this={carouselRef}
    class="relative w-full h-full overflow-hidden"
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    role="region"
    aria-roledescription="carousel"
    aria-label="Image carousel"
    tabindex="0"
>
    <div 
        class="relative w-full h-full" 
        role="group" 
        aria-label="Carousel slides"
    >
        {#each items as item, i}
            <div
                class="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out"
                class:active={i === currentIndex}
                style="transform: translateX({(i - currentIndex) * 100}%)"
                role="tabpanel"
                aria-hidden={i !== currentIndex}
                aria-label={`Slide ${i + 1} of ${items.length}`}
            >
                {#if item.type === 'image'}
                    <img 
                        src={item.src} 
                        alt={item.alt || `Slide ${i + 1}`} 
                        class="w-full h-full object-cover" 
                        aria-describedby={item.description ? `slide-description-${i}` : undefined}
                    />
                    {#if item.description}
                        <div 
                            id={`slide-description-${i}`} 
                            class="sr-only"
                        >
                            {item.description}
                        </div>
                    {/if}
                {:else}
                    <div class="w-full h-full flex items-center justify-center">
                        {@html item.content}
                    </div>
                {/if}
            </div>
        {/each}
    </div>

    {#if showControls && items.length > 1}
        <button
            class="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-white transition-colors duration-300 md:w-12 md:h-12"
            on:click={prev}
            aria-label="Go to previous slide"
            aria-controls="carousel-slides"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
        <button
            class="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 hover:bg-black/70 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-white transition-colors duration-300 md:w-12 md:h-12"
            on:click={next}
            aria-label="Go to next slide"
            aria-controls="carousel-slides"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>
    {/if}

    {#if showIndicators && items.length > 1}
        <div 
            class="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2" 
            role="tablist" 
            aria-label="Slide indicators"
        >
            {#each items as _, i}
                <button
                    class="w-2.5 h-2.5 rounded-full transition-colors duration-300 p-0 cursor-pointer {i === currentIndex ? 'bg-white' : 'bg-white/50'}"
                    on:click={() => goToSlide(i)}
                    aria-label="Go to slide {i + 1}"
                    aria-selected={i === currentIndex}
                    role="tab"
                ></button>
            {/each}
        </div>
    {/if}
</div>

<style>
    /* Ensure focus visibility */
    :focus-visible {
        outline: 2px solid blue;
        outline-offset: 2px;
    }

    /* Improve contrast for indicators */
    .bg-white\/50 {
        background-color: rgba(255, 255, 255, 0.7);
    }
</style>
