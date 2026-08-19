import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePages';
import { CartPage } from '../pages/CartPages';
import { RegisterPage } from '../pages/RegisterPages';
import { LoginPage } from '../pages/LoginPages';
import { OrderPage } from '../pages/OrderPages';

test('Test Case 14 - Place Order: Register while Checkout', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const registerPage = new RegisterPage(page);

    // Step 2
    await homePage.navigateToHomePage();

    // Step 3
    await homePage.verifyHomePageVisible();

    // Step 4 - Add product to cart
    await cartPage.clickProducts();

    await cartPage.hoverFirstProduct();

    await cartPage.addFirstProductToCart();

    await cartPage.clickContinueShopping();

    // Step 5 - Click Cart
    await cartPage.clickCartButton();

    // Step 6 - Verify Cart page is displayed
    await cartPage.verifyCartPageDisplayed();


    // Step 7 - Click Proceed To Checkout
    await cartPage.clickProceedToCheckout();

    // Step 8 - Click Register / Login
    await cartPage.clickRegisterLogin();

    // Step 9 - Start Signup
    const timestamp = Date.now();

    const name = `TestUser${timestamp}`;
    const email = `testuser${timestamp}@example.com`;

    await registerPage.verifyNewUserSignupVisible();
    await registerPage.enterName(name);
    await registerPage.enterEmail(email);
    await registerPage.clickSignupButton();

    // Verify Account Information page
    await registerPage.verifyAccountInformationVisible();

    // Select Title - Mr
    await registerPage.selectTitle();

    // Enter Password
    await registerPage.enterPassword('Test@123');

    // Select Date of Birth
    await registerPage.selectDateOfBirth('10', '5', '2000');

    // Select Newsletter
    await registerPage.selectNewsletter();

    // Select Special Offers
    await registerPage.selectSpecialOffers();

    // Enter First Name
    await registerPage.enterFirstName('Test');

    // Enter Last Name
    await registerPage.enterLastName('User');

    // Enter Company
    await registerPage.enterCompany('Test Company');

    // Enter Address
    await registerPage.enterAddress('123 Test Street');

    // Select Country
    await registerPage.selectCountry('India');

    // Enter State
    await registerPage.enterState('Gujarat');

    // Enter City
    await registerPage.enterCity('Ahmedabad');

    // Enter Zipcode
    await registerPage.enterZipcode('380001');

    // Enter Mobile Number
    await registerPage.enterMobileNumber('9876543210');

    // Create Account
    await registerPage.clickCreateAccount();

    // Step 10 - Verify ACCOUNT CREATED!
    await registerPage.verifyAccountCreated();

    // Step 10 - Click Continue
    await registerPage.clickContinueButton();

    // Step 11 - Verify Logged in as username
    await registerPage.verifyLoggedInAsUser();

    // Step 12 - Click Cart
    await cartPage.clickCartButton();

    // Step 13 - Click Proceed To Checkout
    await cartPage.clickProceedToCheckout();

    // Step 14 - Verify Address Details and Review Your Order
    await cartPage.verifyAddressDetailsAndReviewOrder();

    // Step 15 - Enter order description
    await cartPage.enterOrderComment(
        'Please deliver the order carefully.'
    );

    // Step 15 - Click Place Order
    await cartPage.clickPlaceOrder();

    // Step 16 - Enter payment details
    await cartPage.enterPaymentDetails(
        'Test User',
        '4111111111111111',
        '123',
        '12',
        '2030'
    );

    // Step 17 - Pay and Confirm Order
    await cartPage.clickPayAndConfirmOrder();

    // Step 18 - Verify order placed successfully
    await cartPage.verifyOrderPlacedSuccessfully();

});

