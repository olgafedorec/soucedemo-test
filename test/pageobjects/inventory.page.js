const { $ } = require('@wdio/globals')
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

    async openCart() {
        await this.cartBtn.click();
    }

    async getPriceElements() {
        return await $$('.inventory_item_price');
    }

    get namesElements() {
        return $$('.inventory_item_name');
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

    async logout () {
        await this.burgerBtn.waitForExist({ timeout: 5000 });
        await this.burgerBtn.click();
        await this.logoutBtn.click();
    }

    async addToCart () {
        await this.firstAddToCartBtn.click();
    }

    async selectAz () {
        await this.sortOption.selectByAttribute('value', 'az');
    }

    async selectZa () {
        await this.sortOption.selectByAttribute('value', 'za');
    }

    async selectLohi () {
        await this.sortOption.selectByAttribute('value', 'lohi');
    }

    async selectHilo () {
        await this.sortOption.selectByAttribute('value', 'hilo');
    }

    async getPricesArray () {
        await $('.inventory_item_price').waitForExist({ timeout: 5000 });
        const elements = await this.getPriceElements();
        const prices = await Promise.all(
              elements.map(async el => {
            const text = await el.getText(); 
            return parseFloat(text.replace('$', '')); 
        })
        );
        return prices;
    }
    
    async getNamesArray () {
        const elements = await this.namesElements;
        return Promise.all(elements.map(async el => el.getText()));
    }

    async clickTwitter () {
        await this.twitterIcon.waitForExist({ timeout: 5000 });
        await this.twitterIcon.click();
    }

    async clickFacebook () {
        await this.facebookIcon.waitForExist({ timeout: 5000 });
        await this.facebookIcon.click();
    }

    async clickLinkedin () {
        await this.linkedinIcon.waitForExist({ timeout: 5000 });
        await this.linkedinIcon.click();
    }


}

module.exports = new InventoryPage();