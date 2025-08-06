const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');

describe('add to cart tests', () => {
    it('should save product after logout', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.addToCart();
    
    const isCartCounterVisible = await InventoryPage.cartCounter.isDisplayed();
    expect(isCartCounterVisible).toBe(true);
    
    await InventoryPage.logout();
    await LoginPage.login('standard_user', 'secret_sauce');

    const isCartCounterVisibleNow = await InventoryPage.cartCounter.isDisplayed();
    expect(isCartCounterVisibleNow).toBe(true);
});

it('should not allow checkout with empty cart', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');

    await InventoryPage.cartBtn.click();

    const items = await CartPage.cartItems;
    if (items.length > 0) {
        for (const item of items) {
            const removeBtn = await item.$('button[data-test^="remove-"]');
            await removeBtn.click();
        }
    }

    await CartPage.toCheckout();

    const isErrorVisible = await CartPage.isErrorMessageDisplayed();
    expect(isErrorVisible).toBe(true, 'Expected error message to be displayed when checking out with empty cart');
});

});