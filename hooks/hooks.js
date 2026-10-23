
const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Before(async function () {
  //console.log('Before hook started');

  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();

  //console.log('Page created:', !!this.page);
});

After(async function () {
  //console.log('After hook started');

  if (this.browser) {
    await this.browser.close();
  }
});
