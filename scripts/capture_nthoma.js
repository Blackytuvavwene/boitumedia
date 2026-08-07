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

const targetUrl = 'http://localhost:8080/';

async function capture() {
	const browser = await chromium.launch({ headless: true });

	console.log(`Navigating to ${targetUrl}...`);

	// Desktop Screenshot
	const desktopContext = await browser.newContext({
		viewport: { width: 1440, height: 900 }
	});
	const desktopPage = await desktopContext.newPage();
	await desktopPage.goto(targetUrl, { waitUntil: 'networkidle', timeout: 15000 });
	await desktopPage.waitForTimeout(2000);
	const desktopPath = path.join(outputDir, 'nthoma_connect_desktop.png');
	await desktopPage.screenshot({ path: desktopPath, fullPage: false });
	console.log(`Saved desktop screenshot to ${desktopPath}`);
	await desktopContext.close();

	// Mobile Screenshot
	const mobileContext = await browser.newContext({
		...devices['iPhone 13'],
		viewport: { width: 390, height: 844 }
	});
	const mobilePage = await mobileContext.newPage();
	await mobilePage.goto(targetUrl, { waitUntil: 'networkidle', timeout: 15000 });
	await mobilePage.waitForTimeout(2000);
	const mobilePath = path.join(outputDir, 'nthoma_connect_mobile.png');
	await mobilePage.screenshot({ path: mobilePath, fullPage: false });
	console.log(`Saved mobile screenshot to ${mobilePath}`);
	await mobileContext.close();

	await browser.close();
	console.log('Finished capturing nthoma-connect screenshots!');
}

capture().catch((err) => {
	console.error('Error capturing screenshots:', err);
	process.exit(1);
});
