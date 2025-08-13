const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('login tests', () => {
  beforeEach(async () => {
          await loginPage.open();
      });
    it('should login with valid login', async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    const url = await browser.getUrl();
    expect(url).toContain("inventory");
});
  it('should login with wrong password', async () => {
    await loginPage.login('standard_user', 'wrong-pass');
    const error = await loginPage.getErrorText();
    expect(error).toContain('Username and password do not match');
});
  it('should login with wrong login', async () => {
    await loginPage.login('wrong-user', 'secret_sauce');
    const error = await loginPage.getErrorText();
    expect(error).toContain('Username and password do not match');  
});
it("should logout after valid login", async () => {
    await loginPage.login('standard_user', 'secret_sauce');
    const url = await browser.getUrl();
    expect(url).toContain("inventory");
    await inventoryPage.logout();
    const logoutUrl = await browser.getUrl();
    expect(logoutUrl).toBe("https://www.saucedemo.com/");
});
});

