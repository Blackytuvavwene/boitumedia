<script>
	import Button from '$lib/components/global/ui/Button.svelte';
	import { HomePageStrings } from './../../../utils/strings';

  // canvas animation
  import { onMount } from 'svelte';

  let canvasEl;

  onMount(()=>{
    const canvas = canvasEl;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    let animationFrameId: number

    const animate = () => {
      const bgColor = theme === "light" ? "rgba(224, 234, 224, 0.1)" : "rgba(18, 20, 35, 0.1)"
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        const particleColor = theme === "light" ? "rgba(22, 160, 180, 0.6)" : "rgba(22, 208, 204, 0.5)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particleColor
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const lineOpacity = 0.2 * (1 - distance / 150)
            const lineColor =
              theme === "light" ? `rgba(22, 160, 180, ${lineOpacity})` : `rgba(22, 208, 204, ${lineOpacity})`
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineColor
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  })

</script>
<section class="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-primary-900 to-secondary-900 pt-16">

   <!-- geometric shapes -->
    <!-- <div class="absolute inset-0 opacity-20">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-1/4 left-1/3 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
    </div> -->
    <!-- hero content -->
  <div class="container mx-6 relative text-center text-base z-10">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white">
                Transform Your Business:
            <br>
            <span class="text-primary text-stroke-black stroke-4">
                Go Digital, Go Beyond
            </span>
        </h1>
  <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white">
            {HomePageStrings.HERO_PARAGRAPH}
        </p>
        <div class="flex textarea-xs flex-col justify-center gap-4 md:flex-row">
          
            <a href="/contact">
              <Button
                size="lg"
                class="hover:cursor-pointer hover:bg-primary-600 transition-all hover:scale-105 hover:shadow-lg"
              >
                Start Your Digital Journey
              </Button>
            </a>
            <a href="/services" >
              <Button
                size="lg"
                variant="secondary"
                class="hover:cursor-pointer hover:bg-secondary-600 transition-all hover:scale-105 hover:shadow-lg"
              >
                See Success Stories
              </Button>
            </a>
        </div>
    </div>

    <!-- animated lines -->
    <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

    <!-- Animated circuit board lines  -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute top-0 left-0 w-full h-full">
        <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 L100,0 100,100" fill="none" stroke="rgba(59, 130, 246, 0.5)" stroke-width="0.5">
            <animate
              attributeName="d"
              dur="5s"
              repeatCount="indefinite"
              values="M0,0 L100,0 100,100;M0,100 L100,0 100,100;M0,0 L100,0 100,100"
            />
          </path>
          <path d="M0,100 L100,0 100,100" fill="none" stroke="rgba(99, 102, 241, 0.5)" stroke-width="0.5">
            <animate
              attributeName="d"
              dur="7s"
              repeatCount="indefinite"
              values="M0,100 L100,0 100,100;M0,0 L100,100 100,100;M0,100 L100,0 100,100"
            />
          </path>
        </svg>
      </div>
    </div>
</section>