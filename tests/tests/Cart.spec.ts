import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePages';
import { CartPage } from '../pages/CartPages';

test('Test Case 11 - Add Products in Cart', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    // Step 1 - Launch browser
    // Step 2 - Navigate to URL
    await homePage.navigateToHomePage();

    // Step 3 - Verify home page
    await homePage.verifyHomePageVisible();

    // Step 4 - Click Cart button
    await cartPage.clickCartButton();

    // Step 5 - Scroll down to footer
await cartPage.scrollToFooter();

// Step 6 - Verify SUBSCRIPTION text
await cartPage.verifySubscriptionVisible();

// Step 7 - Enter subscription email
await cartPage.enterSubscriptionEmail(
    'virat1818@gmail.com'
);

// Step 7 - Click arrow button
await cartPage.clickSubscriptionButton();

// Step 8 - Verify success message
await cartPage.verifySubscriptionSuccessMessage();

});

test('Test Case 12 - Add Products in Cart', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    // Step 1 - Launch browser

    // Step 2 - Navigate to URL
    await homePage.navigateToHomePage();

    // Step 3 - Verify home page    await homePage.verifyHomePageVisible();

    // Step 4 - Click Products button
    await cartPage.clickProducts();

    // Step 5 - Hover over first product
    await cartPage.hoverFirstProduct();

    // Step 5 - Click Add to cart
    await cartPage.addFirstProductToCart();

    // Step 6 - Click Continue Shopping
    await cartPage.clickContinueShopping();

    // Step 7 - Hover over second product
    await cartPage.hoverSecondProduct();

    // Step 7 - Add second product to cart
    await cartPage.addSecondProductToCart();

    // Step 8 - Click View Cart
    await cartPage.clickViewCart();

    // Step 9 - Verify both products are added to cart
    await cartPage.verifyBothProductsInCart();

    // Step 10 - Verify price, quantity and total price
    await cartPage.verifyProductDetails();

});

 test('Test Case 13 - Verify Product quantity in Cart', async ({ page }) => {

    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

    // Step 1 - Launch browser

    // Step 2 - Navigate to URL
    await homePage.navigateToHomePage();

    // Step 3 - Verify home page
    await homePage.verifyHomePageVisible();

    // Step 4 - Click View Product for first product
    await cartPage.clickFirstViewProduct();

    // Step 5 - Verify product detail page
    await cartPage.verifyProductDetailOpened();

   // Step 6 - Increase quantity to 4
    await cartPage.increaseQuantityToFour();

    // Step 7 - Click Add to cart
    await cartPage.clickProductDetailAddToCart();

    // Step 8 - Click View Cart link
    await cartPage.clickViewCart();

    // Step 9 - Verify product quantity is exactly 1
    await cartPage.verifyProductQuantity();
});

test('Test Case 17 - Remove Products From Cart', async ({ page }) => {

    // Step 1 - Launch browser
    const homePage = new HomePage(page);
    const cartPage = new CartPage(page);

// Step 2 - Navigate to URL
await homePage.navigateToHomePage();

// Step 3 - Verify home page
await homePage.verifyHomePageVisible();

// Step 4 - Go to Products page
await cartPage.clickProducts();

// Step 4 - Hover first product
await cartPage.hoverFirstProduct();

// Step 4 - Add first product to cart
await cartPage.addFirstProductToCart();

// Close Add to Cart popup
await cartPage.clickContinueShopping();

// Step 5 - Click Cart
await cartPage.clickCartButton();

// Step 6 - Verify Cart page is displayed
await cartPage.verifyCartPageDisplayed();

// Step 7 - Click X button
await cartPage.removeFirstProduct();

// Step 8 - Verify product is removed
await cartPage.verifyProductRemoved();

});
