export class ContactLocators {

    // Home Page
    homePageText =
        "//div[@class='item active']//h2[contains(text(),'Full-Fledged practice website for Automation Engin')]";

    // Contact Us
    contactUsButton =
        "//a[contains(.,'Contact us')]";

    // Contact Us Page
    getInTouchText =
        "//h2[normalize-space()='Get In Touch']";

    // Form fields
    nameInput =
        "//input[@data-qa='name']";

    emailInput =
        "//input[@data-qa='email']";

    subjectInput =
        "//input[@data-qa='subject']";

    messageInput =
        "//textarea[@data-qa='message']";

    // File upload
    uploadFile =
        "//input[@type='file']";

    // Submit
    submitButton =
        "//input[@class='btn btn-primary pull-left submit_form']";

    successMessage =
        "//div[@class='status alert alert-success']";

    // Home button
    homeButton =
        "//span[normalize-space()='Home']";
}