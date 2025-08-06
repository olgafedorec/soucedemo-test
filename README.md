# SauceDemo Test Project

## Description
Site Testing [saucedemo.com](https://www.saucedemo.com) using WebdriverIO.

## How to run tests
Install dependencies: 
```bash
npm install
Run tests: 
```bash
npx wdio run wdio.conf.js

## Test coverage
Login
Logout
Saving the card after logout
Sorting
Footer links
Valid checkout
Checkout without products

## Known Issues
❗️The "sorting product by price low to high" test is currently failing.
Error: TypeError: object is not iterable
Possible cause: Price elements may not be updating properly after sorting.
This issue is being investigated.

