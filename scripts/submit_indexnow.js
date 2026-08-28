/**
 * IndexNow Submission Script for Boitumedia
 * Submits all pages to IndexNow API (Bing, Yandex, etc.)
 */

const HOST = 'boitumedia.com';
const SITE_URL = `https://${HOST}`;
const KEY = '333a346dfeb741fb87b22c3030ddcc2b';
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;

// Current site pages and project routes
const URL_LIST = [
	`${SITE_URL}/`,
	`${SITE_URL}/about`,
	`${SITE_URL}/projects`,
	`${SITE_URL}/contact`,
	`${SITE_URL}/projects/bots-safari-tours`,
	`${SITE_URL}/projects/hustle-link`,
	`${SITE_URL}/projects/boitumedia-portfolio`,
	`${SITE_URL}/projects/nthoma-connect`,
	`${SITE_URL}/projects/database-api-engine`
];

async function submitIndexNow() {
	console.log('\n🚀 Starting IndexNow submission for Boitumedia...');
	console.log(`🌐 Host: ${HOST}`);
	console.log(`🔑 Key: ${KEY}`);
	console.log(`📍 Key Location: ${KEY_LOCATION}`);
	console.log(`📄 Total URLs to submit: ${URL_LIST.length}\n`);

	const payload = {
		host: HOST,
		key: KEY,
		keyLocation: KEY_LOCATION,
		urlList: URL_LIST
	};

	const endpoints = [
		{ name: 'IndexNow API (Standard)', url: 'https://api.indexnow.org/indexnow' },
		{ name: 'Bing IndexNow', url: 'https://www.bing.com/indexnow' }
	];

	for (const endpoint of endpoints) {
		try {
			console.log(`📡 Submitting to ${endpoint.name} (${endpoint.url})...`);
			const res = await fetch(endpoint.url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(payload)
			});

			console.log(`   Status: ${res.status} ${res.statusText}`);
			if (res.status === 200 || res.status === 202) {
				console.log(`   ✅ Success: URLs accepted by ${endpoint.name}`);
			} else {
				const bodyText = await res.text();
				console.warn(`   ⚠️ Response body: ${bodyText || '(empty)'}`);
			}
		} catch (err) {
			console.error(`   ❌ Error connecting to ${endpoint.name}:`, err.message);
		}
		console.log('');
	}

	console.log('✨ IndexNow submission process completed.\n');
}

submitIndexNow();
