<script lang="ts">
    import { fade, scale, fly } from 'svelte/transition';
    
    const projects = [
      {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with advanced product filtering, user authentication, and payment processing.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        longDescription: "This comprehensive e-commerce platform was built for a retail client looking to expand their online presence. The solution includes advanced product filtering, user authentication, shopping cart functionality, and secure payment processing through Stripe. The admin dashboard provides detailed analytics and inventory management capabilities.",
        challenges: "Implementing a real-time inventory system that could handle high traffic volumes during sales events was a significant challenge. We solved this by implementing a caching layer and optimizing database queries.",
        results: "The platform increased the client's online sales by 150% in the first quarter after launch, with a 30% improvement in conversion rates compared to their previous solution.",
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 2,
        title: "Health & Fitness App",
        description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["React Native", "Firebase", "Machine Learning"],
        longDescription: "This health and fitness mobile application helps users track their workouts, nutrition, and health metrics. It provides personalized recommendations based on user goals and progress. The app includes features like workout plans, meal tracking, progress photos, and social sharing capabilities.",
        challenges: "Developing an algorithm that could provide personalized workout and nutrition recommendations based on user data was complex. We implemented a machine learning model that improves its suggestions as users interact with the app.",
        results: "The app has maintained a 4.8/5 star rating on app stores with over 100,000 downloads. User retention is 45% higher than the industry average for fitness apps.",
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 3,
        title: "Real Estate Portal",
        description: "A web application for property listings with virtual tours, mortgage calculator, and agent communication tools.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Next.js", "PostgreSQL", "Google Maps API"],
        longDescription: "This real estate portal allows users to browse property listings, take virtual tours, calculate mortgage payments, and communicate with agents. The platform includes advanced search filters, saved searches, and notification features. Agents can manage listings and track client interactions through a dedicated dashboard.",
        challenges: "Implementing the virtual tour feature with 360-degree views while maintaining fast load times required significant optimization. We developed a progressive loading system that prioritizes visible areas first.",
        results: "The portal has facilitated over $15 million in property transactions within its first year, with agents reporting a 40% reduction in time spent on administrative tasks.",
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 4,
        title: "Project Management Tool",
        description: "A collaborative project management application with real-time updates, task tracking, and resource allocation.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
        longDescription: "This project management tool helps teams collaborate effectively with features like real-time updates, task tracking, resource allocation, and reporting. It includes Gantt charts, kanban boards, time tracking, and document sharing capabilities. The platform integrates with popular tools like Slack, GitHub, and Google Workspace.",
        challenges: "Ensuring real-time synchronization across multiple users editing the same project was technically challenging. We implemented a custom conflict resolution system using operational transformation algorithms.",
        results: "Teams using the tool report a 35% increase in project completion rates and a 25% reduction in missed deadlines. The platform is now used by over 200 companies across various industries.",
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 5,
        title: "AI Content Generator",
        description: "An AI-powered platform for generating marketing content, blog posts, and social media updates.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Python", "TensorFlow", "React", "FastAPI"],
        longDescription: "This AI-powered content generation platform helps marketers create blog posts, social media updates, and marketing copy. It uses advanced natural language processing to generate content that matches the brand's voice and style. The platform includes features for editing, scheduling, and analyzing content performance.",
        challenges: "Training the AI model to generate content that maintained consistent brand voice across different types of marketing materials required extensive data preparation and model fine-tuning.",
        results: "Marketing teams using the platform report saving an average of 15 hours per week on content creation, with 80% of generated content requiring minimal editing before publication.",
        liveLink: "#",
        githubLink: "#",
      },
      {
        id: 6,
        title: "Supply Chain Management System",
        description: "An end-to-end supply chain management solution with inventory tracking, supplier management, and predictive analytics.",
        image: "/placeholder.svg?height=400&width=600",
        tags: ["Angular", "Java Spring", "MySQL", "Tableau"],
        longDescription: "This supply chain management system provides end-to-end visibility and control over inventory, supplier relationships, and logistics. It includes features for inventory tracking, supplier management, order processing, and predictive analytics. The system integrates with ERP systems and provides comprehensive reporting capabilities.",
        challenges: "Developing predictive analytics for inventory management that could account for seasonal variations and supply disruptions required sophisticated statistical modeling and machine learning approaches.",
        results: "Clients using the system have reduced inventory costs by an average of 23% while improving order fulfillment rates by 17%. The predictive analytics have helped prevent stockouts during supply chain disruptions.",
        liveLink: "#",
        githubLink: "#",
      },
    ];
    
    let selectedProject = null;
  </script>
  
  <section class="py-20 bg-primary-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Our Projects</h2>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each projects as project, index}
          <div 
            in:fly={{ opacity: 0, y: 20, delay: index * 100, duration: 500 }}
            class="bg-primary-700 border-gray-700 overflow-hidden cursor-pointer hover:border-blue-500 transition-colors rounded-lg border"
            on:click={() => selectedProject = project}
          >
            <div class="h-48 overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                class="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-primary-50 mb-2">
                {project.title}
              </h3>
              <p class="text-gray-300 mb-4">{project.description}</p>
              <div class="flex flex-wrap gap-2">
                {#each project.tags.slice(0, 3) as tag, index}
                  <span class="inline-block px-2 py-1 bg-primary-900 text-primary-300 rounded-full text-xs">
                    {tag}
                  </span>
                {/each}
                {#if project.tags.length > 3}
                  <span class="inline-block px-2 py-1 bg-primary-900 text-gray-300 rounded-full text-xs">
                    +{project.tags.length - 3}
                  </span>
                {/if}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  
    <!-- Project Details Modal -->
    {#if selectedProject}
      <div 
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
        transition:fade={{ duration: 200 }}
        on:click|self={() => selectedProject = null}
      >
        <div 
          class="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          in:scale={{ start: 0.9, duration: 300 }}
          out:scale={{ end: 0.9, duration: 200 }}
        >
          <div class="sticky top-0 bg-gray-800 p-4 flex justify-between items-center border-b border-gray-700 z-10">
            <h3 class="text-2xl font-bold text-white">{selectedProject.title}</h3>
            <button 
              on:click={() => selectedProject = null}
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
                <span class="inline-block px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                  {tag}
                </span>
              {/each}
            </div>
  
            <div class="space-y-6 text-gray-300">
              <div>
                <h4 class="text-xl font-semibold text-white mb-2">Overview</h4>
                <p>{selectedProject.longDescription}</p>
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