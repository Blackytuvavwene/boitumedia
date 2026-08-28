import { SITE_URL, INDEXNOW_KEY, INDEXNOW_KEY_LOCATION } from '$lib/constants/site';

export interface IndexNowResponse {
	success: boolean;
	status: number;
	message: string;
	urlCount: number;
}

/**
 * Submits a single URL or a list of URLs to IndexNow search engines.
 * IndexNow automatically shares submitted URLs across participating search engines (Bing, Yandex, Naver, Seznam, etc.).
 */
export async function submitToIndexNow(urls: string | string[]): Promise<IndexNowResponse> {
	const host = new URL(SITE_URL).host;
	const urlList = (Array.isArray(urls) ? urls : [urls]).map((url) =>
		url.startsWith('http') ? url : `${SITE_URL}${url.startsWith('/') ? '' : '/'}${url}`
	);

	if (urlList.length === 0) {
		return {
			success: false,
			status: 400,
			message: 'No URLs provided for submission',
			urlCount: 0
		};
	}

	const payload = {
		host,
		key: INDEXNOW_KEY,
		keyLocation: INDEXNOW_KEY_LOCATION,
		urlList
	};

	try {
		const response = await fetch('https://api.indexnow.org/indexnow', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(payload)
		});

		const status = response.status;
		const isSuccess = status === 200 || status === 202;

		let message = '';
		switch (status) {
			case 200:
				message = 'IndexNow accepted the submission directly (OK).';
				break;
			case 202:
				message = 'IndexNow key received and validated; URLs queued for indexing (Accepted).';
				break;
			case 400:
				message = 'Invalid request format or invalid parameters.';
				break;
			case 403:
				message = 'Key not found or does not match keyLocation verification.';
				break;
			case 422:
				message = 'URLs don\'t belong to host or key doesn\'t match schema.';
				break;
			case 429:
				message = 'Too many requests / rate limited.';
				break;
			default:
				message = `IndexNow responded with HTTP status ${status}.`;
				break;
		}

		return {
			success: isSuccess,
			status,
			message,
			urlCount: urlList.length
		};
	} catch (error) {
		return {
			success: false,
			status: 500,
			message: error instanceof Error ? error.message : 'Unknown network error',
			urlCount: urlList.length
		};
	}
}
