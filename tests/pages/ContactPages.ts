import { Page, expect } from '@playwright/test';
import { ContactLocators } from '../locators/ContactLocators';
import { CommonMethods } from '../utils/CommonMethods';

export class ContactPage {

    readonly page: Page;
    readonly contactLocators: ContactLocators;
    readonly commonMethods: CommonMethods;

    constructor(page: Page) {
        this.page = page;
        this.contactLocators = new ContactLocators();
        this.commonMethods = new CommonMethods(page);
    }

    // =========================================================
    // HOME PAGE
    // =========================================================

    // Step 2
    async navigateToHomePage() {
        await this.commonMethods.navigateTo('https://automationexercise.com');
    }

    // Step 3
    async verifyHomePageVisible() {
        await this.commonMethods.verifyElementVisible(
            this.contactLocators.homePageText
        );
    }


    // =========================================================
    // CONTACT US PAGE
    // =========================================================

    // Step 4
    async clickContactUs() {
        await this.commonMethods.clickElement(
            this.contactLocators.contactUsButton
        );
    }

    // Step 5
    async verifyGetInTouchVisible() {
        await this.commonMethods.verifyElementVisible(
            this.contactLocators.getInTouchText
        );
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
        await this.commonMethods.fillElement(
            this.contactLocators.nameInput,
            name
        );

        await this.commonMethods.fillElement(
            this.contactLocators.emailInput,
            email
        );

        await this.commonMethods.fillElement(
            this.contactLocators.subjectInput,
            subject
        );

        await this.commonMethods.fillElement(
            this.contactLocators.messageInput,
            message
        );
    }

    // Step 7
    async uploadFile(filePath: string) {
        await this.commonMethods.uploadFile(
            this.contactLocators.uploadFile,
            filePath
        );
    }


    // Step 8 - Submit and handle alert
  async clickSubmitAndAcceptDialog() {
        await this.commonMethods.clickAndAcceptDialog(
            this.contactLocators.submitButton
        );
    }

    async verifySuccessMessage() {
        await this.commonMethods.verifyElementContainsText(
            this.contactLocators.successMessage,
            'Success! Your details have been submitted successfully.',
            15000
        );

        await this.commonMethods.verifyElementVisible(
            this.contactLocators.successMessage
        );
    }

    async clickHomeButton() {
        await this.commonMethods.clickElement(
            this.contactLocators.homeButton
        );
    }

    async verifyReturnedToHomePage() {
        await this.commonMethods.verifyURL(
            /^https?:\/\/(www\.)?automationexercise\.com\/?$/
        );
    }
}

     // =========================================================
    // HOME BUTTON
    // =========================================================

    // async clickHome() {
    //     await this.commonMethods.clickElement(
    //         this.contactLocators.homeButton
    //     );
    // }

    // async verifyLandedOnHomePage() {
    //     await this.commonMethods.verifyElementVisible(
    //         this.contactLocators.homePageText
    //     );
    // }
