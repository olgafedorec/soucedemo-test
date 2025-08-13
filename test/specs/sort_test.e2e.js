const loginPage = require('../pageobjects/login.page');
const inventoryPage = require('../pageobjects/inventory.page');

describe('should sort products', () => {
    const sortingTests = [
        {option: 'lohi', type: 'price', order: 'asc'},
        {option: 'hilo', type: 'price', order: 'desc'},
        {option: 'az', type: 'name', order: 'asc'},
        {option: 'za', type: 'name', order: 'desc'}
    ];

    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    sortingTests.forEach(({ option, type, order }) => {
        it(`should sort products by ${type} ${order}`, async() => {
            await inventoryPage.selectSortOption(option);
            let items;
            if(type === 'price') {
                items = await inventoryPage.getPriceArray();
            } else {
                items = await inventoryPage.getNamesArray();
            }

            const sortedItems = [...items].sort((a, b) => {
                if(type === 'price') {
                    return order === 'asc' ? a - b : b - a;
                } else {
                    return order === 'asc' ? a.localeCompare(b) : b.localeCompare(a);
                }
            });
            expect(items).toEqual(sortedItems);
        });
    });
});