test('Test Case 15 - Place Order: Register before Checkout', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const registerPage = new RegisterPage(page);

    // Step 1 - Launch browser

    // Step 2 - Navigate to URL
    await homePage.navigateToHomePage();

    // Step 3 - Verify home page
    await homePage.verifyHomePageVisible();

    // Step 4 - Click Signup / Login
    await registerPage.clickSignupLogin();

    // Step 5 - Create unique signup data
    const timestamp = Date.now();

    const name = `TestUser${timestamp}`;
    const email = `testuser${timestamp}@example.com`;

    await registerPage.verifyNewUserSignupVisible();

    await registerPage.enterName(name);

    await registerPage.enterEmail(email);

    await registerPage.clickSignupButton();

    await registerPage.verifyAccountInformationVisible();

    // Step 5 - Select Title
    await registerPage.selectTitle();

    // Step 5 - Enter Password
    await registerPage.enterPassword('Test@123');

    // Step 5 - Select Date of Birth
    await registerPage.selectDateOfBirth('10', '5', '2000');

    // Step 5 - Select Newsletter
    await registerPage.selectNewsletter();

    // Step 5 - Select Special Offers
    await registerPage.selectSpecialOffers();

    // Step 5 - Enter First Name
    await registerPage.enterFirstName('Test');

    // Step 5 - Enter Last Name
    await registerPage.enterLastName('User');

    // Step 5 - Enter Company
    await registerPage.enterCompany('Test Company');

    // Step 5 - Enter Address
    await registerPage.enterAddress('123 Test Street');

    // Step 5 - Select Country
    await registerPage.selectCountry('India');

    // Step 5 - Enter State
    await registerPage.enterState('Gujarat');

    // Step 5 - Enter City
    await registerPage.enterCity('Ahmedabad');

    // Step 5 - Enter Zipcode
    await registerPage.enterZipcode('380001');

    // Step 5 - Enter Mobile Number
    await registerPage.enterMobileNumber('9876543210');

    // Step 5 - Create Account
    await registerPage.clickCreateAccount();

    // Step 6 - Verify ACCOUNT CREATED!
    await registerPage.verifyAccountCreated();

    // Step 6 - Click Continue
    await registerPage.clickContinueButton();

    // Step 7 - Verify Logged in as username
    await registerPage.verifyLoggedInAsUser();

    // Step 8 - Go to Products page
    await cartPage.clickProducts();

    // Step 8 - Hover first product
    await cartPage.hoverFirstProduct();

    // Step 8 - Add first product to cart
    await cartPage.addFirstProductToCart();

    // Step 8 - Continue Shopping
    await cartPage.clickContinueShopping();

    // Step 8 - Hover second product
    await cartPage.hoverSecondProduct();

    // Step 8 - Add second product to cart
    await cartPage.addSecondProductToCart();

    // Step 9 - Click Cart
    await cartPage.clickCartButton();

    // Step 10 - Verify Cart page is displayed
    await cartPage.verifyCartPageDisplayed();
    // Step 11 - Click Proceed To Checkout
    await cartPage.clickProceedToCheckout();

    // Step 12 - Verify Address Details and Review Your Order
    await cartPage.verifyAddressDetailsAndReviewOrder();

    // Step 13 - Enter order description
    await cartPage.enterOrderComment(
        'Please deliver the order carefully.'
    );

    // Step 13 - Click Place Order
    await cartPage.clickPlaceOrder();

    // Step 14 - Enter payment details
    await cartPage.enterPaymentDetails(
        'Test User',
        '4111111111111111',
        '123',
        '12',
        '2030'
    );

    // Step 15 - Pay and Confirm Order
    await cartPage.clickPayAndConfirmOrder();

    // Step 16 - Verify order placed successfully
    await cartPage.verifyOrderPlacedSuccessfully();



});

