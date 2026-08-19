import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPages';
import { LoginData } from '../utils/Data';  

test.describe('Login Test Cases', () => {

    // =========================================================
    // TEST CASE 2
    // Login User with correct email and password
    // =========================================================

    test('Test Case 2 - Login User with correct email and password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Step 1 - Launch browser
        // Playwright launches browser automatically

        // Step 2 - Navigate to URL
        await loginPage.navigateToHomePage();       

        // Step 3 - Verify home page is visible
        await loginPage.verifyHomePageVisible();

        // Step 4 - Click Signup / Login
        await loginPage.clickSignupLogin();

        // Step 5 - Verify Login to your account
        await loginPage.verifyLoginToAccountVisible();

        // Step 6 - Enter correct email and password
        await loginPage.enterLoginDetails(
            'virat1818@gmail.com',
            'virat1818'
        );

        // Step 7 - Click Login
        await loginPage.clickLogin();

         // Step 8 - Verify Logged in as username
         await loginPage.verifyLoggedInAs();  

        // // Step 9 - Click Delete Account
        // await loginPage.clickDeleteAccount();

        // // Step 10 - Verify ACCOUNT DELETED!
        // await loginPage.verifyAccountDeletedVisible();
    });


    // =========================================================
    // TEST CASE 3
    // Login User with incorrect email and password
    // =========================================================

    test('Test Case 3 - Login User with incorrect email and password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Step 1 - Launch browser
        // Playwright launches browser automatically

        // Step 2 - Navigate to URL
        await loginPage.navigateToHomePage();

        // Step 3 - Verify home page is visible
        await loginPage.verifyHomePageVisible();

        // Step 4 - Click Signup / Login
        await loginPage.clickSignupLogin();

        // Step 5 - Verify Login to your account
        await loginPage.verifyLoginToAccountVisible();

        // Step 6 - Enter incorrect email and password
        await loginPage.enterLoginDetails(
            'wrongemail123@gmail.com',
            'WrongPassword123',
        );

        // Step 7 - Click Login
        await loginPage.clickLogin();

        // Step 8 - Verify error message
        await loginPage.verifyLoginErrorVisible();
    });


    // =========================================================
    // TEST CASE 4
    // Logout User
    // =========================================================

    test('Test Case 4 - Logout User', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Step 1 - Launch browser
        // Playwright launches browser automatically

        // Step 2 - Navigate to URL
        await loginPage.navigateToHomePage();

        // Step 3 - Verify home page is visible
        await loginPage.verifyHomePageVisible();

        // Step 4 - Click Signup / Login
        await loginPage.clickSignupLogin();

        // Step 5 - Verify Login to your account
        await loginPage.verifyLoginToAccountVisible();

        // Step 6 - Enter correct email and password
        await loginPage.enterLoginDetails(
            'virat1818@gmail.com',
            'virat1818'
        );

        // Step 7 - Click Login
        await loginPage.clickLogin();

        // Step 8 - Verify Logged in as username
        // await loginPage.verifyLoggedInAs();

        // Step 9 - Click Logout
        await loginPage.clickLogout();

        // Step 10 - Verify user is navigated to login page
        await loginPage.verifyLoginPageVisible();
    });

});