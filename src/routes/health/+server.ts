import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return json(
		{
			status: 'ok',
			timestamp: new Date().toISOString(),
			uptime: typeof process !== 'undefined' ? process.uptime() : 0
		},
		{
			headers: {
				'Cache-Control': 'no-store, no-cache, must-revalidate'
			}
		}
	);
};
