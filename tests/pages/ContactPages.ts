import { Page, expect } from '@playwright/test';
import { ContactLocators } from '../locators/ContactLocators';

export class ContactPage {

    readonly page: Page;
    readonly contactLocators: ContactLocators;

    constructor(page: Page) {
        this.page = page;
        this.contactLocators = new ContactLocators();
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
                this.contactLocators.homePageText
            )
        ).toBeVisible();
    }

    // =========================================================
    // CONTACT US PAGE
    // =========================================================

    // Step 4
    async clickContactUs() {
        await this.page.locator(
            this.contactLocators.contactUsButton
        ).click();
    }

    // Step 5
    async verifyGetInTouchVisible() {
        await expect(
            this.page.locator(
                this.contactLocators.getInTouchText
            )
        ).toBeVisible();
    }

    // =========================================================
    // CONTACT FORM
    // =========================================================

    // Step 6
    async enterContactDetails(
        name: string,
        email: string,
        subject: string,
        message: string
    ) {

        await this.page.locator(
            this.contactLocators.nameInput
        ).fill(name);

        await this.page.locator(
            this.contactLocators.emailInput
        ).fill(email);

        await this.page.locator(
            this.contactLocators.subjectInput
        ).fill(subject);

        await this.page.locator(
            this.contactLocators.messageInput
        ).fill(message);
    }

    // Step 7
    async uploadFile(filePath: string) {
        await this.page.locator(
            this.contactLocators.uploadFile
        ).setInputFiles(filePath);
    }

    // Step 8 - Submit and handle alert
    async clickSubmit() {

    this.page.once('dialog', async dialog => {
        console.log('Dialog:', dialog.message());
        await dialog.accept();
    });

    await this.page.locator(
        this.contactLocators.submitButton
    ).click();
}



    // // Step 10
    // async verifySuccessMessageVisible() {
    //     await expect(
    //         this.page.locator(
    //             this.contactLocators.successMessage
    //         )
    //     ).toBeVisible({ timeout: 10000 });
    // }

    // =========================================================
    // HOME
    // =========================================================

    // Step 11
    // async clickHome() {
    //     await this.page.locator(
    //         this.contactLocators.homeButton
    //     ).click();
    // }

    // async verifyLandedOnHomePage() {
    //     await expect(
    //         this.page.locator(
    //             this.contactLocators.homePageText
    //         )
    //     ).toBeVisible();
    // }
}