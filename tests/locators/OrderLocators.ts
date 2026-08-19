export class OrderLocators {

    // =========================
    // HOME PAGE
    // =========================
    homePageText =
        "//h2[contains(text(),'Full-Fledged practice website for Automation Engineers')]";

    // =========================
    // SIGNUP / LOGIN
    // =========================
    signupLoginButton =
        "//a[contains(text(),'Signup / Login')]";

    // =========================
    // SIGNUP
    // =========================
    signupName =
        "//input[@data-qa='signup-name']";

    signupEmail =
        "//input[@data-qa='signup-email']";

    signupButton =
        "//button[@data-qa='signup-button']";

    // =========================
    // ACCOUNT INFORMATION
    // =========================
    titleMr =
        "//input[@id='id_gender1']";

    titleMrs =
        "//input[@id='id_gender2']";

    password =
        "//input[@id='password']";

    day =
        "//select[@id='days']";

    month =
        "//select[@id='months']";

    year =
        "//select[@id='years']";

    firstName =
        "//input[@id='first_name']";

    lastName =
        "//input[@id='last_name']";

    company =
        "//input[@id='company']";

    address =
        "//input[@id='address1']";

    address2 =
        "//input[@id='address2']";

    country =
        "//select[@id='country']";

    state =
        "//input[@id='state']";

    city =
        "//input[@id='city']";

    zipcode =
        "//input[@id='zipcode']";

    mobileNumber =
        "//input[@id='mobile_number']";

    createAccountButton =
        "//button[@data-qa='create-account']";

    // =========================
    // ACCOUNT CREATED
    // =========================
    accountCreatedText =
        "//b[contains(text(),'Account Created!')]";

    continueButton =
        "//a[@data-qa='continue-button']";

    // =========================
    // LOGGED IN
    // =========================
    loggedInAs =
        "//a[contains(text(),'Logged in as')]";

    // =========================
    // PRODUCTS / CART
    // =========================
    productsButton =
        "//a[contains(text(),'Products')]";

    firstProductAddToCart =
        "(//a[contains(text(),'Add to cart')])[1]";

    cartButton =
        "//a[contains(text(),'Cart')]";

    cartPageText =
        "//li[contains(@class,'active') and contains(text(),'Shopping Cart')]";

    // =========================
    // CHECKOUT
    // =========================
    proceedToCheckout =
        "//a[contains(text(),'Proceed To Checkout')]";

    addressDetails =
        "//h2[contains(text(),'Address Details')]";

    reviewOrder =
        "//h2[contains(text(),'Review Your Order')]";

    orderComment =
        "//textarea[@name='message']";

    placeOrder =
        "//a[contains(text(),'Place Order')]";

    // =========================
    // PAYMENT
    // =========================
    nameOnCard =
        "//input[@name='name_on_card']";

    cardNumber =
        "//input[@name='card_number']";

    cvc =
        "//input[@name='cvc']";

    expirationMonth =
        "//input[@name='expiry_month']";

    expirationYear =
        "//input[@name='expiry_year']";

    payAndConfirmOrder =
        "//button[@id='submit']";

    // =========================
    // ORDER SUCCESS
    // =========================
    orderSuccessMessage =
    "//p[contains(text(),'Congratulations! Your order has been confirmed!')]";
    

    // TC23 Step 12 - Delivery Address
deliveryAddress =
    "//ul[@id='address_delivery']";

    // TC23 Step 13 - Billing Address
billingAddress =
    "//ul[@id='address_invoice']";

    // TC24 Step 19 - Download Invoice
downloadInvoiceButton =
    "//a[contains(text(),'Download Invoice')]";

   

}