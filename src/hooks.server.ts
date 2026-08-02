import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);
	const pathname = event.url.pathname;

	// 1. Efficient Cache Lifetimes for Static Assets & Immutable Bundles
	if (
		pathname.startsWith('/_app/immutable/') ||
		pathname.endsWith('.jpg') ||
		pathname.endsWith('.png') ||
		pathname.endsWith('.webp') ||
		pathname.endsWith('.svg') ||
		pathname.endsWith('.woff2') ||
		pathname.endsWith('.css') ||
		pathname.endsWith('.js')
	) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (!response.headers.has('Cache-Control')) {
		// 2. Cache Lifetimes for Dynamic HTML/SSR Routes (1 hr browser, 24 hr CDN with SWR)
		response.headers.set(
			'Cache-Control',
			'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800'
		);
	}

	// 3. Security & Performance Headers
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-XSS-Protection', '1; mode=block');

	return response;
};
