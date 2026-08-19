import { Page, expect } from '@playwright/test';
import { CartLocators } from '../locators/CartLocators';


export class CartPage {

    readonly page: Page;
    readonly cartLocators: any;

    constructor(page: Page) {
        this.page = page;
        this.cartLocators = new CartLocators();
    }



    async verifyHomePageVisible() {
        await expect(
            this.page
        ).toHaveURL(/.*automationexercise.com.*/);
    }

    // TC11 Step 4 - Click Cart button
    async clickCartButton() {
        await this.page.locator(
            this.cartLocators.cartButton
        ).click();
    }

    // TC11 Step 5 - Scroll down to footer
async scrollToFooter() {
    await this.page.locator(
        this.cartLocators.subscriptionText
    ).scrollIntoViewIfNeeded();
}

// TC11 Step 6 - Verify SUBSCRIPTION text
async verifySubscriptionVisible() {
    await expect(
        this.page.locator(
            this.cartLocators.subscriptionText
        )
    ).toBeVisible();
}

// TC11 Step 7 - Enter subscription email
async enterSubscriptionEmail(email: string) {
    await this.page.locator(
        this.cartLocators.subscriptionEmail
    ).fill(email);
}

// TC11 Step 7 - Click subscription arrow button
async clickSubscriptionButton() {
    await this.page.locator(
        this.cartLocators.subscriptionButton
    ).click();
}

// TC11 Step 8 - Verify subscription success message
async verifySubscriptionSuccessMessage() {
    await expect(
        this.page.locator(
            this.cartLocators.subscriptionSuccessMessage
        )
    ).toBeVisible();
}

    // TC12 Step 9 - Click Products
    async clickProducts() {
        await this.page.locator(
            this.cartLocators.productsButton
        ).click();
    }


 // TC12 Step 5 - Hover over first product
async hoverFirstProduct() {
    await this.page.locator(
        this.cartLocators.firstProduct
    ).hover();
}

// TC12 Step 5 - Click Add to cart for first product
async addFirstProductToCart() {
    await this.page.locator(
        this.cartLocators.firstProductAddToCart
    ).click();
}

  // TC12 Step 6 - Continue Shopping
async clickContinueShopping() {
    await this.page.locator(
        this.cartLocators.continueShoppingButton
    ).click();
}

// TC12 Step 7 - Hover over second product
async hoverSecondProduct() {
    await this.page.locator(
        this.cartLocators.secondProduct
    ).hover();
}

  // TC12 Step 7 - Add second product to cart
async addSecondProductToCart() {
    await this.page.locator(
        this.cartLocators.secondProductAddToCart
    ).click();
}

   // TC12 Step 8 - Click View Cart
async clickViewCart() {
    await this.page.locator(
        this.cartLocators.viewCartButton
    ).click();
}

// TC12 Step 9 - Verify both products are added to cart
async verifyBothProductsInCart() {

    await expect(
        this.page.locator(
            this.cartLocators.firstProductInCart
        )
    ).toBeVisible();

    await expect(
        this.page.locator(
            this.cartLocators.secondProductInCart
        )
    ).toBeVisible();
}

// TC12 Step 10 - Verify price, quantity and total
async verifyProductDetails() {

    // Product 1
    await expect(
        this.page.locator(this.cartLocators.firstProductPrice)
    ).toHaveText('Rs. 500');

    await expect(
        this.page.locator(this.cartLocators.firstProductQuantity)
    ).toHaveText('1');

    await expect(
        this.page.locator(this.cartLocators.firstProductTotal)
    ).toHaveText('Rs. 500');

    // Product 2
    await expect(
        this.page.locator(this.cartLocators.secondProductPrice)
    ).toHaveText('Rs. 400');

    await expect(
        this.page.locator(this.cartLocators.secondProductQuantity)
    ).toHaveText('1');

    await expect(
        this.page.locator(this.cartLocators.secondProductTotal)
    ).toHaveText('Rs. 400');
}

// TC13 Step 4 - Click View Product
async clickFirstViewProduct() {
    await this.page.locator(
        this.cartLocators.firstViewProduct
    ).click();
}

