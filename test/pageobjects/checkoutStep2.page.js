const Page = require('./page');

class CheckoutStep2Page extends Page {
    get finishBtn() {
        return $('#finish');
    }
    async finishOrder() {
        await this.finishBtn.click();
    }
}
const checkoutStep2Page = new CheckoutStep2Page();
module.exports = checkoutStep2Page;