// Centralized string constants personalized for Boitumelo Tubabwene
export class HomePageStrings {
	static readonly SITE_NAME = 'Boitumedia';
	static readonly OWNER_NAME = 'Boitumelo Tubabwene';
	static readonly LOCATION = 'Botswana';
	static readonly TITLE = 'Self-Taught Developer & Tech Specialist';

	static readonly HERO_PARAGRAPH = `I'm Boitumelo Tubabwene, a self-taught developer based in Botswana. I build mobile apps with Flutter, web solutions using the Svelte ecosystem, and scalable backends powered by Python & SQL. Currently advancing my technical capabilities through the Google IT Support Professional Certificate.`;

	// hero buttons
	static readonly HERO_PRIMARY_BUTTON = 'Explore Projects';
	static readonly HERO_SECONDARY_BUTTON = 'Get In Touch';

	// services / skills offered
	static readonly SERVICES_TITLE = 'Core Stack & Expertise';
	static readonly services = {
		FLUTTER_DEV: {
			title: 'Flutter Mobile Engineering',
			description:
				'Cross-platform native iOS & Android applications built with clean architecture and smooth 60fps animations.',
			ariaLabel: 'Flutter Mobile Engineering: Cross-platform native iOS & Android apps.'
		},
		SVELTE_DEV: {
			title: 'Svelte & SvelteKit Web Apps',
			description:
				'Lightning-fast, reactive web interfaces built with Svelte 5, SvelteKit, TypeScript, and modern styling.',
			ariaLabel: 'Svelte & SvelteKit Web Apps: Fast reactive interfaces.'
		},
		PYTHON_BACKEND: {
			title: 'Python & API Development',
			description:
				'Scalable backend microservices, RESTful APIs, data processing pipelines, and automation scripts using Python.',
			ariaLabel: 'Python & API Development: Microservices and automation.'
		},
		DATABASE_SQL: {
			title: 'SQL & Database Architecture',
			description:
				'Relational database design, query optimization, data modeling, and administration across PostgreSQL, MySQL, & SQLite.',
			ariaLabel: 'SQL & Database Architecture: Database design and modeling.'
		}
	};

	// homepage projects section
	static readonly PROJECTS_TITLE = 'Featured Work';
	static readonly PROJECTS_SUBTITLE =
		'Highlights of projects crafted with Flutter, SvelteKit, Python, and SQL.';
}
