const { expect } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('login tests', () => {
    it('should login with valid login', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    const url = await browser.getUrl();
    expect(url).toContain("inventory");
});

  it('should login with wrong password', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'wrong-pass');
    const error = await LoginPage.getErrorText();
    expect(error).toContain('Username and password do not match');
});

  it('should login with wrong login', async () => {
    await LoginPage.open();
    await LoginPage.login('wrong-user', 'secret_sauce');
    const error = await LoginPage.getErrorText();
    expect(error).toContain('Username and password do not match');  
});

it("should logout after valid login", async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    const url = await browser.getUrl();
    expect(url).toContain("inventory");
    await InventoryPage.logout();
    const logoutUrl = await browser.getUrl();
    expect(logoutUrl).toBe("https://www.saucedemo.com/");
});
});

