const { $ } = require('@wdio/globals')
const Page = require('./page');

class CartPage extends Page {
    // get cartItem () {
    //     return $('.cart_item');
    // }

     get cartItems() {
        return $$('.cart_item');
    }

    get cartItem() {
        return this.cartItems[0]; 
    }

    get removeBtn() {
        return $('button[data-test^="remove-"]');
    }

    get checkoutBtn () {
        return $('#checkout');
    }

    get errorMessage() {
        return $('.error-message-container'); 
    }

     async toCheckout() {
        await this.checkoutBtn.click();
    }

    async open (path = 'cart.html') {
        return super.open(path);
    }

    async isErrorMessageDisplayed() {
        return await this.errorMessage.isDisplayed();
    }

    async getErrorText() {
        return await this.errorMessage.getText();
    }

}

module.exports = new CartPage();