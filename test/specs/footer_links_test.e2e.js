const { expect, browser } = require('@wdio/globals');
const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

// describe('social media links in the footer', () => {
//     it('open twitter in a new tab', async () => {
//     await LoginPage.open();
//     await LoginPage.login('standard_user', 'secret_sauce');
//     await InventoryPage.clickTwitter();

//     const handles = await browser.getWindowHandles();
//     expect(handles.length).toBeGreaterThan(1);

//     await browser.switchToWindow(handles[1]); 

//      await browser.waitUntil(
//       async () => {
//         const url = await browser.getUrl();
//         return url !== 'about:blank';
//       },
//       {
//         timeout: 10000,
//         timeoutMsg: 'URL did not change from about:blank in time'
//       }
//     );

//     const url = await browser.getUrl();
//     expect(url.includes('x.com') || url.includes('twitter.com')).toBe(true);

//     const title = await browser.getTitle();
//     expect(title.toLowerCase()).toContain('sauce');

//     await browser.closeWindow();
//     await browser.switchToWindow(handles[0]);
//   });

// });

describe('Social media links in the footer', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should open Twitter in a new tab', async () => {
        await InventoryPage.clickTwitter();
        const handles = await browser.getWindowHandles();
        expect(handles.length).toBeGreaterThan(1);

        await browser.switchToWindow(handles[1]);
        const url = await browser.getUrl();
        expect(url).toContain('x.com');

        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });

    it('should open Facebook in a new tab', async () => {
        await InventoryPage.clickFacebook();
        const handles = await browser.getWindowHandles();
        expect(handles.length).toBeGreaterThan(1);

        await browser.switchToWindow(handles[1]);
        const url = await browser.getUrl();
        expect(url).toContain('facebook');

        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });

    it('should open Linkedin in a new tab', async () => {
        await InventoryPage.clickLinkedin();
        const handles = await browser.getWindowHandles();
        expect(handles.length).toBeGreaterThan(1);

        await browser.switchToWindow(handles[1]);
        const url = await browser.getUrl();
        expect(url).toContain('linkedin');

        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });
});