import { chromium, devices } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '..', 'static', 'projects');
if (!fs.existsSync(outputDir)) {
	fs.mkdirSync(outputDir, { recursive: true });
}

const targets = [
	{
		name: 'bots_safari_tours',
		url: 'https://botssafaritours.com'
	},
	{
		name: 'hustle_link',
		url: 'https://hustlelinkbots.com'
	}
];

async function capture() {
	const browser = await chromium.launch({ headless: true });

	for (const target of targets) {
		console.log(`Navigating to ${target.url}...`);

		// Desktop Screenshot
		const desktopContext = await browser.newContext({
			viewport: { width: 1440, height: 900 }
		});
		const desktopPage = await desktopContext.newPage();
		try {
			await desktopPage.goto(target.url, { waitUntil: 'networkidle', timeout: 30000 });
		} catch (e) {
			console.log(`Load timeout for ${target.url}, taking screenshot anyway...`);
		}
		await desktopPage.waitForTimeout(2000);
		const desktopPath = path.join(outputDir, `${target.name}_desktop.png`);
		await desktopPage.screenshot({ path: desktopPath, fullPage: false });
		console.log(`Saved desktop screenshot to ${desktopPath}`);
		await desktopContext.close();

		// Mobile Screenshot (iPhone 13 / Pixel 5 style)
		const mobileContext = await browser.newContext({
			...devices['iPhone 13'],
			viewport: { width: 390, height: 844 }
		});
		const mobilePage = await mobileContext.newPage();
		try {
			await mobilePage.goto(target.url, { waitUntil: 'networkidle', timeout: 30000 });
		} catch (e) {
			console.log(`Load timeout for mobile ${target.url}, taking screenshot anyway...`);
		}
		await mobilePage.waitForTimeout(2000);
		const mobilePath = path.join(outputDir, `${target.name}_mobile.png`);
		await mobilePage.screenshot({ path: mobilePath, fullPage: false });
		console.log(`Saved mobile screenshot to ${mobilePath}`);
		await mobileContext.close();
	}

	await browser.close();
	console.log('Finished capturing all screenshots!');
}

capture().catch((err) => {
	console.error('Error capturing screenshots:', err);
	process.exit(1);
});
