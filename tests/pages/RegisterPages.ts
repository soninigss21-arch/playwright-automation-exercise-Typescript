import { Page } from '@playwright/test';
import { CommonMethods } from '../utils/CommonMethods';
import { RegisterLocators } from '../locators/RegisterLocators';

export class RegisterPage {

    readonly page: Page;
    readonly commonMethods: CommonMethods;
    readonly registerLocators: RegisterLocators;

    constructor(page: Page) {
        this.page = page;
        this.commonMethods = new CommonMethods(page);
        this.registerLocators = new RegisterLocators();
    }

    async gotoRegisterPage() {
        await this.commonMethods.navigateTo(
            'https://automationexercise.com'
        );
    }

    async verifyHomePageVisible() {
        await this.commonMethods.verifyElementVisible(
            this.registerLocators.homePageLogo
        );
    }

    async clickSignupLogin() {
        await this.commonMethods.clickElement(
            this.registerLocators.signupLoginButton
        );
    }

    async verifyNewUserSignupVisible() {
        await this.commonMethods.verifyElementVisible(
            this.registerLocators.newUserSignupText
        );
    }

    async enterName(name: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.nameInput,
            name
        );
    }

    async enterEmail(email: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.emailInput,
            email
        );
    }

    async clickSignupButton() {
        await this.commonMethods.clickElement(
            this.registerLocators.signupButton
        );
    }

    async verifyAccountInformationVisible() {
        await this.commonMethods.verifyElementVisible(
            this.registerLocators.accountInformationText
        );
    }

    async selectTitle() {
        await this.commonMethods.checkElement(
            this.registerLocators.TitleMr
        );
    }

    async enterPassword(password: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.Password,
            password
        );
    }

    async selectDateOfBirth(
        day: string,
        month: string,
        year: string
    ) {
        await this.commonMethods.selectOption(
            this.registerLocators.DateOfBirthDay,
            day
        );

        await this.commonMethods.selectOption(
            this.registerLocators.DateOfBirthMonth,
            month
        );

        await this.commonMethods.selectOption(
            this.registerLocators.DateOfBirthYear,
            year
        );
    }

    async selectNewsletter() {
        await this.commonMethods.checkElement(
            this.registerLocators.Newsletter
        );
    }

    async selectSpecialOffers() {
        await this.commonMethods.checkElement(
            this.registerLocators.SpecialOffers
        );
    }

    async enterFirstName(firstName: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.FirstName,
            firstName
        );
    }

    async enterLastName(lastName: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.LastName,
            lastName
        );
    }

    async enterCompany(company: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.Company,
            company
        );
    }

    async enterAddress(address: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.Address,
            address
        );
    }

    async selectCountry(country: string) {
        await this.commonMethods.selectOptionByLabel(
            this.registerLocators.Country,
            country
        );
    }

    async enterState(state: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.State,
            state
        );
    }

    async enterCity(city: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.City,
            city
        );
    }

    async enterZipcode(zipcode: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.Zipcode,
            zipcode
        );
    }

    async enterMobileNumber(mobileNumber: string) {
        await this.commonMethods.fillElement(
            this.registerLocators.MobileNumber,
            mobileNumber
        );
    }

    async clickCreateAccount() {
        await this.commonMethods.clickElement(
            this.registerLocators.CreateAccount
        );
    }

    // =========================================================
    // TC5 - EXISTING EMAIL
    // =========================================================

    async verifyEmailAlreadyExistVisible() {
        await this.commonMethods.verifyElementVisible(
            this.registerLocators.emailAlreadyExistText
        );
    }

    async verifyAccountCreated() {
        await this.commonMethods.verifyElementVisible(
            this.registerLocators.accountCreatedText
        );
    }

    async clickContinueButton() {
    await this.commonMethods.dispatchClickElement(
        this.registerLocators.continueButton
    );
}

    async verifyLoggedInAsUser() {
        await this.commonMethods.verifyElementVisible(
            this.registerLocators.loggedInAsText
        );
    }
}

// // TC14 Step 19 - Click Delete Account
// async clickDeleteAccount() {
//     await this.page.locator(
//         this.registerLocators.deleteAccountButton
//     ).click();
// }

// // TC14 Step 20 - Verify ACCOUNT DELETED!
// async verifyAccountDeleted() {
//     await expect(
//         this.page.locator(
//             this.registerLocators.accountDeletedText
//         )
//     ).toBeVisible();
// }







