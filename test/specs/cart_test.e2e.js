const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');
const cartPage = require('../pageobjects/cart.page');

describe('Add to cart tests', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });
    it('should save product after logout', async () => {
        await inventoryPage.addToCart();
        await expect (inventoryPage.cartCounter).toBeDisplayed();
        await inventoryPage.logout();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect (inventoryPage.cartCounter).toBeDisplayed();
    });
    it('should not allow checkout with empty cart', async () => {
        await inventoryPage.openCart();
        const items = await cartPage.cartItems;
        if (items.length) {
            for (const _ of items) {
                await cartPage.toRemove();
            }
        }
        await cartPage.toCheckout();
        await expect (cartPage.errorMessage).toBeDisplayed();
    });
});