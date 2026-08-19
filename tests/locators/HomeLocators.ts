export class HomeLocators {

    // Home Page
    homePageText =
        "//div[@class='item active']//h2[contains(text(),'Full-Fledged practice website for Automation Engin')]";

    

    subscriptionEmail =
        "//input[@id='susbscribe_email']";

    subscriptionButton =
        "//button[@id='subscribe']";

    subscriptionSuccessMessage =
        "//div[contains(@class,'alert-success') and contains(text(),'You have been successfully subscribed!')]";

        // TC25 Step 5 - Subscription
subscriptionText =
    "//h2[normalize-space()='Subscription']";

    // TC25 Step 6 - Scroll Up Arrow
scrollUpArrow =
    "//a[@id='scrollUp']";

    // TC25 Step 7 - Top page text
fullFledgedText =
    "//*[contains(text(),'Full-Fledged practice website for Automation Engineers')]";
}