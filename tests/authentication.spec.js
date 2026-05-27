const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// Basic test group for Authentication Service
test.describe('Service 1: User Authentication & Onboarding', () => {

    test('TC-AUTH-05: Verify login failure with an invalid password', async ({ page }) => {
        // Create an instance of the LoginPage class (Page Object Model pattern)
        const loginPage = new LoginPage(page);

        // Step 1: Navigate to the ParaBank website
        await loginPage.navigateToParaBank();

        // Step 2: Attempt login with an invalid password
        await loginPage.login('invalidUser123', 'wrongPassword');

        // Step 3: Locate the error message element on the screen
        const errorMessage = page.locator('#rightPanel .error');

        // Step 4: Practice Hard Assertion - Verify that the error message is visible
        await expect(errorMessage).toBeVisible();

        // Step 5: Verify the exact error text matches ParaBank's failure message
        await expect(errorMessage).toHaveText('The username and password could not be verified.');
    });

});