import { Page, expect } from '@playwright/test';
import { CartLocators } from '../locators/CartLocators';
import { CommonMethods } from '../utils/CommonMethods';


export class CartPage {

    readonly page: Page;
    readonly cartLocators: CartLocators;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.cartLocators = new CartLocators();
        this.commonMethods = new CommonMethods(page);
    }



    async verifyHomePageVisible() {
        await this.commonMethods.verifyURL(/.*automationexercise.com.*/);
    }

    // TC11 Step 4 - Click Cart button
    async clickCartButton() {
        await this.commonMethods.clickElement(this.cartLocators.cartButton);
    }

    // TC11 Step 5 - Scroll down to footer
    async scrollToFooter() {
        await this.commonMethods.scrollToElement(this.cartLocators.subscriptionText);
    }

    // TC11 Step 6 - Verify SUBSCRIPTION text
    async verifySubscriptionVisible() {
        await this.commonMethods.verifyElementVisible(this.cartLocators.subscriptionText);
    }

    // TC11 Step 7 - Enter subscription email
    async enterSubscriptionEmail(email: string) {
        await this.commonMethods.fillElement(this.cartLocators.subscriptionEmail,
            email
        );
    }

    // TC11 Step 7 - Click subscription arrow button
    async clickSubscriptionButton() {
        await this.commonMethods.clickElement(this.cartLocators.subscriptionButton);
    }

    // TC11 Step 8 - Verify subscription success message
    async verifySubscriptionSuccessMessage() {
        await this.commonMethods.verifyElementVisible(this.cartLocators.subscriptionSuccessMessage);
    }

    // TC12 Step 9 - Click Products
    async clickProducts() {
        await this.commonMethods.clickElement(this.cartLocators.productsButton);
    }


    // TC12 Step 5 - Hover over first product
    async hoverFirstProduct() {
        await this.commonMethods.hoverElement(
            this.cartLocators.firstProduct
        );
    }

    // TC12 Step 5 - Click Add to cart for first product
    async addFirstProductToCart() {
        const addButton = this.page.locator(
            this.cartLocators.firstProductAddToCart
        );

        await addButton.evaluate(
            (element: HTMLElement) => element.click()
        );

        await expect(
            this.page.locator(this.cartLocators.addToCartModal)
        ).toBeVisible({ timeout: 10000 });



        // Confirm the modal actually opened
        await this.commonMethods.verifyElementVisible(
            this.cartLocators.addToCartModal
        );
    }

    // TC12 Step 6 - Continue Shopping
    async clickContinueShopping() {
        await this.commonMethods.clickElement(this.cartLocators.continueShoppingButton);
    }

    // TC12 Step 7 - Hover over second product
    async hoverSecondProduct() {
    await this.commonMethods.hoverElement(
        this.cartLocators.secondProduct
    );
}

    // TC12 Step 7 - Add second product to cart
    async addSecondProductToCart() {
        const addButton = this.page.locator(
            this.cartLocators.secondProductAddToCart
        );

        await addButton.evaluate(
            (element: HTMLElement) => element.click()
        );

        await expect(
            this.page.locator(this.cartLocators.addToCartModal)
        ).toBeVisible({ timeout: 10000 });



        await this.commonMethods.verifyElementVisible(
            this.cartLocators.addToCartModal
        );
    }

    // TC12 Step 8 - Click View Cart
    async clickViewCart() {
        await this.commonMethods.clickElement(this.cartLocators.viewCartButton);
    }

    // TC12 Step 9 - Verify both products are added to cart
    async verifyBothProductsInCart() {
        await this.commonMethods.verifyElementVisible(this.cartLocators.firstProductInCart);

        await this.commonMethods.verifyElementVisible(this.cartLocators.secondProductInCart);
    }

    // TC12 Step 10 - Verify price, quantity and total
    async verifyProductDetails(
        firstPrice: string,
        firstQuantity: string,
        firstTotal: string,
        secondPrice: string,
        secondQuantity: string,
        secondTotal: string
    ) {

        // Product 1
        await this.commonMethods.verifyElementText(this.cartLocators.firstProductPrice,
            firstPrice
        );

        await this.commonMethods.verifyElementText(this.cartLocators.firstProductQuantity,
            firstQuantity
        );

        await this.commonMethods.verifyElementText(this.cartLocators.firstProductTotal,
            firstTotal
        );


        // Product 2
        await this.commonMethods.verifyElementText(
            this.cartLocators.secondProductPrice,
            secondPrice
        );

        await this.commonMethods.verifyElementText(
            this.cartLocators.secondProductQuantity,
            secondQuantity
        );

        await this.commonMethods.verifyElementText(
            this.cartLocators.secondProductTotal,
            secondTotal
        );
    }

    // =========================================================
    // TC13 - VERIFY PRODUCT QUANTITY
    // =========================================================

    // TC13 Step 4 - Click View Product
    async clickFirstViewProduct() {
        await this.commonMethods.clickElement(this.cartLocators.firstViewProduct);
    }


    // TC13 Step 5 - Verify product detail page
    async verifyProductDetailOpened() {
        await this.commonMethods.verifyElementVisible(this.cartLocators.productDetailName);
    }

    // TC13 Step 6 - Increase quantity to 4
    async enterProductQuantity(quantity: string) {
        await this.commonMethods.fillElement(this.cartLocators.quantityInput,
            quantity
        );
    }

    // TC13 Step 7 - Click Add to cart
    async clickProductDetailAddToCart() {
        await this.commonMethods.clickElement(this.cartLocators.productDetailAddToCart);
    }

    async clickViewCartFromProduct() {
        await this.commonMethods.clickElement(
            this.cartLocators.viewCartButton
        );
    }

    // TC13 Step 9 - Verify exact quantity in cart
    async verifyProductQuantity(
        expectedQuantity: string
    ) {
        await this.commonMethods.verifyElementText(
            this.cartLocators.cartProductQuantity,
            expectedQuantity
        );
    }


    // =========================================================
    // TC14 - PLACE ORDER
    // =========================================================

    // TC14 Step 6 - Verify Cart page is displayed
    async verifyCartPageDisplayed() {
        await this.commonMethods.verifyElementVisible(
            this.cartLocators.shoppingCartText
        );
    }



    // TC14 Step 7 - Click Proceed To Checkout
    async clickProceedToCheckout() {
        await this.commonMethods.clickElement(
            this.cartLocators.proceedToCheckoutButton
        );
    }

    // TC14 Step 8 - Click Register / Login
    async clickRegisterLogin() {
        await this.commonMethods.clickElement(
            this.cartLocators.registerLoginLink
        );
    }

    // TC14 Step 14 - Verify Address Details and Review Your Order
    async verifyAddressDetailsAndReviewOrder() {
        await this.commonMethods.verifyElementVisible(
            this.cartLocators.addressDetailsText
        );

        await this.commonMethods.verifyElementVisible(
            this.cartLocators.reviewOrderText
        );
    }

    // TC14 Step 15 - Enter order comment
    async enterOrderComment(comment: string) {
        await this.commonMethods.fillElement(
            this.cartLocators.orderComment,
            comment
        );
    }

    // TC14 Step 15 - Click Place Order
    async clickPlaceOrder() {
        await this.commonMethods.clickElement(
            this.cartLocators.placeOrderButton
        );
    }

    // TC14 Step 16 - Enter Payment Details
    async enterPaymentDetails(
        name: string,
        cardNumber: string,
        cvc: string,
        month: string,
        year: string
    ) {
        await this.commonMethods.fillElement(
            this.cartLocators.nameOnCard,
            name
        );

        await this.commonMethods.fillElement(
            this.cartLocators.cardNumber,
            cardNumber
        );

        await this.commonMethods.fillElement(
            this.cartLocators.cvc,
            cvc
        );

        await this.commonMethods.fillElement(
            this.cartLocators.expiryMonth,
            month
        );

        await this.commonMethods.fillElement(
            this.cartLocators.expiryYear,
            year
        );
    }

    // TC14 Step 17 - Click Pay and Confirm Order
    async clickPayAndConfirmOrder() {
        await this.commonMethods.clickElement(
            this.cartLocators.payAndConfirmOrderButton
        );
    }

    // TC14 Step 18 - Verify order placed successfully
    async verifyOrderPlacedSuccessfully() {
        await this.commonMethods.verifyElementVisible(
            this.cartLocators.orderPlacedSuccessMessage
        );
    }

    // =========================================================
    // TC17 - REMOVE PRODUCT
    // =========================================================


    // TC17 Step 7 - Remove first product
    async removeFirstProduct() {
        await this.commonMethods.clickElement(
            this.cartLocators.removeFirstProductButton
        );
    }

    // TC17 Step 8 - Verify product removed from cart
    async verifyProductRemoved() {
        await this.commonMethods.verifyElementCount(
            this.cartLocators.cartProductRows,
            0
        );
    }

}