test('Test Case 16 - Place Order: Login before Checkout', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const orderPage = new OrderPage(page);
    const registerPage = new RegisterPage(page);

    // Step 2
    await homePage.navigateToHomePage();

    // Step 3
    await homePage.verifyHomePageVisible();

    // Step 4
    await loginPage.clickSignupLogin();

    // Optional but good verification
    await loginPage.verifyLoginToAccountVisible();

    // Step 5
    await loginPage.enterLoginDetails(
        'virat1818@gmail.com',
        'virat1818'
    );

    await loginPage.clickLogin();

    // Step 6
    await loginPage.verifyLoggedInAs();

    // Step 7 - Go to Products page
    await cartPage.clickProducts();

    // Step 7 - Hover first product
    await cartPage.hoverFirstProduct();

    // Step 7 - Add first product to cart
    await cartPage.addFirstProductToCart();

    // Step 7 - Continue Shopping
    await cartPage.clickContinueShopping();

    // Step 7 - Hover second product
    await cartPage.hoverSecondProduct();

    // Step 7 - Add second product to cart
    await cartPage.addSecondProductToCart();

    // Step 8 - Click Cart
    await cartPage.clickCartButton();

    // Step 9 - Verify Cart page is displayed
    await cartPage.verifyCartPageDisplayed();

    // Step 10 - Click Proceed To Checkout
    await orderPage.clickProceedToCheckout();

    // Step 11 - Verify Address Details and Review Your Order
    await cartPage.verifyAddressDetailsAndReviewOrder();

    // Step 12 - Enter order description
    await orderPage.enterOrderComment(
        'Please deliver the order carefully.'
    );

    // Step 12 - Click Place Order
    await orderPage.clickPlaceOrder();

    // Step 13 - Enter Payment Details
    await orderPage.enterPaymentDetails(
        'Test User',
        '4111111111111111',
        '123',
        '12',
        '2030'
    );

    // Step 14 - Pay and Confirm Order
    await orderPage.clickPayAndConfirmOrder();

    // Step 15 - Verify Order Placed Successfully
    await cartPage.verifyOrderPlacedSuccessfully();

    // Step 17 - Click Continue
    await registerPage.clickContinueButton();


});

test('Test Case 23 - Verify address details in checkout page', async ({ page }) => {

    // Step 1 - Launch browser
    const homePage = new HomePage(page);
const registerPage = new RegisterPage(page);
const cartPage = new CartPage(page);
const orderPage = new OrderPage(page);

// Step 2 - Navigate to URL
await homePage.navigateToHomePage();

// Step 3 - Verify Home page is visible
await homePage.verifyHomePageVisible();
// Step 4 - Click Signup / Login
await registerPage.clickSignupLogin();

// Step 5 - Create unique user data
const timestamp = Date.now();

const name = `TestUser${timestamp}`;
const email = `testuser${timestamp}@example.com`;

await registerPage.verifyNewUserSignupVisible();

await registerPage.enterName(name);
await registerPage.enterEmail(email);
await registerPage.clickSignupButton();

await registerPage.verifyAccountInformationVisible();

await registerPage.selectTitle();
await registerPage.enterPassword('Test@123');
await registerPage.selectDateOfBirth('10', '5', '2000');

await registerPage.selectNewsletter();
await registerPage.selectSpecialOffers();

await registerPage.enterFirstName('Test');
await registerPage.enterLastName('User');
await registerPage.enterCompany('Test Company');

// IMPORTANT: We will verify this address later
await registerPage.enterAddress('123 Test Street');

await registerPage.selectCountry('India');
await registerPage.enterState('Gujarat');
await registerPage.enterCity('Ahmedabad');
await registerPage.enterZipcode('380001');
await registerPage.enterMobileNumber('9876543210');

await registerPage.clickCreateAccount();

// Step 6 - Verify account created
await registerPage.verifyAccountCreated();

// Step 6 - Click Continue
await registerPage.clickContinueButton();

// Step 7 - Verify Logged in as username
await registerPage.verifyLoggedInAsUser();

// Step 8 - Go to Products
await cartPage.clickProducts();

// Step 8 - Hover first product
await cartPage.hoverFirstProduct();

// Step 8 - Add first product to cart
await cartPage.addFirstProductToCart();

// Close popup
await cartPage.clickContinueShopping();

// Step 9 - Click Cart
await cartPage.clickCartButton();

// Step 10 - Verify Cart page is displayed
await cartPage.verifyCartPageDisplayed();

// Step 11 - Click Proceed To Checkout
await cartPage.clickProceedToCheckout();

// Step 12 - Verify Delivery Address
await orderPage.verifyDeliveryAddress();

await orderPage.verifyDeliveryAddress();
await orderPage.verifyBillingAddress();
});

