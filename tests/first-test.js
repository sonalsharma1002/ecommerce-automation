
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();

  await page.goto('https://www.playwright.dev/');

  console.log('Page title:', await page.title());

  await browser.close();
})();
