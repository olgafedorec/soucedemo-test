const Page = require('./page');

class InventoryPage extends Page {
    get burgerBtn() { 
        return $('.bm-burger-button'); 
    }
    get burgerMenu() { 
        return $('.bm-menu'); 
    }
    get logoutBtn() { 
        return $('#logout_sidebar_link'); 
    }
    get cartBtn() { 
        return $('.shopping_cart_link'); 
    }
    get cartCounter() { 
        return $('.shopping_cart_badge'); 
    }
    get inventoryItem() { 
        return $('.inventory_item'); 
    }
    get firstAddToCartBtn() { 
        return $('button[data-test="add-to-cart-sauce-labs-backpack"]'); 
    }
    get sortOption() { 
        return $('.product_sort_container'); 
    }
    get namesElements() { 
        return $$('.inventory_item_name'); 
    }
    get priceElements() {
        return $$('.inventory_item_price');
    }
    get twitterIcon() { 
        return $('a[href="https://twitter.com/saucelabs"]'); 
    }
    get facebookIcon() { 
        return $('a[href="https://www.facebook.com/saucelabs"]'); 
    }
    get linkedinIcon() { 
        return $('a[href="https://www.linkedin.com/company/sauce-labs/"]'); 
    }
    async clickElement(element) {
        await element.waitForExist({ timeout: 5000 });
        await element.click();
    }
    async selectSortOption(value) {
        await this.sortOption.waitForExist({ timeout: 5000 });
        await this.sortOption.selectByAttribute('value', value);
    }
    async getNamesArray() {
        const elems = await $$('.inventory_item_name'); 
    const names = [];
    for (const el of elems) {
        names.push(await el.getText());
    }
    return names;
    }
    async getPriceArray() {
        const elems = await $$('.inventory_item_price');
    const prices = [];
    for (const el of elems) {
        const text = await el.getText();
        prices.push(parseFloat(text.replace('$', '')));
    }
    return prices;
    }
    async openCart() {
        await this.clickElement(this.cartBtn);
    }
    async logout() {
        await this.clickElement(this.burgerBtn);
        await this.clickElement(this.logoutBtn);
    }
    async addToCart() {
        await this.clickElement(this.firstAddToCartBtn);
    }
}

module.exports = new InventoryPage();