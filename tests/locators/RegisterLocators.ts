export class RegisterLocators {

    homePageLogo = "//i[@class='fa fa-home']/parent::a";

    signupLoginButton = "//i[@class='fa fa-lock']/parent::a";

    newUserSignupText = "//h2[normalize-space()='New User Signup!']";

    nameInput = "//input[@placeholder='Name']";

    emailInput = "//input[@data-qa='signup-email']";

    signupButton = "//button[normalize-space()='Signup']";

    accountInformationText = "//label[normalize-space()='Title']";

    TitleMr = "//input[@id='id_gender1']";
    TitleMrs = "//input[@id='id_gender2']";

    Password = "//input[@id='password']";

    DateOfBirthDay = "//select[@id='days']";
    DateOfBirthMonth = "//select[@id='months']";
    DateOfBirthYear = "//select[@id='years']";

    Newsletter = "//input[@id='newsletter']";
    SpecialOffers = "//input[@id='optin']";

    FirstName = "//input[@id='first_name']";
    LastName = "//input[@id='last_name']";

    Company = "//input[@id='company']";

    Address = "//input[@id='address1']";

    Country = "//select[@id='country']";

    State = "//input[@id='state']";

    City = "//input[@id='city']";

    Zipcode = "//input[@id='zipcode']";

    MobileNumber = "//input[@id='mobile_number']";

    CreateAccount = '//button[@data-qa="create-account"]';

    // TC5 - Existing Email Error
    emailAlreadyExistText =
    "//p[contains(text(),'Email Address already exist!')]";

    // TC14 Step 10 - Account Created text
accountCreatedText = "//h2[@data-qa='account-created']";

// TC14 Step 10 - Continue button
continueButton = "//a[@data-qa='continue-button']";

// TC14 Step 11 - Logged in as username
loggedInAsText = "//a[contains(.,'Logged in as')]";

// // TC14 Step 19 - Delete Account
// deleteAccountButton =
//     "//a[contains(.,'Delete Account')]";

//     // TC14 Step 20 - Account Deleted text
// accountDeletedText =
//     "//h2[@data-qa='account-deleted']";


}