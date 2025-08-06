const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('sorting products', () => {
    it('should sort product by price low to high', async () => {
     console.log('Test started');   
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.selectLohi();
    
    const prices = await InventoryPage.getPricesArray();

    const sortedAsc = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(sortedAsc);
});

it('should sort product by price a to z', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.selectAz();
    
});

it('should sort product by price z to a', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.selectZa();
    
});

});