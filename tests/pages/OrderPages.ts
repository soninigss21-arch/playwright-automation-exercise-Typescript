import { Page, expect } from '@playwright/test';
import { OrderLocators } from '../locators/OrderLocators';
import { CommonMethods } from '../utils/CommonMethods';

export class OrderPage {

    readonly page: Page;
    readonly orderLocators: OrderLocators;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.orderLocators = new OrderLocators();
        this.commonMethods = new CommonMethods(page);
    }

    // =========================================================
    // CHECKOUT
    // =========================================================

    async clickProceedToCheckout() {
        await this.commonMethods.clickElement(
            this.orderLocators.proceedToCheckout
        );
    }

    async verifyAddressAndReviewOrder() {
        await this.commonMethods.verifyElementVisible(
            this.orderLocators.addressDetails
        );

        await this.commonMethods.verifyElementVisible(
            this.orderLocators.reviewOrder
        );
    }

    // =========================================================
    // PLACE ORDER
    // =========================================================

    async enterOrderComment(comment: string) {
        await this.commonMethods.fillElement(
            this.orderLocators.orderComment,
            comment
        );
    }

    async clickPlaceOrder() {
        await this.commonMethods.clickElement(
            this.orderLocators.placeOrder
        );
    }

    // =========================================================
    // PAYMENT
    // =========================================================

    async enterPaymentDetails(
        nameOnCard: string,
        cardNumber: string,
        cvc: string,
        expiryMonth: string,
        expiryYear: string
    ) {
        await this.commonMethods.fillElement(
            this.orderLocators.nameOnCard,
            nameOnCard
        );

        await this.commonMethods.fillElement(
            this.orderLocators.cardNumber,
            cardNumber
        );

        await this.commonMethods.fillElement(
            this.orderLocators.cvc,
            cvc
        );

        await this.commonMethods.fillElement(
            this.orderLocators.expirationMonth,
            expiryMonth
        );

        await this.commonMethods.fillElement(
            this.orderLocators.expirationYear,
            expiryYear
        );
    }

    async clickPayAndConfirmOrder() {
        await this.commonMethods.clickElement(
            this.orderLocators.payAndConfirmOrder
        );
    }

    async verifyOrderSuccess() {
        await this.commonMethods.verifyElementVisible(
            this.orderLocators.orderSuccessMessage
        );
    }

    // =========================================================
    // TC23 - ADDRESS VERIFICATION
    // =========================================================

    async verifyDeliveryAddress(
        expectedValues: string[]
    ) {
        for (const value of expectedValues) {
            await this.commonMethods
                .verifyElementContainsText(
                    this.orderLocators.deliveryAddress,
                    value
                );
        }
    }

    async verifyBillingAddress(
        expectedValues: string[]
    ) {
        for (const value of expectedValues) {
            await this.commonMethods
                .verifyElementContainsText(
                    this.orderLocators.billingAddress,
                    value
                );
        }
    }

    // =========================================================
    // TC24 - DOWNLOAD INVOICE
    // =========================================================

   async downloadInvoice() {
    const [download] = await Promise.all([
        this.page.waitForEvent('download'),

        this.page.locator(
            this.orderLocators.downloadInvoiceButton
        ).click()
    ]);

    expect(
        download.suggestedFilename()
    ).toBeTruthy();
}
}