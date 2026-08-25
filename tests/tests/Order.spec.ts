import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePages';
import { CartPage } from '../pages/CartPages';
import { RegisterPage } from '../pages/RegisterPages';
import { LoginPage } from '../pages/LoginPages';
import { OrderPage } from '../pages/OrderPages';
import {
    OrderData,
    LoginData
} from '../utils/Data';

test('Test Case 14 - Place Order: Register while Checkout', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const registerPage = new RegisterPage(page);
    const orderPage = new OrderPage(page);

    // Step 2 - Navigate to Home page
    await homePage.navigateToHomePage();

    // Step 3 - Verify Home page
    await homePage.verifyHomePageVisible();

    // Step 4 - Add product to Cart
    await cartPage.clickProducts();

    await cartPage.hoverFirstProduct();

    await cartPage.addFirstProductToCart();

    await cartPage.clickContinueShopping();

    // Step 5 - Click Cart
    await cartPage.clickCartButton();

    // Step 6 - Verify Cart page
    await cartPage.verifyCartPageDisplayed();

    // Step 7 - Proceed to Checkout
    await cartPage.clickProceedToCheckout();

    // Step 8 - Click Register / Login
    await cartPage.clickRegisterLogin();

    // Step 9 - Generate unique user
    const user = OrderData.createUser();

    await registerPage.verifyNewUserSignupVisible();

    await registerPage.enterName(user.name);

    await registerPage.enterEmail(user.email);

    await registerPage.clickSignupButton();

    await registerPage.verifyAccountInformationVisible();

    await registerPage.selectTitle();

    await registerPage.enterPassword(
        OrderData.password
    );

    await registerPage.selectDateOfBirth(
        OrderData.day,
        OrderData.month,
        OrderData.year
    );

    await registerPage.selectNewsletter();

    await registerPage.selectSpecialOffers();

    await registerPage.enterFirstName(
        OrderData.firstName
    );

    await registerPage.enterLastName(
        OrderData.lastName
    );

    await registerPage.enterCompany(
        OrderData.company
    );

    await registerPage.enterAddress(
        OrderData.address
    );

    await registerPage.selectCountry(
        OrderData.country
    );

    await registerPage.enterState(
        OrderData.state
    );

    await registerPage.enterCity(
        OrderData.city
    );

    await registerPage.enterZipcode(
        OrderData.zipcode
    );

    await registerPage.enterMobileNumber(
        OrderData.mobileNumber
    );

    await registerPage.clickCreateAccount();

    // Step 10 - Verify Account Created
    await registerPage.verifyAccountCreated();

    await registerPage.clickContinueButton();

    // Step 11 - Verify Logged in user
    await registerPage.verifyLoggedInAsUser();

    // Step 12 - Click Cart
    await cartPage.clickCartButton();

    // Step 13 - Proceed to Checkout
    await cartPage.clickProceedToCheckout();

    // Step 14 - Verify Address and Order
    await orderPage.verifyAddressAndReviewOrder();

    // Step 15 - Enter order comment
    await orderPage.enterOrderComment(
        OrderData.orderComment
    );

    await orderPage.clickPlaceOrder();

    // Step 16 - Enter payment details
    await orderPage.enterPaymentDetails(
        OrderData.nameOnCard,
        OrderData.cardNumber,
        OrderData.cvc,
        OrderData.expiryMonth,
        OrderData.expiryYear
    );

    // Step 17 - Pay and Confirm
    await orderPage.clickPayAndConfirmOrder();

    // Step 18 - Verify Order success
    await orderPage.verifyOrderSuccess();
});

