const { browser } = require('@wdio/globals');
const BASE_URL = 'https://www.saucedemo.com';

module.exports = class Page {
    /**
     * Open subpage with relative path
     * @param {string} path - relative path ('' or '/inventory.html')
     */ 

    open (path = '') {
        return browser.url(`${BASE_URL}${path}`);
    }

}

