<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { onMount } from 'svelte';
  
    const services = [
      {
        id: "web-dev",
        title: "Web Development",
        icon: "Globe",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "Custom websites and web applications tailored to your needs.",
        description: "Our web development services deliver custom, responsive websites and web applications that engage users and drive conversions. We use the latest technologies and frameworks to create fast, secure, and scalable solutions.",
        features: [
          "Responsive design for all devices",
          "Custom CMS integration",
          "E-commerce functionality",
          "SEO optimization",
          "Performance optimization",
          "Security implementation"
        ],
        technologies: ["React", "Next.js", "Vue.js", "Node.js", "WordPress", "Shopify"]
      },
      {
        id: "mobile-dev",
        title: "Mobile App Development",
        icon: "Smartphone",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "Native and cross-platform mobile apps for iOS and Android.",
        description: "We create intuitive, high-performance mobile applications for iOS and Android platforms. Our mobile solutions are designed to provide seamless user experiences while meeting your business objectives.",
        features: [
          "Native iOS and Android development",
          "Cross-platform solutions",
          "UI/UX design",
          "API integration",
          "Push notifications",
          "Offline functionality"
        ],
        technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"]
      },
      {
        id: "backend-dev",
        title: "Backend Development",
        icon: "Server",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "Robust and scalable server-side solutions and APIs.",
        description: "Our backend development services focus on building robust, scalable, and secure server-side applications. We design efficient APIs and database structures that power your digital products.",
        features: [
          "API development",
          "Database design",
          "Authentication systems",
          "Cloud infrastructure",
          "Microservices architecture",
          "Performance optimization"
        ],
        technologies: ["Node.js", "Python", "Java", "Go", "MongoDB", "PostgreSQL", "AWS", "Azure"]
      },
      {
        id: "frontend-dev",
        title: "Frontend Development",
        icon: "Code",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "Responsive and interactive user interfaces with modern frameworks.",
        description: "We craft engaging, responsive, and accessible user interfaces that provide exceptional user experiences. Our frontend development focuses on performance, usability, and modern design principles.",
        features: [
          "Responsive layouts",
          "Interactive UI components",
          "Animation and transitions",
          "Accessibility compliance",
          "State management",
          "Performance optimization"
        ],
        technologies: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "SASS"]
      },
      {
        id: "database",
        title: "Database Solutions",
        icon: "Database",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "Efficient database design, optimization, and management.",
        description: "We provide comprehensive database solutions including design, implementation, migration, and optimization. Our expertise spans relational, NoSQL, and graph databases to meet your specific needs.",
        features: [
          "Database architecture design",
          "Data modeling",
          "Migration services",
          "Performance tuning",
          "Replication and sharding",
          "Backup and recovery strategies"
        ],
        technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Firebase"]
      },
      {
        id: "ui-design",
        title: "UI/UX Design",
        icon: "Palette",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "User-centered design that enhances user experience and engagement.",
        description: "Our design team creates intuitive, visually appealing interfaces that enhance user experience and engagement. We follow a user-centered design approach to ensure your digital products are both beautiful and functional.",
        features: [
          "User research",
          "Wireframing and prototyping",
          "Visual design",
          "Interaction design",
          "Usability testing",
          "Design systems"
        ],
        technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"]
      },
      {
        id: "ai-ml",
        title: "AI & Machine Learning",
        icon: "Cpu",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "Intelligent solutions powered by artificial intelligence and machine learning.",
        description: "We develop intelligent applications and systems using artificial intelligence and machine learning technologies. Our solutions help automate processes, gain insights from data, and enhance decision-making.",
        features: [
          "Predictive analytics",
          "Natural language processing",
          "Computer vision",
          "Recommendation systems",
          "Chatbots and virtual assistants",
          "Data analysis and visualization"
        ],
        technologies: ["TensorFlow", "PyTorch", "scikit-learn", "OpenAI API", "Google Cloud AI", "AWS SageMaker"]
      },
      {
        id: "analytics",
        title: "Data Analytics",
        icon: "LineChart",
        image: "/placeholder.svg?height=400&width=600",
        shortDesc: "Data-driven insights to inform business decisions and strategy.",
        description: "Our data analytics services help you extract valuable insights from your data to inform business decisions and strategy. We implement comprehensive analytics solutions that track, measure, and visualize key metrics.",
        features: [
          "Data collection and processing",
          "Custom dashboards",
          "Real-time analytics",
          "A/B testing",
          "Conversion optimization",
          "User behavior analysis"
        ],
        technologies: ["Google Analytics", "Mixpanel", "Tableau", "Power BI", "Looker", "Amplitude"]
      }
    ];
  
    let selectedService = services[0];
  
    function getIcon(iconName: string) {
      switch (iconName) {
        case 'Globe':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>';
        case 'Smartphone':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>';
        case 'Server':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>';
        case 'Code':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
        case 'Database':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>';
        case 'Palette':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>';
        case 'Cpu':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v3"/><path d="M15 1v3"/><path d="M9 20v3"/><path d="M15 20v3"/><path d="M20 9h3"/><path d="M20 14h3"/><path d="M1 9h3"/><path d="M1 14h3"/></svg>';
        case 'LineChart':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>';
        default:
          return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>';
      }
    }
