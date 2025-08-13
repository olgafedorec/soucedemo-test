const Page = require('./page');

class CartPage extends Page {
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
    async toRemove() {
        await this.removeBtn.click();
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
const cartPage = new CartPage();
module.exports = cartPage;