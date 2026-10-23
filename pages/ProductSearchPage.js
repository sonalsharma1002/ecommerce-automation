
class ProductSearchPage {
  constructor(page) {
    this.page = page;

    this.electronicsCategory = page.locator(
      '.category-pill[data-category="electronics"]'
    );

    this.productCategories = page.locator(
      '.product-card .product-category'
    );
  }

  async open(url) {
    await this.page.goto(url);
  }

  async clickElectronicsCategory() {
    await this.electronicsCategory.waitFor({
      state: 'visible'
    });

    await this.electronicsCategory.click();
  }

  async getProductCategories() {
    return await this.productCategories.allTextContents();
  }


  // SHOP-CAT-03: Price range filter

  async applyPriceFilter(minPrice, maxPrice) {
    await this.page.locator('#price-min').fill(String(minPrice));
    await this.page.locator('#price-max').fill(String(maxPrice));
    await this.page.locator('#apply-price').click();
  }

  async getProductPrices() {
    const priceElements = this.page.locator('.product-price');
    const count = await priceElements.count();
    const prices = [];

    for (let i = 0; i < count; i++) {
      const text = await priceElements.nth(i).innerText();
      const match = text.replace(/,/g, '').match(/\d+(?:\.\d{1,2})?/);

      if (match) {
        prices.push(Number(match[0]));
      }
    }

    return prices;
  }

 //// SHOP-CAT-04: Sort products by price (ascending)
async sortPriceLowToHigh() {
  await this.page.locator('#sort-select').selectOption({
    label: 'Price: Low to High'
  });
}

async arePricesSortedAscending() {
  const prices = await this.getProductPrices();

  return prices.every(
    (price, index) => index === 0 || prices[index - 1] <= price
  );
}

}




module.exports = { ProductSearchPage };