test('Test Case 24 - Download Invoice after purchase order', async ({ page }) => {

    // Step 1 - Launch browser
    const homePage = new HomePage(page);
const cartPage = new CartPage(page);
const registerPage = new RegisterPage(page);
const orderPage = new OrderPage(page);

// Step 2 - Navigate to URL
await homePage.navigateToHomePage();

// Step 3 - Verify Home page
await homePage.verifyHomePageVisible();

// Step 4 - Go to Products
await cartPage.clickProducts();

// Step 4 - Hover first product
await cartPage.hoverFirstProduct();

// Step 4 - Add first product to cart
await cartPage.addFirstProductToCart();

// Close popup
await cartPage.clickContinueShopping();
// Step 5 - Click Cart
await cartPage.clickCartButton();

// Step 6 - Verify Cart page is displayed
await cartPage.verifyCartPageDisplayed();
// Step 7 - Click Proceed To Checkout
await cartPage.clickProceedToCheckout();

// Step 8 - Click Register / Login
await cartPage.clickRegisterLogin();

// Step 9 - Create unique user
const timestamp = Date.now();

const name = `TestUser${timestamp}`;
const email = `testuser${timestamp}@example.com`;

await registerPage.verifyNewUserSignupVisible();

await registerPage.enterName(name);
await registerPage.enterEmail(email);
await registerPage.clickSignupButton();

await registerPage.verifyAccountInformationVisible();

await registerPage.selectTitle();
await registerPage.enterPassword('Test@123');
await registerPage.selectDateOfBirth('10', '5', '2000');

await registerPage.selectNewsletter();
await registerPage.selectSpecialOffers();

await registerPage.enterFirstName('Test');
await registerPage.enterLastName('User');
await registerPage.enterCompany('Test Company');
await registerPage.enterAddress('123 Test Street');

await registerPage.selectCountry('India');
await registerPage.enterState('Gujarat');
await registerPage.enterCity('Ahmedabad');
await registerPage.enterZipcode('380001');
await registerPage.enterMobileNumber('9876543210');

await registerPage.clickCreateAccount();

// Step 10 - Verify ACCOUNT CREATED!
await registerPage.verifyAccountCreated();

// Step 10 - Click Continue
await registerPage.clickContinueButton();

// Step 11 - Verify Logged in as username
await registerPage.verifyLoggedInAsUser();

// Step 12 - Click Cart
await cartPage.clickCartButton();

// Step 13 - Click Proceed To Checkout
await cartPage.clickProceedToCheckout();
// Step 14 - Verify Address Details and Review Your Order
await orderPage.verifyAddressAndReviewOrder();

// Step 15 - Enter description
await orderPage.enterOrderComment(
    'Please deliver the order carefully.'
);

// Step 15 - Click Place Order
await orderPage.clickPlaceOrder();
// Step 16 - Enter Payment Details
await orderPage.enterPaymentDetails(
    'Test User',
    '4111111111111111',
    '123',
    '12',
    '2030'
);

// Step 17 - Click Pay and Confirm Order
await orderPage.clickPayAndConfirmOrder();
// Step 18 - Verify order placed successfully
await orderPage.verifyOrderSuccess();

// Step 19 - Download Invoice
await orderPage.downloadInvoice();

// Step 20 - Click Continue
await registerPage.clickContinueButton();




});
