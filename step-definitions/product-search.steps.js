
const { Given, When, Then } = require('@cucumber/cucumber');
const { ProductSearchPage } = require('../pages/ProductSearchPage');

Given('the customer opens the e-commerce application', async function () {
  this.productSearchPage = new ProductSearchPage(this.page);

  await this.productSearchPage.open(
    'https://www.playwrightpad.com/sandbox/ecommerce'
  );
});

When('the customer clicks the Electronics category', async function () {
  await this.productSearchPage.clickElectronicsCategory();
});

Then('only Electronics products should be displayed', async function () {
  const categories =
    await this.productSearchPage.getProductCategories();

  console.log('Displayed product categories:', categories);

  if (categories.length === 0) {
    throw new Error('No products displayed after clicking Electronics');
  }

  const nonElectronics = categories.filter(
    category => category.trim().toLowerCase() !== 'electronics'
  );

  if (nonElectronics.length > 0) {
    throw new Error(
      `Non-Electronics products found: ${nonElectronics.join(', ')}`
    );
  }

  console.log('Electronics filter verified successfully');
});






//shopcat-03: Price range filter

Given('Given the customer opens the e-commerce application', async function () {
  this.productSearchPage = new ProductSearchPage(this.page);

  await this.productSearchPage.open(
    'https://www.playwrightpad.com/sandbox/ecommerce'
  );
});

When('the customer applies a price range from {int} to {int}', async function (min, max) {
  await this.productSearchPage.applyPriceFilter(min, max);
});

Then('all displayed products should be within the selected price range', async function () {
  const prices = await this.productSearchPage.getProductPrices();

  console.log('Displayed prices:', prices);

  if (prices.length === 0) {
    throw new Error('No product prices found after applying filter');
  }

  const invalidPrices = prices.filter(
    price => price < 50 || price > 150
  );

  if (invalidPrices.length > 0) {
    throw new Error(
      `Products outside the $50-$150 range: ${invalidPrices.join(', ')}`
    );
  }

  console.log('Price range filter verified successfully');
});



//shopcat-04: Sort products by price (ascending)

When(
  'the customer sorts products by price from low to high',
  async function () {
    await this.productSearchPage.sortPriceLowToHigh();
  }
);

Then(
  'products should be displayed in ascending price order',
  async function () {
    const isSorted =
      await this.productSearchPage.arePricesSortedAscending();

    const prices =
      await this.productSearchPage.getProductPrices();

    console.log('Prices after sorting:', prices);

    if (!isSorted) {
      throw new Error('Products are not sorted by ascending price');
    }

    console.log('Ascending price sorting verified successfully');
  }
);

