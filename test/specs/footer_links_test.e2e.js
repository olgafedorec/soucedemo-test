const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('Social media links in the footer', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });
    async function testSocialLink(element, expectedUrl) {
        await element.scrollIntoView();
        await inventoryPage.clickElement(element);
        const handles = await browser.getWindowHandles();
        expect(handles.length).toBeGreaterThan(1);
        await browser.switchToWindow(handles[1]);
        await browser.waitUntil(async() => (await browser.getUrl()).includes(expectedUrl), 
        {
            timeout: 5000,   
        });
        const url = await browser.getUrl();
        expect(url).toContain(expectedUrl);
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    }
    it('should open Twitter in a new tab', async () => {
        await testSocialLink(inventoryPage.twitterIcon, 'x');
    });
    it('should open Facebook in a new tab', async () => {
        await testSocialLink(inventoryPage.facebookIcon, 'facebook');
    });
    it('should open Linkedin in a new tab', async () => {
        await testSocialLink(inventoryPage.linkedinIcon, 'linkedin');
    });
});