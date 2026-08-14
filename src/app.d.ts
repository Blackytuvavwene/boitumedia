// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			title?: string;
			description?: string;
			keywords?: string;
			canonicalUrl?: string;
			ogImage?: string;
			ogType?: string;
			noindex?: boolean;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
