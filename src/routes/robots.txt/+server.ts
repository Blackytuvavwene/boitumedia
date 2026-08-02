import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://boitumedia.xyz/sitemap.xml
`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
