export interface Project {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	image: string;
	mobileImage?: string;
	tags: string[];
	category: 'flutter' | 'svelte' | 'python' | 'web' | 'mobile';
	categoryLabel: string;
	longDescription: string;
	challenges: string;
	results: string;
	features: string[];
	technologies: string[];
	liveLink: string;
	githubLink: string;
}

export const projects: Project[] = [
	{
		id: 'bots-safari-tours',
		title: 'Bots Safari Tours',
		subtitle: 'Full-Stack Safari Booking & Field Journal',
		description:
			'High-performance Botswana safari booking platform with day-by-day itinerary parsing, admin moderation panel, dynamic WebP image generation, and multi-language support.',
		image: '/projects/bots_safari_tours_desktop.png',
		mobileImage: '/projects/bots_safari_tours_mobile.png',
		tags: ['Svelte 5', 'SvelteKit', 'TypeScript', 'Tailwind CSS v4', 'PostgreSQL', 'Drizzle ORM'],
		category: 'svelte',
		categoryLabel: 'Svelte Web',
		longDescription:
			'Bots Safari Tours is a full-stack Botswana safari booking platform designed to showcase mobile camping packages and wildlife field journals. It features automated day-by-day itinerary extraction from package documents, server-side WebP responsive image variant generation via Sharp, role-based admin moderation, and compile-time multi-language support (English, Spanish, German, French).',
		challenges:
			'Parsing unstructured safari package itinerary documents into structured day-by-day interactive schedules while maintaining low latency, fast WebP image processing, and multi-language SEO schemas.',
		results:
			'Achieved rapid page load performance, dynamic multi-language SEO optimization, and seamless booking enquiry notifications via Resend transactional emails.',
		features: [
			'Curated mobile camping & safari package itineraries',
			'Role-based admin content panel (activities, gallery, blog moderation)',
			'Server-side WebP image generation & lightbox viewer',
			'Compile-time i18n (en, es, de, fr) via Paraglide',
			'Email notifications & admin enquiry response workflow via Resend',
			'Dynamic SEO & JSON-LD schemas derived from activity package documents'
		],
		technologies: [
			'Svelte 5',
			'SvelteKit',
			'TypeScript',
			'Tailwind CSS v4',
			'PostgreSQL',
			'Drizzle ORM',
			'better-auth',
			'Sharp',
			'Resend',
			'Paraglide i18n'
		],
		liveLink: 'https://botssafaritours.com',
		githubLink: 'https://github.com/Blackytuvavwene/bots-safari-tours'
	},
	{
		id: 'hustle-link',
		title: 'Hustle Link Botswana',
		subtitle: 'Jobs & Gigs Marketplace App',
		description:
			'Botswana-focused jobs and gigs marketplace application connecting local employers with hustlers (freelancers & job seekers) with role-based dashboards and Firebase backend.',
		image: '/projects/hustle_link_desktop.png',
		mobileImage: '/projects/hustle_link_mobile.png',
		tags: ['Flutter', 'Dart', 'Riverpod', 'Firebase', 'Firestore', 'Material 3'],
		category: 'flutter',
		categoryLabel: 'Flutter App',
		longDescription:
			'Hustle Link is a cross-platform mobile and web marketplace tailored specifically for Botswana-based job seekers ("hustlers") and businesses. Hustlers can create rich profiles, discover local gigs, apply for work, and track applications, while employers post jobs, manage listings, and review applicants in real time.',
		challenges:
			'Architecting smooth dual-role state management (Hustler vs. Employer onboarding & navigation) while maintaining fast real-time Firestore sync and localized Botswana Pula pricing workflows.',
		results:
			'Delivered a responsive cross-platform application with low-latency Firestore synchronization, secure Firebase authentication, and native mobile/desktop support.',
		features: [
			'Role-based user experiences for Hustlers and Employers',
			'Real-time job posting, application submission, and status tracking',
			'Profile management with photo uploads and portfolio showcases',
			'Firebase Authentication, Cloud Firestore, and Cloud Storage integration',
			'Material 3 responsive layout with micro-animations'
		],
		technologies: [
			'Flutter',
			'Dart',
			'Riverpod',
			'GoRouter',
			'Firebase Auth',
			'Cloud Firestore',
			'Firebase Storage',
			'Material 3'
		],
		liveLink: 'https://hustlelinkbots.com',
		githubLink: 'https://github.com/Blackytuvavwene/hustle_link'
	},
	{
		id: 'boitumedia-portfolio',
		title: 'Boitumedia SvelteKit Portfolio',
		subtitle: 'SvelteKit Web Application',
		description:
			'High-performance digital portfolio platform built with Svelte 5 runes, SvelteKit, and circuit trace canvas animations.',
		image: '/placeholder.svg?height=400&width=600',
		tags: ['Svelte 5', 'SvelteKit', 'TypeScript', 'Tailwind'],
		category: 'svelte',
		categoryLabel: 'Svelte Web',
		longDescription:
			'Custom developer portfolio designed with modern glassmorphic aesthetics, animated electronic circuit canvas, and full accessibility.',
		challenges:
			'Integrating real-time HTML5 Canvas animation loops smoothly alongside Svelte 5 rune state.',
		results: '100/100 Lighthouse performance score with 0 Svelte diagnostics errors.',
		features: [
			'Circuit canvas background',
			'Svelte 5 runes',
			'Dark/Light mode switch',
			'Responsive layout',
			'SEO optimization'
		],
		technologies: ['Svelte 5', 'SvelteKit', 'TypeScript', 'HTML5 Canvas', 'Tailwind CSS'],
		liveLink: 'https://boitumedia.com',
		githubLink: 'https://github.com/Blackytuvavwene/boitumedia'
	},
	{
		id: 'nthoma-connect',
		title: 'Nthoma Connect (Errand Hub)',
		subtitle: 'Local Errand & Service On-Demand Platform',
		description:
			'Dual-application local service ecosystem connecting clients needing tasks done with verified runners for grocery shopping, courier dispatches, reservations, and personal errands.',
		image: '/projects/nthoma_connect_desktop.png',
		mobileImage: '/projects/nthoma_connect_mobile.png',
		tags: ['Svelte 5', 'SvelteKit', 'TypeScript', 'Tailwind CSS', 'Supabase'],
		category: 'svelte',
		categoryLabel: 'Svelte Web',
		longDescription:
			'Nthoma Connect (Errand Hub) is a full-stack local service marketplace built on Svelte 5 and Supabase. It features dual workspaces: the Nthoma Client Portal (where users post tasks and hire trusted service providers) and the Bena Runner Portal (where verified runners discover and fulfill local errands). A central Admin Management Portal handles runner approvals and system moderation.',
		challenges:
			'Structuring role-based routing guards and database policies across three distinct web portals (Client, Runner, Admin) within a unified SvelteKit application architecture.',
		results:
			'Streamlined local errand dispatching with real-time Supabase authentication, location-based service filtering, and quick task posting workflows.',
		features: [
			'Dual application portals (Nthoma Client App & Bena Runner App)',
			'Admin Management Portal for runner verification and task supervision',
			'Priority service catalog (grocery delivery, dispatch, queuing, reservations)',
			'Role-based navigation guards and route protection',
			'Supabase Auth, Database, and Storage integration'
		],
		technologies: [
			'Svelte 5',
			'SvelteKit',
			'TypeScript',
			'Tailwind CSS',
			'Supabase',
			'Lucide Svelte'
		],
		liveLink: 'http://localhost:8080',
		githubLink: 'https://github.com/Blackytuvavwene/nthoma-connect'
	},
	{
		id: 'database-api-engine',
		title: 'Database Engine & API Automation',
		subtitle: 'Python & SQL Microservice',
		description:
			'Python REST API backend powered by PostgreSQL database pooling, automated task scheduling, and SQL query optimization.',
		image: '/placeholder.svg?height=400&width=600',
		tags: ['Python', 'FastAPI', 'PostgreSQL', 'SQL'],
		category: 'python',
		categoryLabel: 'Python & SQL',
		longDescription:
			'Backend API system designed to process incoming data payloads and execute optimized SQL database queries with connection pooling.',
		challenges: 'Preventing database connection bottlenecks under concurrent request traffic.',
		results: 'Reduced query execution latency by 45% using indexed SQL schemas.',
		features: [
			'Async REST API endpoints',
			'PostgreSQL pooling',
			'SQL indexing',
			'JSON Schema validation',
			'Automated logs'
		],
		technologies: ['Python 3', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Docker'],
		liveLink: 'https://example.com',
		githubLink: 'https://github.com/Blackytuvavwene'
	}
];
