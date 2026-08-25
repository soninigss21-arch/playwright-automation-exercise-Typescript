import { Page, expect } from '@playwright/test';
import { HomeLocators } from '../locators/HomeLocators';
import { CommonMethods } from '../utils/CommonMethods';

export class HomePage {

    readonly page: Page;
    readonly homeLocators: HomeLocators;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.homeLocators = new HomeLocators();
        this.commonMethods = new CommonMethods(page);
    }

    // Step 2
    async navigateToHomePage() {
        await this.commonMethods.navigateTo(
            'https://automationexercise.com'
        );
    }

    // Step 3
    async verifyHomePageVisible() {
        await this.commonMethods.verifyElementVisible(
            this.homeLocators.homePageText
        );
    }
    // Step 4 - Scroll to footer
    async scrollToFooter() {
        await this.commonMethods.scrollToElement(
            this.homeLocators.subscriptionText
        );
    }

    async verifySubscriptionVisible() {
        await this.commonMethods.verifyElementVisible(
            this.homeLocators.subscriptionText
        );
    }

    // Step 6
    async enterSubscriptionEmail(email: string) {
        await this.commonMethods.fillElement(
            this.homeLocators.subscriptionEmail,
            email
        );
    }

    async clickSubscriptionButton() {
        await this.commonMethods.clickElement(
            this.homeLocators.subscriptionButton
        );
    }



    // Step 7
    async verifySubscriptionSuccessMessage() {
        const successMessage = this.page.locator(
            this.homeLocators.subscriptionSuccessMessage
        );

        await expect(successMessage).toBeVisible({
            timeout: 15000
        });
    }



    // TC25 Step 5 - Verify Subscription visible
    async scrollToBottom() {
        await this.commonMethods.scrollToBottom();
    }


    // TC25 Step 6 - Click Scroll Up Arrow
    async clickScrollUpArrow() {
        await this.commonMethods.clickElement(
            this.homeLocators.scrollUpArrow
        );
    }

    // TC25 Step 7 - Verify page scrolled up
    async scrollToTop() {
        await this.commonMethods.scrollToTop();
    }


    // =========================================================
    // VERIFY TOP OF PAGE
    // =========================================================

    async verifyPageScrolledUp() {
        await this.commonMethods.verifyElementVisible(
            this.homeLocators.fullFledgedText
        );
    }
}
