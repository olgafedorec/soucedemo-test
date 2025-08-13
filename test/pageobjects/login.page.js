const Page = require('./page');

class LoginPage extends Page {
    get usernameInput () {
        return $('#user-name');
    }
    get passwordInput () {
        return $('#password');
    }
    get loginBtn () {
        return $('#login-button');
    }
    get errorMessage () {
        return $('.error-message-container');
    }
    async open () {
        return super.open('');
    }
    async login (username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    }
    async getErrorText() {
        return await this.errorMessage.getText();
    }
}

const loginPage = new LoginPage();
module.exports = loginPage;