test(
    'Test Case 15 - Place Order: Register before Checkout',
    async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const registerPage = new RegisterPage(page);
    const orderPage = new OrderPage(page);
    

    // Step 2 - Navigate to Home page
    await homePage.navigateToHomePage();

    // Step 3 - Verify Home page
    await homePage.verifyHomePageVisible();

    // Step 4 - Click Signup / Login
    await registerPage.clickSignupLogin();

    // Step 5 - Generate unique user
    const user = OrderData.createUser();

    await registerPage.verifyNewUserSignupVisible();

    await registerPage.enterName(user.name);

    await registerPage.enterEmail(user.email);

    await registerPage.clickSignupButton();

    await registerPage.verifyAccountInformationVisible();

    await registerPage.selectTitle();

    await registerPage.enterPassword(
        OrderData.password
    );

    await registerPage.selectDateOfBirth(
        OrderData.day,
        OrderData.month,
        OrderData.year
    );

    await registerPage.selectNewsletter();

    await registerPage.selectSpecialOffers();

    await registerPage.enterFirstName(
        OrderData.firstName
    );

    await registerPage.enterLastName(
        OrderData.lastName
    );

    await registerPage.enterCompany(
        OrderData.company
    );

    await registerPage.enterAddress(
        OrderData.address
    );

    await registerPage.selectCountry(
        OrderData.country
    );

    await registerPage.enterState(
        OrderData.state
    );

    await registerPage.enterCity(
        OrderData.city
    );

    await registerPage.enterZipcode(
        OrderData.zipcode
    );

    await registerPage.enterMobileNumber(
        OrderData.mobileNumber
    );

    await registerPage.clickCreateAccount();

    // Step 6 - Verify Account Created
    await registerPage.verifyAccountCreated();

    await registerPage.clickContinueButton();

    // Step 7 - Verify Logged in user
    await registerPage.verifyLoggedInAsUser();

    // Step 8 - Add first product
    await cartPage.clickProducts();

    await cartPage.hoverFirstProduct();

    await cartPage.addFirstProductToCart();

    await cartPage.clickContinueShopping();

    // Add second product
    await cartPage.hoverSecondProduct();

    await cartPage.addSecondProductToCart();

    // Close second Add-to-Cart modal
    await cartPage.clickContinueShopping();

    // Step 9 - Click header Cart button
    await cartPage.clickCartButton();

    // Step 10 - Verify Cart page
    await cartPage.verifyCartPageDisplayed();

    // Step 11 - Proceed to Checkout
    await orderPage.clickProceedToCheckout();

    // Step 12 - Verify Address and Review Order
    await orderPage.verifyAddressAndReviewOrder();

    // Step 13 - Enter comment
    await orderPage.enterOrderComment(
        OrderData.orderComment
    );

    await orderPage.clickPlaceOrder();

    // Step 14 - Enter payment information
    await orderPage.enterPaymentDetails(
        OrderData.nameOnCard,
        OrderData.cardNumber,
        OrderData.cvc,
        OrderData.expiryMonth,
        OrderData.expiryYear
    );

    // Step 15 - Pay and Confirm
    await orderPage.clickPayAndConfirmOrder();

    // Step 16 - Verify order success
    await orderPage.verifyOrderSuccess();
});

test('Test Case 16 - Place Order: Login before Checkout', async ({ page }) => {

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    const orderPage = new OrderPage(page);
    const registerPage = new RegisterPage(page);

    await homePage.navigateToHomePage();
    await homePage.verifyHomePageVisible();

    await loginPage.clickSignupLogin();
    await loginPage.verifyLoginToAccountVisible();

    await loginPage.enterLoginDetails(
        LoginData.correctEmail,
        LoginData.correctPassword
    );

    await loginPage.clickLogin();
    await loginPage.verifyLoggedInAs();

    await cartPage.clickProducts();

    await cartPage.hoverFirstProduct();
    await cartPage.addFirstProductToCart();
    await cartPage.clickContinueShopping();

    await cartPage.hoverSecondProduct();
    await cartPage.addSecondProductToCart();
    await cartPage.clickContinueShopping();

    await cartPage.clickCartButton();
    await cartPage.verifyCartPageDisplayed();

    await orderPage.clickProceedToCheckout();
    await orderPage.verifyAddressAndReviewOrder();

    await orderPage.enterOrderComment(
        OrderData.orderComment
    );

    await orderPage.clickPlaceOrder();

    await orderPage.enterPaymentDetails(
        OrderData.nameOnCard,
        OrderData.cardNumber,
        OrderData.cvc,
        OrderData.expiryMonth,
        OrderData.expiryYear
    );

    await orderPage.clickPayAndConfirmOrder();
    await orderPage.verifyOrderSuccess();

    await registerPage.clickContinueButton();
});

