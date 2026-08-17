import type { RequestHandler } from './$types';
import { SITE_URL } from '$lib/constants/site';
import { projects } from '$lib/data/projects';

const pages = [
	{ path: '', changefreq: 'weekly', priority: '1.0' },
	{ path: '/about', changefreq: 'monthly', priority: '0.8' },
	{ path: '/projects', changefreq: 'weekly', priority: '0.9' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.7' }
] as const;

const escapeXml = (value: string) =>
	value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');

export const GET: RequestHandler = async () => {
	const lastModified = new Date().toISOString();
	const urls = [
		...pages,
		...projects.map((project) => ({
			path: `/projects/${project.id}`,
			changefreq: 'monthly',
			priority: '0.8'
		}))
	];

	const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${urls
		.map(
			({ path, changefreq, priority }) => `
	<url>
		<loc>${escapeXml(`${SITE_URL}${path}`)}</loc>
		<lastmod>${lastModified}</lastmod>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
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
