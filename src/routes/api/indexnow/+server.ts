import { json, type RequestHandler } from '@sveltejs/kit';
import { SITE_URL } from '$lib/constants/site';
import { projects } from '$lib/data/projects';
import { submitToIndexNow } from '$lib/server/indexnow';

const basePages = ['', '/about', '/projects', '/contact'];

function getAllSiteUrls(): string[] {
	const projectUrls = projects.map((p) => `/projects/${p.id}`);
	return [...basePages, ...projectUrls].map((path) => `${SITE_URL}${path}`);
}

export const GET: RequestHandler = async () => {
	const urls = getAllSiteUrls();
	const result = await submitToIndexNow(urls);
	return json(
		{
			...result,
			urls
		},
		{ status: result.status >= 200 && result.status < 300 ? 200 : result.status }
	);
};

export const POST: RequestHandler = async ({ request }) => {
	let urls: string[] = [];

	try {
		const body = await request.json();
		if (Array.isArray(body?.urls) && body.urls.length > 0) {
			urls = body.urls;
		}
	} catch {
		// If body is empty or not JSON, fallback to all site URLs
	}

	if (urls.length === 0) {
		urls = getAllSiteUrls();
	}

	const result = await submitToIndexNow(urls);
	return json(
		{
			...result,
			urls
		},
		{ status: result.status >= 200 && result.status < 300 ? 200 : result.status }
	);
};
