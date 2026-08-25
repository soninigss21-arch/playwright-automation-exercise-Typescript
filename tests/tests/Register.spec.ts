import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPages';
import { RegisterData, LoginData } from '../utils/Data';

test('Test Case 1 - Register User', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    // Generate email only once for this test
    const email = RegisterData.generateEmail();

    console.log('Register Email:', email);

    await registerPage.gotoRegisterPage();

    await registerPage.verifyHomePageVisible();

    await registerPage.clickSignupLogin();

    await registerPage.verifyNewUserSignupVisible();

    await registerPage.enterName(RegisterData.name);

    await registerPage.enterEmail(email);

    await registerPage.clickSignupButton();

    await registerPage.verifyAccountInformationVisible();

    await registerPage.selectTitle();

    await registerPage.enterPassword(
        RegisterData.password
    );

    await registerPage.selectDateOfBirth(
        RegisterData.day,
        RegisterData.month,
        RegisterData.year
    );

    await registerPage.selectNewsletter();

    await registerPage.selectSpecialOffers();

    await registerPage.enterFirstName(
        RegisterData.firstName
    );

    await registerPage.enterLastName(
        RegisterData.lastName
    );

    await registerPage.enterCompany(
        RegisterData.company
    );

    await registerPage.enterAddress(
        RegisterData.address
    );

    await registerPage.selectCountry(
        RegisterData.country
    );

    await registerPage.enterState(
        RegisterData.state
    );

    await registerPage.enterCity(
        RegisterData.city
    );

    await registerPage.enterZipcode(
        RegisterData.zipcode
    );

    await registerPage.enterMobileNumber(
        RegisterData.mobileNumber
    );

    await registerPage.clickCreateAccount();

    // Final verification
    await registerPage.verifyAccountCreated();
});


// TEST CASE 5
// Register User with existing email

test('Test Case 5 - Register User with existing email', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    // Step 1 - Launch browser
    // Playwright launches browser automatically

    // Step 2 - Navigate to URL
    await registerPage.gotoRegisterPage();

    // Step 3 - Verify home page is visible
    await registerPage.verifyHomePageVisible();

    // Step 4 - Click Signup / Login
    await registerPage.clickSignupLogin();

    // Step 5 - Verify New User Signup is visible
    await registerPage.verifyNewUserSignupVisible();

    // Step 6 - Enter name and ALREADY REGISTERED email
    await registerPage.enterName(RegisterData.name);

    await registerPage.enterEmail(
        LoginData.correctEmail
    );

    // Step 7 - Click Signup
    await registerPage.clickSignupButton();

    // Step 8 - Verify existing email error
    await registerPage.verifyEmailAlreadyExistVisible();

});