</script>
  
  <section class="py-20 bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-white text-center mb-16">Our Digital Services</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Service Navigation -->
        <div class="lg:col-span-1">
          <div class="bg-gray-800 rounded-lg p-4">
            {#each services as service}
              <button
                onclick={() => selectedService = service}
                class={`w-full text-left p-4 rounded-lg mb-2 flex items-center transition-colors ${
                  selectedService.id === service.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {@html getIcon(service.icon)}
                <span class="ml-3">{service.title}</span>
              </button>
            {/each}
          </div>
        </div>
        
        <!-- Service Details -->
        <div class="lg:col-span-2">
          {#key selectedService.id}
            <div 
              class="bg-gray-800 rounded-lg overflow-hidden"
              in:fly={{ y: 20, duration: 300 }}
              out:fade={{ duration: 200 }}
            >
              <div class="relative h-64">
                <img
                  src={selectedService.image || "/placeholder.svg"}
                  alt={selectedService.title}
                  class="object-cover w-full h-full"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-6">
                  <h3 class="text-3xl font-bold text-white mb-2">{selectedService.title}</h3>
                </div>
              </div>
              
              <div class="p-6">
                <p class="text-gray-300 mb-6 text-lg">{selectedService.description}</p>
                
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                  <div class="bg-gray-700 border-gray-600 rounded-lg overflow-hidden">
                    <div class="p-4 border-b border-gray-600">
                      <h4 class="text-white text-lg font-semibold">Key Features</h4>
                    </div>
                    <div class="p-4">
                      <ul class="space-y-2 text-gray-300">
                        {#each selectedService.features as feature}
                          <li class="flex items-start">
                            <span class="text-blue-400 mr-2">•</span>
                            {feature}
                          </li>
                        {/each}
                      </ul>
                    </div>
                  </div>
                  
                  <div class="bg-gray-700 border-gray-600 rounded-lg overflow-hidden">
                    <div class="p-4 border-b border-gray-600">
                      <h4 class="text-white text-lg font-semibold">Technologies</h4>
                    </div>
                    <div class="p-4">
                      <div class="flex flex-wrap gap-2">
                        {#each selectedService.technologies as tech}
                          <span class="inline-block px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm">
                            {tech}
                          </span>
                        {/each}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="flex justify-center">
                  <button class="bg-blue-600 hover:bg-blue-700 inline-flex items-center justify-center text-sm font-medium text-white h-11 rounded-md px-8">
                    Request a Quote
                  </button>
                </div>
              </div>
            </div>
          {/key}
        </div>
      </div>
    </div>
</section>
  
  