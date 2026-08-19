import { test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPages';
import { RegisterData } from '../utils/Data';


test('Test Case 1 - Register User', async ({ page }) => {

    const registerPage = new RegisterPage(page);

    // Every test run gets a NEW email
    const email = RegisterData.email;

    console.log("Register Email:", email);
    console.log("Register Password:", RegisterData.password);


    await registerPage.gotoRegisterPage();

    await registerPage.verifyHomePageVisible();

    await registerPage.clickSignupLogin();

    await registerPage.verifyNewUserSignupVisible();

    // Enter unique name and email
    await registerPage.enterName(RegisterData.name);
    await registerPage.enterEmail(email);


    await registerPage.clickSignupButton();

    await registerPage.verifyAccountInformationVisible();

    await registerPage.selectTitle();

    await registerPage.enterPassword("tom000");

    await registerPage.selectDateOfBirth("10", "5", "1998");

    await registerPage.selectNewsletter();

    await registerPage.selectSpecialOffers();

    await registerPage.enterFirstName("Don");

    await registerPage.enterLastName("soni");

    await registerPage.enterCompany("ABC Technologies");

    await registerPage.enterAddress("123 Main Street");

    await registerPage.selectCountry("India");

    await registerPage.enterState("Gujarat");

    await registerPage.enterCity("Mahesana");

    await registerPage.enterZipcode("400001");

    await registerPage.enterMobileNumber("9876543210");

    await registerPage.clickCreateAccount();


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
    await registerPage.enterName('Nigss');

    await registerPage.enterEmail(
        'virat1818@gmail.com'
    );

    // Step 7 - Click Signup
    await registerPage.clickSignupButton();

    // Step 8 - Verify existing email error
    await registerPage.verifyEmailAlreadyExistVisible();

});