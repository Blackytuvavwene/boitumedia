import { chromium } from 'playwright';

async function checkLive() {
	const browser = await chromium.launch({ headless: true });
	const context = await browser.newContext({
		viewport: { width: 1440, height: 900 }
	});
	const page = await context.newPage();

	console.log('Navigating to https://boitumedia.com/projects...');
	await page.goto('https://boitumedia.com/projects', { waitUntil: 'networkidle', timeout: 30000 });
	await page.waitForTimeout(3000);

	const content = await page.content();
	console.log('Page title:', await page.title());

	const projectTitles = await page.$$eval('h3', (elements) =>
		elements.map((el) => el.textContent.trim())
	);
	console.log('Project titles found on live site:', projectTitles);

	await page.screenshot({ path: 'static/projects/live_boitumedia_projects.png' });
	console.log('Saved live site screenshot to static/projects/live_boitumedia_projects.png');

	await browser.close();
}

checkLive().catch((err) => {
	console.error('Error checking live site:', err);
	process.exit(1);
});
