const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const checkoutStep1Page = require('../pageobjects/checkoutStep1.page');
const checkoutStep2Page = require('../pageobjects/checkoutStep2.page');
const checkoutCompletePage = require('../pageobjects/checkoutComplete.page');
const cartPage = require('../pageobjects/cart.page');

describe('Checkout flow', () => {
    it('should complete full checkout process', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.addToCart();
        expect(await inventoryPage.cartCounter.getText()).toContain('1');
        await inventoryPage.clickElement(inventoryPage.cartBtn);
        await cartPage.toCheckout();
        await checkoutStep1Page.fillForm('John', 'Doe', '12345');
        await checkoutStep1Page.continueCheckout();
        const url = await browser.getUrl();
        expect(url).toContain('checkout-step-two');
        await checkoutStep2Page.finishOrder();
        expect(await checkoutCompletePage.thankYouMessage.getText()).toContain('Thank you for your order!');
        await inventoryPage.clickElement(checkoutCompletePage.backHomeBtn);
        expect(await browser.getUrl()).toContain('inventory');
        await expect(inventoryPage.cartCounter).not.toBeExisting();
    });
});