import { Page, expect } from '@playwright/test';
import { OrderLocators } from '../locators/OrderLocators';

export class OrderPage {

    readonly page: Page;
    readonly orderLocators: OrderLocators;

    constructor(page: Page) {
        this.page = page;
        this.orderLocators = new OrderLocators();
    }

    // =========================================================
    // HOME PAGE
    // =========================================================

    // Step 2
    async navigateToHomePage() {
        await this.page.goto('http://automationexercise.com');
    }

    // Step 3
    async verifyHomePageVisible() {
        await expect(
            this.page.locator(
                this.orderLocators.homePageText
            ).first()
        ).toBeVisible();
    }

    // =========================================================
    // SIGNUP / LOGIN
    // =========================================================

    // Step 4
    async clickSignupLogin() {
        await this.page.locator(
            this.orderLocators.signupLoginButton
        ).click();
    }

    // =========================================================
    // CREATE ACCOUNT
    // =========================================================

    // Step 5 - Signup
    async signup(name: string, email: string) {

        await this.page.locator(
            this.orderLocators.signupName
        ).fill(name);

        await this.page.locator(
            this.orderLocators.signupEmail
        ).fill(email);

        await this.page.locator(
            this.orderLocators.signupButton
        ).click();
    }

    // Fill account information
    async fillAccountInformation(
        password: string,
        firstName: string,
        lastName: string,
        address: string,
        state: string,
        city: string,
        zipcode: string,
        mobileNumber: string
    ) {

        await this.page.locator(
            this.orderLocators.titleMr
        ).check();

        await this.page.locator(
            this.orderLocators.password
        ).fill(password);

        await this.page.locator(
            this.orderLocators.day
        ).selectOption('10');

        await this.page.locator(
            this.orderLocators.month
        ).selectOption('5');

        await this.page.locator(
            this.orderLocators.year
        ).selectOption('1995');

        await this.page.locator(
            this.orderLocators.firstName
        ).fill(firstName);

        await this.page.locator(
            this.orderLocators.lastName
        ).fill(lastName);

        await this.page.locator(
            this.orderLocators.address
        ).fill(address);

        await this.page.locator(
            this.orderLocators.country
        ).selectOption({ label: 'India' });

        await this.page.locator(
            this.orderLocators.state
        ).fill(state);

        await this.page.locator(
            this.orderLocators.city
        ).fill(city);

        await this.page.locator(
            this.orderLocators.zipcode
        ).fill(zipcode);

        await this.page.locator(
            this.orderLocators.mobileNumber
        ).fill(mobileNumber);
    }

    // Create account
    async clickCreateAccount() {
        await this.page.locator(
            this.orderLocators.createAccountButton
        ).click();
    }

    // =========================================================
    // ACCOUNT CREATED
    // =========================================================

    async verifyAccountCreated() {
        await expect(
            this.page.locator(
                this.orderLocators.accountCreatedText
            )
        ).toBeVisible();
    }

    async clickContinue() {
        await this.page.locator(
            this.orderLocators.continueButton
        ).click();
    }

    // =========================================================
    // LOGGED IN
    // =========================================================

    async verifyLoggedIn() {
        await expect(
            this.page.locator(
                this.orderLocators.loggedInAs
            )
        ).toBeVisible();
    }

    // =========================================================
    // ADD PRODUCT
    // =========================================================

    // Step 8
    async addProductToCart() {

        await this.page.locator(
            this.orderLocators.productsButton
        ).click();

        await this.page.locator(
            this.orderLocators.firstProductAddToCart
        ).click();
    }

    // =========================================================
    // CART
    // =========================================================

    // Step 9
    async clickCart() {
        await this.page.locator(
            this.orderLocators.cartButton
        ).click();
    }

    // Step 10
    async verifyCartPage() {
        await expect(
            this.page.locator(
                this.orderLocators.cartPageText
            )
        ).toBeVisible();
    }

    // =========================================================
    // CHECKOUT
    // =========================================================

    // Step 11
    async clickProceedToCheckout() {
        await this.page.locator(
            this.orderLocators.proceedToCheckout
        ).click();
    }

    // Step 12
    async verifyAddressAndReviewOrder() {

        await expect(
            this.page.locator(
                this.orderLocators.addressDetails
            )
        ).toBeVisible();

        await expect(
            this.page.locator(
                this.orderLocators.reviewOrder
            )
        ).toBeVisible();
    }

    // =========================================================
    // PLACE ORDER
    // =========================================================

    // Step 13
    async enterOrderComment(comment: string) {

        await this.page.locator(
            this.orderLocators.orderComment
        ).fill(comment);
    }

    async clickPlaceOrder() {
        await this.page.locator(
            this.orderLocators.placeOrder
        ).click();
    }

    // =========================================================
    // PAYMENT
    // =========================================================

    // Step 14
    async enterPaymentDetails(
        nameOnCard: string,
        cardNumber: string,
        cvc: string,
        expiryMonth: string,
        expiryYear: string
    ) {

        await this.page.locator(
            this.orderLocators.nameOnCard
        ).fill(nameOnCard);

        await this.page.locator(
            this.orderLocators.cardNumber
        ).fill(cardNumber);

        await this.page.locator(
            this.orderLocators.cvc
        ).fill(cvc);

        await this.page.locator(
            this.orderLocators.expirationMonth
        ).fill(expiryMonth);

        await this.page.locator(
            this.orderLocators.expirationYear
        ).fill(expiryYear);
    }

    async clickPayAndConfirmOrder() {
        await this.page.locator(
            this.orderLocators.payAndConfirmOrder
        ).click();
    }

    // =========================================================
    // ORDER SUCCESS
    // =========================================================

    // Step 16
    async verifyOrderSuccess() {
        await expect(
            this.page.locator(
                this.orderLocators.orderSuccessMessage
            )
        ).toBeVisible();
    }


    // TC23 Step 12 - Verify Delivery Address
async verifyDeliveryAddress() {

    const deliveryAddress = this.page.locator(
        this.orderLocators.deliveryAddress
    );

    await expect(deliveryAddress).toContainText('Test User');
    await expect(deliveryAddress).toContainText('123 Test Street');
    await expect(deliveryAddress).toContainText('Ahmedabad');
    await expect(deliveryAddress).toContainText('Gujarat');
    await expect(deliveryAddress).toContainText('380001');
    await expect(deliveryAddress).toContainText('India');
}

// TC23 Step 13 - Verify Billing Address
async verifyBillingAddress() {

    const billingAddress = this.page.locator(
        this.orderLocators.billingAddress
    );

    await expect(billingAddress).toContainText('Test User');
    await expect(billingAddress).toContainText('123 Test Street');
    await expect(billingAddress).toContainText('Ahmedabad');
    await expect(billingAddress).toContainText('Gujarat');
    await expect(billingAddress).toContainText('380001');
    await expect(billingAddress).toContainText('India');
}

// TC24 Step 19 - Download Invoice and verify download
async downloadInvoice() {

    const downloadPromise = this.page.waitForEvent('download');

    await this.page.locator(
        this.orderLocators.downloadInvoiceButton
    ).click();

    const download = await downloadPromise;

    expect(
        download.suggestedFilename()
    ).toBeTruthy();
}



   
}