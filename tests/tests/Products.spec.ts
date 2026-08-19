import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePages';
import { ProductsPage } from '../pages/productsPages';
import { LoginPage } from '../pages/LoginPages';
import { CartPage } from '../pages/CartPages';

test('Test Case 8 - Verify All Products and Product Detail Page', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    // Step 1 - Launch browser
    // Playwright launches browser automatically

    // Step 2 - Navigate to URL
    await productsPage.navigateToHomePage();

    // Step 3 - Verify home page is visible
    await productsPage.verifyHomePageVisible();

    // Step 4 - Click Products
    await productsPage.clickProducts();

    // Step 5 - Verify ALL PRODUCTS page
    await productsPage.verifyAllProductsPageVisible();

    // Step 6 - Verify products list is visible
    await productsPage.verifyProductsListVisible();

    // Step 7 - Click View Product of first product
    await productsPage.clickFirstViewProduct();

    // Step 8 - Verify product detail page
    await productsPage.verifyProductDetailPageVisible();

    // Step 9 - Verify product details
    await productsPage.verifyProductDetailsVisible();

});

  test('Test Case 9 - Search Product', async ({ page }) => {

    const productsPage = new ProductsPage(page);

    // Step 1 - Launch browser
    // Playwright launches browser automatically

    // Step 2 - Navigate to URL
    await productsPage.navigateToHomePage();

    // Step 3 - Verify home page is visible
    await productsPage.verifyHomePageVisible();

    // Step 4 - Click Products button
    await productsPage.clickProducts();

    // Step 5 - Verify ALL PRODUCTS page
    await productsPage.verifyAllProductsPageVisible();

    // Step 6 - Enter product name and click search
    await productsPage.searchProduct('Top');

    // Step 7 - Verify SEARCHED PRODUCTS
    await productsPage.verifySearchedProductsVisible();

    // Step 8 - Verify all related products are visible
    await productsPage.verifySearchResultsVisible();

});


test('Test Case 18 - View Category Products', async ({ page }) => {

    // Step 1 - Launch browser
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    // Step 2 - Navigate to Automation Exercise
    await homePage.navigateToHomePage();

    // Step 3 - Verify categories are visible on left sidebar
    await productsPage.verifyCategoriesVisible();

    // Step 4
    await productsPage.clickWomenCategory();

    // Step 5
    await productsPage.clickWomenDressCategory();

    // Step 6
    await productsPage.verifyWomenDressProductsVisible();

    // Step 7 - Click Men category
await productsPage.clickMenCategory();

// Step 7 - Click Men Tshirts sub-category
await productsPage.clickMenTshirtsCategory();

// Step 8 - Verify Men Tshirts Products page
await productsPage.verifyMenTshirtsProductsVisible();

});

test('Test Case 19 - View & Cart Brand Products', async ({ page }) => {

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

    // Step 1 - Launch browser
    // Playwright launches browser automatically

    // Step 2 - Navigate to URL
    await homePage.navigateToHomePage();

    // Step 3 - Click Products button
    await productsPage.clickProducts();

    // Step 4 - Verify Brands visible
await productsPage.verifyBrandsVisible();

// Step 5
await productsPage.clickPoloBrand();

// Step 6
await productsPage.verifyPoloBrandProductsVisible();

// Step 7 - Click another brand
await productsPage.clickHMBrand();

// Step 8 - Verify H&M brand products
await productsPage.verifyHMBrandProductsVisible();

});

test('Test Case 20 - Search Products and Verify Cart After Login', async ({ page }) => {

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);

    // Step 1 - Launch browser
    // Playwright launches browser automatically

    // Step 2 - Navigate to URL
    await homePage.navigateToHomePage();

    // Step 3 - Click Products button
    await productsPage.clickProducts();

     // Step 4 - Verify ALL PRODUCTS page
     await productsPage.verifyAllProductsPageVisible();

    // Step 5 - Search product
await productsPage.searchProduct('Top');


// Step 6
await productsPage.verifySearchedProductsVisible();

// Step 7
await productsPage.verifySearchResultsVisible();    

// Step 8 - Add searched products to cart
await productsPage.addSearchedProductsToCart();

// Step 9 - Click Cart
await cartPage.clickCartButton();

// Step 9 - Verify products are visible in cart
await productsPage.verifyProductsVisibleInCart();

// Step 10 - Click Signup / Login
await loginPage.clickSignupLogin();

// Step 10 - Verify login section
await loginPage.verifyLoginToAccountVisible();

// Step 10 - Enter login details
await loginPage.enterLoginDetails(
    'virat1818@gmail.com',
    'virat1818'
);

// Step 10 - Click Login
await loginPage.clickLogin();


// Verify login successful
await loginPage.verifyLoggedInAs();

// Step 11 - Go to Cart again
await cartPage.clickCartButton();

// Step 12 - Verify searched products are still visible after login
await productsPage.verifyProductsVisibleInCart();
});


test('Test Case 21 - Add review on product', async ({ page }) => {

    // Step 1 - Launch browser

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);

// Step 2 - Navigate to URL
await homePage.navigateToHomePage();

// Step 3 - Click Products
await productsPage.clickProducts();

// Step 4 - Verify ALL PRODUCTS page
await productsPage.verifyAllProductsPageVisible();

// Step 5 - Click View Product
await productsPage.clickFirstViewProduct();

// Step 6 - Verify Write Your Review
await productsPage.verifyWriteYourReviewVisible();

// Step 7 - Enter name, email and review
await productsPage.enterReviewDetails(
    'Test User',
    'testuser@example.com',
    'This product is very good.'
);

// Step 8 - Click Submit
await productsPage.clickSubmitReview();

// Step 9 - Verify success message
await productsPage.verifyReviewSuccessMessage();
});

test('Test Case 22 - Add to cart from Recommended items', async ({ page }) => {

    // Step 1 - Launch browser

    const homePage = new HomePage(page);
const productsPage = new ProductsPage(page);
const cartPage = new CartPage(page);

// Step 2 - Navigate to URL
await homePage.navigateToHomePage();

// Step 3 - Scroll to bottom of page
await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    
});

// Step 4 - Verify RECOMMENDED ITEMS
await productsPage.verifyRecommendedItemsVisible();

// Step 5 - Add Recommended Product to Cart
await productsPage.addRecommendedProductToCart();

// Step 6 - Click View Cart
await cartPage.clickViewCart();

// Step 7 - Verify product is displayed in cart
await productsPage.verifyProductsVisibleInCart();

});