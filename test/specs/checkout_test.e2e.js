const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CheckoutStep1Page = require('../pageobjects/checkoutStep1.page');
const CheckoutStep2Page = require('../pageobjects/checkoutStep2.page');
const CheckoutCompletePage = require('../pageobjects/checkoutComplete.page');
const CartPage = require('../pageobjects/cart.page');

describe('Checkout flow', () => {
    it('should complete full checkout process', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.addToCart();
        expect(await InventoryPage.cartCounter.getText()).toBe('1');

        await InventoryPage.cartBtn.click();

        await CartPage.toCheckout();

        await CheckoutStep1Page.fillForm('John', 'Doe', '12345');
        await CheckoutStep1Page.continueCheckout();

        const url = await browser.getUrl();
        expect(url).toContain('checkout-step-two');

        await CheckoutStep2Page.finishOrder();

        expect(await CheckoutCompletePage.thankYouMessage.getText()).toContain('Thank you for your order!');

        await CheckoutCompletePage.backToHome();
        expect(await browser.getUrl()).toContain('inventory');

        const cartBadgeExists = await InventoryPage.cartCounter.isExisting();
        expect(cartBadgeExists).toBe(false);
    });
});