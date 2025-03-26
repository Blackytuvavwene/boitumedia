<script lang="ts">
	import Carousel from "$lib/components/Carousel.svelte";


    const carouselItems = [
        {
            type: 'image',
            src: '/images/about1.jpg',
            alt: 'Our team working together'
        },
        {
            type: 'content',
            content: `
                <div class="p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center">
                    <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
                    <p class="text-xl">To deliver exceptional media solutions that inspire and engage audiences worldwide</p>
                </div>
            `
        },
        {
            type: 'image',
            src: '/images/about2.jpg',
            alt: 'Behind the scenes at a video shoot'
        },
        {
            type: 'content',
            content: `
                <div class="p-8 bg-gradient-to-r from-green-500 to-teal-500 text-white text-center">
                    <h2 class="text-3xl font-bold mb-4">Our Values</h2>
                    <p class="text-xl">Creativity • Excellence • Innovation • Integrity</p>
                </div>
            `
        }
    ];
</script>

<section class="w-full h-[600px] bg-gray-100">
    <div class="container mx-auto h-full p-4">
        <Carousel
            items={carouselItems}
            autoplay={true}
            interval={5000}
            showControls={true}
            showIndicators={true}
        />
    </div>
</section>