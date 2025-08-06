const Page = require('./page');

class CheckoutStep2Page extends Page {
    get finishBtn() {
        return $('#finish');
    }

    async finishOrder() {
        await this.finishBtn.click();
    }
}

module.exports = new CheckoutStep2Page();