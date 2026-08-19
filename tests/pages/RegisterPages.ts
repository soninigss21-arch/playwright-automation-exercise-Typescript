import { Page, expect } from '@playwright/test';
import { CommonMethods } from '../utils/CommanMethods';
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
        await this.page.goto('http://automationexercise.com');
    }

    async verifyHomePageVisible() {
        await expect(
            this.page.locator(this.registerLocators.homePageLogo)
        ).toBeVisible();
    }

    async clickSignupLogin() {
        // Use Playwright page click directly since CommonMethods has no clickElement
        await this.page.click(this.registerLocators.signupLoginButton);
    }

    async verifyNewUserSignupVisible() {
        await expect(
            this.page.locator(this.registerLocators.newUserSignupText)
        ).toBeVisible();
    }

    async enterName(name: string) {
        await this.page.fill(this.registerLocators.nameInput, name);
    }

    async enterEmail(email: string) {
        await this.page.fill(this.registerLocators.emailInput, email);
    }

    async clickSignupButton() {
    await this.commonMethods.clickElement(
        this.registerLocators.signupButton
    );
    }

      async verifyAccountInformationVisible() {
      await expect(
          this.page.locator(this.registerLocators.accountInformationText)
      ).toBeVisible();
      }

    async selectTitle() {
    await this.page
    .locator(this.registerLocators.TitleMr)
    .check();
}

    async enterPassword(password: string) {
    await this.page.locator(this.registerLocators.Password).fill(password);
}

    async selectDateOfBirth(day: string, month: string, year: string) {
    await this.page.locator(this.registerLocators.DateOfBirthDay).selectOption(day);
    await this.page.locator(this.registerLocators.DateOfBirthMonth).selectOption(month);
    await this.page.locator(this.registerLocators.DateOfBirthYear).selectOption(year);
}
    async selectNewsletter() {
        await this.page.locator(this.registerLocators.Newsletter).check();
}

    async selectSpecialOffers() {
    await this.page.locator(this.registerLocators.SpecialOffers).check();
}

    async enterFirstName(firstName: string) {
    await this.page.locator(this.registerLocators.FirstName).fill(firstName);
}
    async enterLastName(lastName: string) {
    await this.page.locator(this.registerLocators.LastName).fill(lastName);
}

    async enterCompany(company: string) {
    await this.page.locator(this.registerLocators.Company).fill(company);
}

    async enterAddress(address:string) {
    await this.page.locator(this.registerLocators.Address).fill(address);
}

    async selectCountry(country: string) {
    await this.page.locator(this.registerLocators.Country).selectOption({ label: country });
}

    async enterState(state: string) {
    await this.page.locator(this.registerLocators.State).fill(state);
}

    async enterCity(city: string) {
    await this.page.locator(this.registerLocators.City).fill(city);
}

    async enterZipcode(zipcode: string) {
    await this.page.locator(this.registerLocators.Zipcode).fill(zipcode);
}

    async enterMobileNumber(mobileNumber: string) {
    await this.page.locator(this.registerLocators.MobileNumber).fill(mobileNumber);
}

// CREATE ACCOUNT

    async clickCreateAccount() {
    await this.page.locator(this.registerLocators.CreateAccount).click();
}

// =========================================================
// TC5 - EXISTING EMAIL
// =========================================================

async verifyEmailAlreadyExistVisible() {
    await expect(
        this.page.locator(
            this.registerLocators.emailAlreadyExistText
        )
    ).toBeVisible();
}


// TC14 Step 10 - Verify ACCOUNT CREATED!
async verifyAccountCreated() {
    await expect(
        this.page.locator(
            this.registerLocators.accountCreatedText
        )
    ).toBeVisible();
}

// TC14 Step 10 - Click Continue
async clickContinueButton() {
    await this.page.locator(
        this.registerLocators.continueButton
    ).click();
}

// TC14 Step 11 - Verify Logged in as username
async verifyLoggedInAsUser() {
    await expect(
        this.page.locator(
            this.registerLocators.loggedInAsText
        )
    ).toBeVisible();
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








}