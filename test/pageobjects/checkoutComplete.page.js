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

module.exports = new CheckoutCompletePage();