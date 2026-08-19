export class LoginLocators {

    // Home Page
    homePageText =
        "(//h2[contains(text(),'Full-Fledged practice website for Automation Engineers')])[1]";

    // Signup / Login
    signupLoginButton =
        "//a[contains(text(),'Signup / Login')]";

    // Login Page
    loginToAccountText =
        "//h2[contains(text(),'Login to your account')]";

    loginEmail =
        "//input[@data-qa='login-email']";

    loginPassword =
        "//input[@data-qa='login-password']";

    loginButton =
        "//button[@data-qa='login-button']";

    // // Logged in user
    loggedInAs =
        "//a[contains(text(),'Logged in as')]";

    // // Delete Account
    // deleteAccountButton =
    //     "//i[@class='fa fa-trash-o']/parent::a";

    // // Account Deleted
    // accountDeletedText =
    //     "//h2[@class='title text-center']";

    // // Incorrect Login
    loginErrorMessage =
        "//p[contains(text(),'Your email or password is incorrect!')]";


    //LogOut User
    
    logoutButton =
        "//a[contains(.,'Logout')]";

}
