import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const siteUrl = 'https://boitumedia.xyz';
	const pages = [
		'',
		'/about',
		'/projects',
		'/projects/1',
		'/projects/2',
		'/projects/3',
		'/contact'
	];

	const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${pages
		.map(
			(page) => `
	<url>
		<loc>${siteUrl}${page}</loc>
		<lastmod>${new Date().toISOString()}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`
		)
		.join('')}
</urlset>`;

	return new Response(sitemapXml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
