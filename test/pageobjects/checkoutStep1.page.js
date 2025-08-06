const Page = require('./page');

class CheckoutStep1Page extends Page {
    get firstNameInput() { 
        return $('#first-name'); 
    }
    
    get lastNameInput() { 
        return $('#last-name'); 
    }
    
    get postalCodeInput() { 
        return $('#postal-code'); 
    }
    
    get continueBtn() { 
        return $('#continue'); 
    }

    async fillForm(firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
    }

    async continueCheckout() {
        await this.continueBtn.click();
    }
}

module.exports = new CheckoutStep1Page();