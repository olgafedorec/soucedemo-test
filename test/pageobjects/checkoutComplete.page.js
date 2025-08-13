const Page = require('./page');

class CheckoutCompletePage extends Page {
    get thankYouMessage() {
        return $('.complete-header');
    }
    get backHomeBtn() {
        return $('#back-to-products');
    }
    async backToHome() {
        await this.backHomeBtn.click();
    }
}
const checkoutCompletePage = new CheckoutCompletePage();
module.exports = checkoutCompletePage;