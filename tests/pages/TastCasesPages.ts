import { Page, expect } from '@playwright/test';
import { TestCasesLocators } from '../locators/TastCasesLocators';

export class TestCasesPage {

    readonly page: Page;
    readonly testCasesLocators: TestCasesLocators;

    constructor(page: Page) {
        this.page = page;
        this.testCasesLocators = new TestCasesLocators();
    }

    // Step 2
    async navigateToHomePage() {
        await this.page.goto('http://automationexercise.com');
    }

    // Step 3
    async verifyHomePageVisible() {
        await expect(
            this.page.locator(
                this.testCasesLocators.homePageText
            )
        ).toBeVisible();
    }

    // Step 4
    async clickTestCases() {
        await this.page.locator(
            this.testCasesLocators.testCasesButton
        ).click();
    }

    // Step 5
    async verifyTestCasesPageVisible() {
        await expect(
            this.page.locator(
                this.testCasesLocators.testCasesPageText
            )
        ).toBeVisible();
    }
}