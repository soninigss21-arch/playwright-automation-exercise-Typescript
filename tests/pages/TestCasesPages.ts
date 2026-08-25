import { Page, expect } from '@playwright/test';
import { TestCasesLocators } from '../locators/TestCasesLocators';
import { CommonMethods } from '../utils/CommonMethods';

export class TestCasesPage {

    readonly page: Page;
    readonly testCasesLocators: TestCasesLocators;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.testCasesLocators = new TestCasesLocators();
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
            this.testCasesLocators.homePageText
        );
    }

    // Step 4
    async clickTestCases() {
        await this.commonMethods.clickElement(
            this.testCasesLocators.testCasesButton
        )
    }

    // Step 5
    async verifyTestCasesPageVisible() {
        await this.commonMethods.verifyURL(
            /\/test_cases\/?(?:[?#].*)?$/
        );

        await this.commonMethods.verifyElementVisible(
            this.testCasesLocators.testCasesPageText
        );

    }
}