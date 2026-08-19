import { Page } from '@playwright/test';
import { CommonMethods } from '../utils/CommanMethods';
import { LoginLocators } from '../locators/LoginLocators';

export class LoginPage {

    readonly page: Page;
    readonly commonMethods: CommonMethods;
    readonly loginLocators: LoginLocators;

    constructor(page: Page) {

        this.page = page;
        this.commonMethods = new CommonMethods(page);
        this.loginLocators = new LoginLocators();
    }


    // =========================================================
    // HOME PAGE
    // =========================================================

    async navigateToHomePage() {

        await this.commonMethods.navigateTo(
            'http://automationexercise.com'
        );
    }

    async verifyHomePageVisible() {

        await this.commonMethods.verifyElementVisible(
            this.loginLocators.homePageText
        );
    }


    // =========================================================
    // LOGIN PAGE
    // =========================================================

    async clickSignupLogin() {

        await this.commonMethods.clickElement(
            this.loginLocators.signupLoginButton
        );
    }

    async verifyLoginToAccountVisible() {

        await this.commonMethods.verifyElementVisible(
            this.loginLocators.loginToAccountText
        );
    }

    async enterLoginDetails(
        email: string,
        password: string
    ) {

        await this.commonMethods.fillElement(
            this.loginLocators.loginEmail,
            email
        );

        await this.commonMethods.fillElement(
            this.loginLocators.loginPassword,
            password
        );
    }

    async clickLogin() {

        await this.commonMethods.clickElement(
            this.loginLocators.loginButton
        );
    }


    // =========================================================
    // SUCCESSFUL LOGIN
    // =========================================================

    async verifyLoggedInAs() {

        await this.commonMethods.verifyElementVisible(
            this.loginLocators.loggedInAs
        );
    }


    // =========================================================
    // INCORRECT LOGIN
    // =========================================================

    async verifyLoginErrorVisible() {

        await this.commonMethods.verifyElementVisible(
            this.loginLocators.loginErrorMessage
        );
    }


    // =========================================================
    // LOGOUT
    // =========================================================

    async clickLogout() {

        await this.commonMethods.clickElement(
            this.loginLocators.logoutButton
        );
    }

    async verifyLoginPageVisible() {

        await this.commonMethods.verifyElementVisible(
            this.loginLocators.loginToAccountText
        );
    }


    // =========================================================
    // DELETE ACCOUNT
    // TC2 METHODS REMAIN COMMENTED
    // =========================================================

    // async clickDeleteAccount() {
    //
    //     await this.commonMethods.clickElement(
    //         this.loginLocators.deleteAccountButton
    //     );
    // }

    // async verifyAccountDeletedVisible() {
    //
    //     await this.commonMethods.verifyElementVisible(
    //         this.loginLocators.accountDeletedText
    //     );
    // }
}