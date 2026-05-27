const { expect } = require('@playwright/test');

class LoginPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        
        // Existing Login Locators
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.getByRole('button', { name: 'Log In' });
        this.registrationLink = page.getByRole('link', { name: 'Register' });

        // New Registration Form Locators (Syllabus: Locating Web Elements)
        this.firstNameInput = page.locator('input[id="customer\\.firstName"]');
        this.lastNameInput = page.locator('input[id="customer\\.lastName"]');
        this.addressInput = page.locator('input[id="customer\\.address\\.street"]');
        this.cityInput = page.locator('input[id="customer\\.address\\.city"]');
        this.stateInput = page.locator('input[id="customer\\.address\\.state"]');
        this.zipCodeInput = page.locator('input[id="customer\\.address\\.zipCode"]');
        this.phoneInput = page.locator('input[id="customer\\.phoneNumber"]');
        this.ssnInput = page.locator('input[id="customer\\.ssn"]');
        
        // Username and Password for creating new account
        this.regUsernameInput = page.locator('input[id="customer\\.username"]');
        this.regPasswordInput = page.locator('input[id="customer\\.password"]');
        this.regConfirmPasswordInput = page.locator('input[id="repeatedPassword"]');
        this.registerButton = page.getByRole('button', { name: 'Register' });
    }

    // Navigation method
    async navigateToParaBank() {
        await this.page.goto('https://parabank.parasoft.com/');
    }

    // Existing Login action method
    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // New Registration action method (Syllabus: Playwright Actions, Input Box)
    async registerNewUser(userData) {
        await this.registrationLink.click(); // Click the register link to open the form
        await this.firstNameInput.fill(userData.firstName);
        await this.lastNameInput.fill(userData.lastName);
        await this.addressInput.fill(userData.address);
        await this.cityInput.fill(userData.city);
        await this.stateInput.fill(userData.state);
        await this.zipCodeInput.fill(userData.zipCode);
        await this.phoneInput.fill(userData.phone);
        await this.ssnInput.fill(userData.ssn);
        await this.regUsernameInput.fill(userData.username);
        await this.regPasswordInput.fill(userData.password);
        await this.regConfirmPasswordInput.fill(userData.password);
        await this.registerButton.click(); // Click submit button
    }
}

module.exports = { LoginPage };