test('Test Case 23 - Verify address details in checkout page', async ({ page }) => {

    const homePage = new HomePage(page);
    const registerPage = new RegisterPage(page);
    const cartPage = new CartPage(page);
    const orderPage = new OrderPage(page);

    const user = OrderData.createUser();

    await homePage.navigateToHomePage();
    await homePage.verifyHomePageVisible();

    await registerPage.clickSignupLogin();
    await registerPage.verifyNewUserSignupVisible();
    await registerPage.enterName(user.name);
    await registerPage.enterEmail(user.email);
    await registerPage.clickSignupButton();

    await registerPage.verifyAccountInformationVisible();
    await registerPage.selectTitle();
    await registerPage.enterPassword(OrderData.password);

    await registerPage.selectDateOfBirth(
        OrderData.day,
        OrderData.month,
        OrderData.year
    );

    await registerPage.selectNewsletter();
    await registerPage.selectSpecialOffers();
    await registerPage.enterFirstName(OrderData.firstName);
    await registerPage.enterLastName(OrderData.lastName);
    await registerPage.enterCompany(OrderData.company);
    await registerPage.enterAddress(OrderData.address);
    await registerPage.selectCountry(OrderData.country);
    await registerPage.enterState(OrderData.state);
    await registerPage.enterCity(OrderData.city);
    await registerPage.enterZipcode(OrderData.zipcode);
    await registerPage.enterMobileNumber(OrderData.mobileNumber);
    await registerPage.clickCreateAccount();

    await registerPage.verifyAccountCreated();
    await registerPage.clickContinueButton();
    await registerPage.verifyLoggedInAsUser();

    await cartPage.clickProducts();
    await cartPage.hoverFirstProduct();
    await cartPage.addFirstProductToCart();
    await cartPage.clickContinueShopping();

    await cartPage.clickCartButton();
    await cartPage.verifyCartPageDisplayed();
    await cartPage.clickProceedToCheckout();

    await orderPage.verifyAddressAndReviewOrder();

    const expectedAddress = [
        `${OrderData.firstName} ${OrderData.lastName}`,
        OrderData.company,
        OrderData.address,
        OrderData.city,
        OrderData.state,
        OrderData.zipcode,
        OrderData.country,
        OrderData.mobileNumber
    ];

    await orderPage.verifyDeliveryAddress(expectedAddress);
    await orderPage.verifyBillingAddress(expectedAddress);
});

test('Test Case 24 - Download Invoice after purchase order', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);
    const registerPage = new RegisterPage(page);
    const orderPage = new OrderPage(page);

    const user = OrderData.createUser();

    await homePage.navigateToHomePage();
    await homePage.verifyHomePageVisible();

    await cartPage.clickProducts();
    await cartPage.hoverFirstProduct();
    await cartPage.addFirstProductToCart();
    await cartPage.clickContinueShopping();

    await cartPage.clickCartButton();
    await cartPage.verifyCartPageDisplayed();
    await cartPage.clickProceedToCheckout();
    await cartPage.clickRegisterLogin();

    await registerPage.verifyNewUserSignupVisible();
    await registerPage.enterName(user.name);
    await registerPage.enterEmail(user.email);
    await registerPage.clickSignupButton();

    await registerPage.verifyAccountInformationVisible();
    await registerPage.selectTitle();
    await registerPage.enterPassword(OrderData.password);

    await registerPage.selectDateOfBirth(
        OrderData.day,
        OrderData.month,
        OrderData.year
    );

    await registerPage.selectNewsletter();
    await registerPage.selectSpecialOffers();
    await registerPage.enterFirstName(OrderData.firstName);
    await registerPage.enterLastName(OrderData.lastName);
    await registerPage.enterCompany(OrderData.company);
    await registerPage.enterAddress(OrderData.address);
    await registerPage.selectCountry(OrderData.country);
    await registerPage.enterState(OrderData.state);
    await registerPage.enterCity(OrderData.city);
    await registerPage.enterZipcode(OrderData.zipcode);
    await registerPage.enterMobileNumber(OrderData.mobileNumber);
    await registerPage.clickCreateAccount();

    await registerPage.verifyAccountCreated();
    await registerPage.clickContinueButton();
    await registerPage.verifyLoggedInAsUser();

    await cartPage.clickCartButton();
    await cartPage.clickProceedToCheckout();

    await orderPage.verifyAddressAndReviewOrder();
    await orderPage.enterOrderComment(OrderData.orderComment);
    await orderPage.clickPlaceOrder();

    await orderPage.enterPaymentDetails(
        OrderData.nameOnCard,
        OrderData.cardNumber,
        OrderData.cvc,
        OrderData.expiryMonth,
        OrderData.expiryYear
    );

    await orderPage.clickPayAndConfirmOrder();
    await orderPage.verifyOrderSuccess();
    await orderPage.downloadInvoice();
    await registerPage.clickContinueButton();
});
