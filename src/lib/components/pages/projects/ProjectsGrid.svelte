<script>
    import { fade, fly, scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    
    // Category definitions
    const categories = [
      { id: "all", label: "All Projects", icon: null },
      { id: "web", label: "Web Applications", icon: "Globe" },
      { id: "mobile", label: "Mobile Apps", icon: "Smartphone" },
      { id: "enterprise", label: "Enterprise Solutions", icon: "Server" },
      { id: "ai", label: "AI & Machine Learning", icon: "Code" },
      { id: "iot", label: "IoT Solutions", icon: "Code" },
    ];
    
    // Project data
    const projects = [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with advanced product filtering, user authentication, and payment processing.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "web",
        longDescription: "This comprehensive e-commerce platform was built for a retail client looking to expand their online presence. The solution includes advanced product filtering, user authentication, shopping cart functionality, and secure payment processing through Stripe. The admin dashboard provides detailed analytics and inventory management capabilities.",
        challenges: "Implementing a real-time inventory system that could handle high traffic volumes during sales events was a significant challenge. We solved this by implementing a caching layer and optimizing database queries.",
        results: "The platform increased the client's online sales by 150% in the first quarter after launch, with a 30% improvement in conversion rates compared to their previous solution.",
        features: [
          "Advanced product filtering and search",
          "User authentication and profiles",
          "Shopping cart and wishlist",
          "Secure payment processing",
          "Order tracking and history",
          "Admin dashboard with analytics"
        ],
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "AWS S3", "Redis"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 2,
        title: "Health & Fitness App",
        description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React Native", "Firebase", "Machine Learning"],
        category: "mobile",
        longDescription: "This health and fitness mobile application helps users track their workouts, nutrition, and health metrics. It provides personalized recommendations based on user goals and progress. The app includes features like workout plans, meal tracking, progress photos, and social sharing capabilities.",
        challenges: "Developing an algorithm that could provide personalized workout and nutrition recommendations based on user data was complex. We implemented a machine learning model that improves its suggestions as users interact with the app.",
        results: "The app has maintained a 4.8/5 star rating on app stores with over 100,000 downloads. User retention is 45% higher than the industry average for fitness apps.",
        features: [
          "Personalized workout plans",
          "Nutrition tracking and meal suggestions",
          "Progress tracking with charts and photos",
          "Social sharing and community features",
          "Integration with fitness wearables",
          "Offline functionality"
        ],
        technologies: ["React Native", "Firebase", "TensorFlow Lite", "Google Fit API", "Apple HealthKit"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 3,
        title: "Real Estate Portal",
        description: "A web application for property listings with virtual tours, mortgage calculator, and agent communication tools.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Next.js", "PostgreSQL", "Google Maps API"],
        category: "web",
        longDescription: "This real estate portal allows users to browse property listings, take virtual tours, calculate mortgage payments, and communicate with agents. The platform includes advanced search filters, saved searches, and notification features. Agents can manage listings and track client interactions through a dedicated dashboard.",
        challenges: "Implementing the virtual tour feature with 360-degree views while maintaining fast load times required significant optimization. We developed a progressive loading system that prioritizes visible areas first.",
        results: "The portal has facilitated over $15 million in property transactions within its first year, with agents reporting a 40% reduction in time spent on administrative tasks.",
        features: [
          "Property search with advanced filters",
          "Virtual tours with 360° views",
          "Mortgage calculator",
          "Agent-client messaging system",
          "Saved searches and favorites",
          "Agent dashboard with lead tracking"
        ],
        technologies: ["Next.js", "PostgreSQL", "Google Maps API", "Three.js", "Twilio", "AWS"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 4,
        title: "Project Management Tool",
        description: "A collaborative project management application with real-time updates, task tracking, and resource allocation.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        category: "web",
        longDescription: "This project management tool helps teams collaborate effectively with features like real-time updates, task tracking, resource allocation, and reporting. It includes Gantt charts, kanban boards, time tracking, and document sharing capabilities. The platform integrates with popular tools like Slack, GitHub, and Google Workspace.",
        challenges: "Ensuring real-time synchronization across multiple users editing the same project was technically challenging. We implemented a custom conflict resolution system using operational transformation algorithms.",
        results: "Teams using the tool report a 35% increase in project completion rates and a 25% reduction in missed deadlines. The platform is now used by over 200 companies across various industries.",
        features: [
          "Real-time collaboration",
          "Kanban and Gantt views",
          "Time tracking and reporting",
          "Resource allocation",
          "Document sharing and version control",
          "Third-party integrations"
        ],
        technologies: ["Vue.js", "Express", "Socket.io", "PostgreSQL", "Redis", "Docker"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 5,
        title: "AI Content Generator",
        description: "An AI-powered platform for generating marketing content, blog posts, and social media updates.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Python", "TensorFlow", "React", "FastAPI"],
        category: "ai",
        longDescription: "This AI-powered content generation platform helps marketers create blog posts, social media updates, and marketing copy. It uses advanced natural language processing to generate content that matches the brand's voice and style. The platform includes features for editing, scheduling, and analyzing content performance.",
        challenges: "Training the AI model to generate content that maintained consistent brand voice across different types of marketing materials required extensive data preparation and model fine-tuning.",
        results: "Marketing teams using the platform report saving an average of 15 hours per week on content creation, with 80% of generated content requiring minimal editing before publication.",
        features: [
          "AI-powered content generation",
          "Brand voice customization",
          "Content editing and refinement",
          "Publishing and scheduling",
          "Performance analytics",
          "SEO recommendations"
        ],
        technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker", "GCP"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 6,
        title: "Supply Chain Management System",
        description: "An end-to-end supply chain management solution with inventory tracking, supplier management, and predictive analytics.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Angular", "Java Spring", "MySQL", "Tableau"],
        category: "enterprise",
        longDescription: "This supply chain management system provides end-to-end visibility and control over inventory, supplier relationships, and logistics. It includes features for inventory tracking, supplier management, order processing, and predictive analytics. The system integrates with ERP systems and provides comprehensive reporting capabilities.",
        challenges: "Developing predictive analytics for inventory management that could account for seasonal variations and supply disruptions required sophisticated statistical modeling and machine learning approaches.",
        results: "Clients using the system have reduced inventory costs by an average of 23% while improving order fulfillment rates by 17%. The predictive analytics have helped prevent stockouts during supply chain disruptions.",
        features: [
          "Inventory management",
          "Supplier relationship management",
          "Order processing and tracking",
          "Predictive analytics",
          "ERP integration",
          "Comprehensive reporting"
        ],
        technologies: ["Angular", "Java Spring", "MySQL", "Tableau", "Docker", "Kubernetes", "Azure"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 7,
        title: "Financial Dashboard",
        description: "A comprehensive financial analytics dashboard for tracking investments, expenses, and financial goals.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "D3.js", "Node.js", "MongoDB"],
        category: "web",
        longDescription: "This financial dashboard provides users with a comprehensive view of their financial health, including investments, expenses, income, and progress toward financial goals. It features interactive charts and visualizations, budget tracking, and personalized financial insights.",
        challenges: "Securely integrating with multiple financial institutions while ensuring data privacy and compliance with financial regulations was a significant challenge. We implemented bank-level encryption and strict access controls.",
        results: "Users report an average 30% improvement in budget adherence and a 25% increase in savings rate after using the dashboard for six months.",
        features: [
          "Financial account aggregation",
          "Interactive data visualizations",
          "Budget tracking and planning",
          "Investment portfolio analysis",
          "Goal setting and tracking",
          "Financial insights and recommendations"
        ],
        technologies: ["React", "D3.js", "Node.js", "MongoDB", "Plaid API", "AWS"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 8,
        title: "Telemedicine Platform",
        description: "A secure platform for virtual medical consultations, prescription management, and patient monitoring.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "WebRTC", "MongoDB"],
        category: "web",
        longDescription: "This telemedicine platform enables healthcare providers to conduct virtual consultations, manage prescriptions, and monitor patients remotely. It includes features for appointment scheduling, secure video conferencing, electronic health records, and prescription management.",
        challenges: "Ensuring HIPAA compliance while providing a seamless user experience required careful architecture and security implementation. We worked with healthcare compliance experts to validate our approach.",
        results: "The platform has facilitated over 50,000 virtual consultations, with patient satisfaction ratings averaging 4.9/5. Healthcare providers report a 40% reduction in administrative overhead.",
        features: [
          "Secure video consultations",
          "Appointment scheduling",
          "Electronic health records",
          "Prescription management",
          "Patient monitoring",
          "Billing and insurance integration"
        ],
        technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Twilio", "AWS", "Stripe"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 9,
        title: "Delivery Tracking App",
        description: "A mobile application for real-time package tracking, delivery notifications, and route optimization.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React Native", "Firebase", "Google Maps API"],
        category: "mobile",
        longDescription: "This delivery tracking app provides real-time package tracking, delivery notifications, and route optimization for delivery companies. It includes features for drivers to manage deliveries and for customers to track their packages in real-time.",
        challenges: "Implementing accurate real-time tracking while minimizing battery drain on drivers' devices required careful optimization of location services and data transmission.",
        results: "Companies using the app have reported a 35% improvement in delivery efficiency and a 45% reduction in customer service inquiries about package status.",
        features: [
          "Real-time package tracking",
          "Delivery notifications",
          "Route optimization",
          "Driver management",
          "Customer notifications",
          "Delivery confirmation with photo"
        ],
        technologies: ["React Native", "Firebase", "Google Maps API", "Node.js", "MongoDB"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 10,
        title: "Smart Home Control System",
        description: "An IoT platform for controlling and automating smart home devices with voice commands and scheduling.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "MQTT", "MongoDB"],
        category: "iot",
        longDescription: "This smart home control system allows users to control and automate their smart home devices through a mobile app or voice commands. It supports a wide range of devices including lights, thermostats, locks, and cameras. The platform includes features for scheduling, scenes, and automation rules.",
        challenges: "Ensuring compatibility with a wide range of smart home devices from different manufacturers required developing a flexible integration framework and extensive testing.",
        results: "Users report an average 20% reduction in energy consumption and significantly improved convenience in managing their smart home ecosystems.",
        features: [
          "Device control and monitoring",
          "Voice command integration",
          "Scheduling and automation",
          "Scene creation",
          "Energy usage analytics",
          "Security monitoring"
        ],
        technologies: ["React", "Node.js", "MQTT", "MongoDB", "AWS IoT", "Raspberry Pi"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 11,
        title: "Language Learning App",
        description: "A mobile application for learning languages through interactive lessons, games, and speech recognition.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Flutter", "Firebase", "TensorFlow"],
        category: "mobile",
        longDescription: "This language learning app helps users learn new languages through interactive lessons, games, and speech recognition. It adapts to the user's learning pace and provides personalized content based on their progress and interests.",
        challenges: "Implementing accurate speech recognition for multiple languages that could work effectively even with beginner accents required sophisticated audio processing and machine learning techniques.",
        results: "Users show a 40% higher retention rate compared to traditional language learning methods, with 85% reporting significant improvement in their language skills within three months.",
        features: [
          "Interactive lessons and exercises",
          "Speech recognition and pronunciation feedback",
          "Vocabulary games and flashcards",
          "Progress tracking and statistics",
          "Offline learning mode",
          "Community features and language exchange"
        ],
        technologies: ["Flutter", "Firebase", "TensorFlow", "Google Cloud Speech-to-Text", "Node.js"],
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 12,
        title: "Inventory Management System",
        description: "A comprehensive inventory management system for retail businesses with barcode scanning and analytics.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "PostgreSQL", "Electron"],
        category: "enterprise",
        longDescription: "This inventory management system helps retail businesses track inventory levels, process orders, and analyze sales data. It includes features for barcode scanning, purchase order management, and sales forecasting.",
        challenges: "Creating a system that could work both online and offline while ensuring data integrity across multiple store locations required sophisticated synchronization mechanisms.",
        results: "Businesses using the system report a 30% reduction in inventory holding costs and a 25% decrease in stockouts, leading to improved customer satisfaction and increased sales.",
        features: [
          "Inventory tracking and alerts",
          "Barcode scanning and generation",
          "Purchase order management",
          "Sales forecasting",
          "Multi-location support",
          "Reporting and analytics"
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Electron", "Redis", "AWS"],
        liveLink: "#",
        githubLink: "#",
      },
    ];
    
    let selectedCategory = "all";
    let selectedProject = null;
    
    // Filter projects based on selected category
    $: filteredProjects = selectedCategory === "all" 
      ? projects 
      : projects.filter(project => project.category === selectedCategory);
    
    function getIcon(iconName) {
      switch (iconName) {
        case 'Globe':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>';
        case 'Smartphone':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>';
        case 'Server':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>';
        case 'Code':
          return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>';
        default:
          return '';
      }
    }
  </script>
  
  <section class="py-20 bg-base-900">
    <div class="container mx-auto px-4">
      <div class="mb-12">
        <div class="flex flex-wrap justify-center gap-4">
          {#each categories as category}
            <button
              onclick={() => selectedCategory = category.id}
              class={`inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 ${
                selectedCategory === category.id 
                  ? "bg-blue-600 text-white" 
                  : "border border-input bg-background hover:bg-accent hover:text-accent-foreground text-white"
              }`}
            >
              {#if category.icon}
                {@html getIcon(category.icon)}
                <span class="ml-2">{category.label}</span>
              {:else}
                {category.label}
              {/if}
            </button>
          {/each}
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredProjects as project (project.id)}
          <div
            animate:flip={{ duration: 300 }}
            in:fly={{ y: 20, duration: 300 }}
            out:fade={{ duration: 200 }}
          >
            <div 
              class="bg-base-800 border-base-700 overflow-hidden cursor-pointer hover:border-blue-500 transition-colors h-full flex flex-col rounded-lg border"
              onclick={() => selectedProject = project}
            >
              <div class="h-48 overflow-hidden">
                <img 
                  src={project.image || "/placeholder.svg"} 
                  alt={project.title} 
                  class="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                />
              </div>
              <div class="p-4 border-b border-gray-700">
                <h3 class="text-white text-xl font-semibold">
                    {project.title}
                </h3>
                <p class="text-gray-400 mt-2">
                    {project.description}
                </p>
              </div>
              <div class="p-4 flex-grow">
                <div class="flex flex-wrap gap-2">
                  {#each project.tags.slice(0, 3) as tag}
                    <span class="inline-block px-2 py-1 bg-base-700 text-base-300 rounded-full text-xs">
                      {tag}
                    </span>
                  {/each}
                  {#if project.tags.length > 3}
                    <span class="inline-block px-2 py-1 bg-base-700 text-base-300 rounded-full text-xs">
                      +{project.tags.length - 3}
                    </span>
                  {/if}
                </div>
              </div>
              <div class="p-4 pt-0">
                <button class="w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium h-9 rounded-md px-3 text-white">
                  View Details
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>
      
      {#if filteredProjects.length === 0}
        <div class="text-center py-12">
          <p class="text-gray-400 text-lg">No projects found in this category.</p>
        </div>
      {/if}
    </div>
  
    <!-- &lt;!-- Project Details Modal -->
    {#if selectedProject}
      <div class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" transition:fade={{ duration: 200 }}>
        <div 
          class="bg-base-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          in:scale={{ start: 0.9, duration: 300 }}
          out:scale={{ start: 1, duration: 200 }}
        >
          <div class="sticky top-0 bg-base-800 p-4 flex justify-between items-center border-b border-base-700 z-10">
            <h3 class="text-2xl font-bold text-white">{selectedProject.title}</h3>
            <button 
              onclick={() => selectedProject = null}
              class="text-gray-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          
          <div class="p-6">
            <div class="mb-6">
              <img 
                src={selectedProject.image || "/placeholder.svg"} 
                alt={selectedProject.title} 
                class="w-full h-64 object-cover rounded-lg" 
              />
            </div>
            
            <div class="flex flex-wrap gap-2 mb-6">
              {#each selectedProject.tags as tag}
                <span class="inline-block px-2 py-1 bg-base-700 text-base-300 rounded-full text-xs">
                  {tag}
                </span>
              {/each}
            </div>
            
            <div class="space-y-6 text-gray-300">
              <div>
                <h4 class="text-xl font-semibold text-white mb-2">Overview</h4>
                <p>{selectedProject.longDescription}</p>
              </div>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-base-700 border-base-600 rounded-lg overflow-hidden">
                  <div class="p-4 border-b border-gray-600">
                    <h5 class="text-white font-semibold">Features</h5>
                  </div>
                  <div class="p-4">
                    <ul class="space-y-2">
                      {#each selectedProject.features as feature}
                        <li class="flex items-start">
                          <span class="text-blue-400 mr-2">•</span>
                          <span class="text-gray-300">{feature}</span>
                        </li>
                      {/each}
                    </ul>
                  </div>
                </div>
                
                <div class="bg-base-700 border-base-600 rounded-lg overflow-hidden">
                  <div class="p-4 border-b border-gray-600">
                    <h5 class="text-white font-semibold">Technologies</h5>
                  </div>
                  <div class="p-4">
                    <div class="flex flex-wrap gap-2">
                      {#each selectedProject.technologies as tech}
                        <span class="inline-block px-2 py-1 bg-base-600 text-base-300 rounded-full text-xs">
                          {tech}
                        </span>
                      {/each}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 class="text-xl font-semibold text-white mb-2">Challenges</h4>
                <p>{selectedProject.challenges}</p>
              </div>
              
              <div>
                <h4 class="text-xl font-semibold text-white mb-2">Results</h4>
                <p>{selectedProject.results}</p>
              </div>
            </div>
            
            <div class="flex space-x-4 mt-8">
              <a 
                href={selectedProject.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                View Live
              </a>
              <a 
                href={selectedProject.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 h-4 w-4"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    {/if}
</section>
  
  

