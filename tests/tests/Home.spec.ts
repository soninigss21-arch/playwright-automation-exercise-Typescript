import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePages';
import { Page, expect } from '@playwright/test';

test('Test Case 10 - Verify Subscription in home page', async ({ page }) => {

    const homePage = new HomePage(page);

    // Step 1 - Launch browser

    // Step 2 - Navigate to URL
    await homePage.navigateToHomePage();

    // Step 3 - Verify home page
    await homePage.verifyHomePageVisible();

    // Step 4 - Scroll down to footer
    await homePage.scrollToFooter();

    // Step 5 - Verify SUBSCRIPTION
    await homePage.verifySubscriptionVisible();

    // Step 6 - Enter email
    await homePage.enterSubscriptionEmail(
        'nigss999@gmail.com'
    );

    // Step 6 - Click arrow button
    await homePage.clickSubscriptionButton();

    // Step 7 - Verify success message
    await homePage.verifySubscriptionSuccessMessage();
});

test("Test Case 25 - Verify Scroll Up using Arrow button and Scroll Down functionality", async ({ page }) => {

    // Step 1 - Launch browser

    const homePage = new HomePage(page);

// Step 2 - Navigate to URL
await homePage.navigateToHomePage();

// Step 3 - Verify Home page is visible
await homePage.verifyHomePageVisible();

// Step 4 - Scroll down to bottom
await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
});

// Step 5 - Verify SUBSCRIPTION
await homePage.verifySubscriptionVisible();

// Step 6 - Click Scroll Up Arrow
await homePage.clickScrollUpArrow();

// Step 7 - Verify page scrolled up
await homePage.verifyPageScrolledUp();
});

test("Test Case 26 - Verify Scroll Up without Arrow button and Scroll Down functionality", async ({ page }) => {

    // Step 1 - Launch browser
    const homePage = new HomePage(page);

// Step 2 - Navigate to URL
await homePage.navigateToHomePage();

// Step 3 - Verify Home page is visible
await homePage.verifyHomePageVisible();
// Step 4 - Scroll down page to bottom
await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
});

// Step 5 - Verify SUBSCRIPTION is visible
await homePage.verifySubscriptionVisible();
// Step 6 - Scroll up page to top
await page.evaluate(() => {
    window.scrollTo(0, 0);
}); 
// Step 7 - Verify page scrolled up
await homePage.verifyPageScrolledUp();

});