   // TC13 Step 5 - Verify product detail page
async verifyProductDetailOpened() {
    await expect(
        this.page.locator(
            this.cartLocators.productDetailName
        )
    ).toBeVisible();
}

    // TC13 Step 6 - Increase quantity to 4
async increaseQuantityToFour() {
    await this.page.locator(
        this.cartLocators.quantityInput
    ).fill('1');
}

    // TC13 Step 7 - Click Add to cart
async clickProductDetailAddToCart() {
    await this.page.locator(
        this.cartLocators.productDetailAddToCart
    ).click();
}

   async clickViewCartFromProduct() {
    await this.page.locator(
        this.cartLocators.viewCartLink
    ).click();
}

   // TC13 Step 9 - Verify exact quantity in cart
async verifyProductQuantity() {
    await expect(
        this.page.locator(
            this.cartLocators.cartProductQuantity
        )
    ).toHaveText('1');
}

// TC14 Step 6 - Verify Cart page is displayed
async verifyCartPageDisplayed() {
    await expect(
        this.page.locator(
            this.cartLocators.shoppingCartText
        )
    ).toBeVisible();
}

// TC14 Step 7 - Click Proceed To Checkout
async clickProceedToCheckout() {
    await this.page.locator(
        this.cartLocators.proceedToCheckoutButton
    ).click();
}

// TC14 Step 8 - Click Register / Login
async clickRegisterLogin() {
    await this.page.locator(
        this.cartLocators.registerLoginLink
    ).click();
}

// TC14 Step 14 - Verify Address Details and Review Your Order
async verifyAddressDetailsAndReviewOrder() {

    await expect(
        this.page.locator(
            this.cartLocators.addressDetailsText
        )
    ).toBeVisible();

    await expect(
        this.page.locator(
            this.cartLocators.reviewOrderText
        )
    ).toBeVisible();
}

// TC14 Step 15 - Enter order comment
async enterOrderComment(comment: string) {
    await this.page.locator(
        this.cartLocators.orderComment
    ).fill(comment);
}

// TC14 Step 15 - Click Place Order
async clickPlaceOrder() {
    await this.page.locator(
        this.cartLocators.placeOrderButton
    ).click();
}

// TC14 Step 16 - Enter Payment Details
async enterPaymentDetails(
    name: string,
    cardNumber: string,
    cvc: string,
    month: string,
    year: string
) {
    await this.page.locator(
        this.cartLocators.nameOnCard
    ).fill(name);

    await this.page.locator(
        this.cartLocators.cardNumber
    ).fill(cardNumber);

    await this.page.locator(
        this.cartLocators.cvc
    ).fill(cvc);

    await this.page.locator(
        this.cartLocators.expiryMonth
    ).fill(month);

    await this.page.locator(
        this.cartLocators.expiryYear
    ).fill(year);
}

// TC14 Step 17 - Click Pay and Confirm Order
async clickPayAndConfirmOrder() {
    await this.page.locator(
        this.cartLocators.payAndConfirmOrderButton
    ).click();
}

// TC14 Step 18 - Verify order placed successfully
async verifyOrderPlacedSuccessfully() {
    await expect(
        this.page.locator(
            this.cartLocators.orderPlacedSuccessMessage
        )
    ).toBeVisible();
}

// TC17 Step 7 - Remove first product
async removeFirstProduct() {
    await this.page.locator(
        this.cartLocators.removeFirstProductButton
    ).click();
}

// TC17 Step 8 - Verify product removed from cart
async verifyProductRemoved() {
    await expect(
        this.page.locator(
            this.cartLocators.cartProductRows
        )
    ).toHaveCount(0);
}


}