import { Page, expect } from '@playwright/test';
import { HomeLocators } from '../locators/HomeLocators';

export class HomePage {

    readonly page: Page;
    readonly homeLocators: HomeLocators;

    constructor(page: Page) {
        this.page = page;
        this.homeLocators = new HomeLocators();
    }

    // Step 2
    async navigateToHomePage() {
        await this.page.goto('http://automationexercise.com');
    }

    // Step 3
    async verifyHomePageVisible() {
        await expect(
            this.page.locator(
                this.homeLocators.homePageText
            )
        ).toBeVisible();
    }

    // Step 4 - Scroll to footer
    async scrollToFooter() {
        await this.page.locator(
            this.homeLocators.subscriptionText
        ).scrollIntoViewIfNeeded();
    }

    // // Step 5
    // async verifySubscriptionVisible() {
    //     await expect(
    //         this.page.locator(
    //             this.homeLocators.subscriptionText
    //         )
    //     ).toBeVisible();
    // }

    // Step 6
    async enterSubscriptionEmail(email: string) {
        await this.page.locator(
            this.homeLocators.subscriptionEmail
        ).fill(email);
    }

    // Step 6 - Click arrow button
    async clickSubscriptionButton() {
        await this.page.locator(
            this.homeLocators.subscriptionButton
        ).click();
    }

    // Step 7
    async verifySubscriptionSuccessMessage() {
        await expect(
            this.page.locator(
                this.homeLocators.subscriptionSuccessMessage
            )
        ).toBeVisible();
    }

    // TC25 Step 5 - Verify Subscription visible
async verifySubscriptionVisible() {
    await expect(
        this.page.locator(
            this.homeLocators.subscriptionText
        )
    ).toBeVisible();
}

// TC25 Step 6 - Click Scroll Up Arrow
async clickScrollUpArrow() {
    await this.page.locator(
        this.homeLocators.scrollUpArrow
    ).click();
}

// TC25 Step 7 - Verify page scrolled up
async verifyPageScrolledUp() {
    await expect(
        this.page.locator(
            this.homeLocators.fullFledgedText
        ).first()
    ).toBeVisible();
}
}