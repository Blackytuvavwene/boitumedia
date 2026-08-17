import type { RequestHandler } from './$types';
import { SITE_URL } from '$lib/constants/site';

export const GET: RequestHandler = async () => {
	const robotsTxt = `User-agent: *
Allow: /

Host: boitumedia.com
Sitemap: ${SITE_URL}/sitemap.xml
`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
