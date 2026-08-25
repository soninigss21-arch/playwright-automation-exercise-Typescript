export class CartLocators {

    // homePageText =
    // "//div[@class='item active']//h2[contains(text(),'Full-Fledged practice website for Automation Engin')]";


    // TC11 Step 4 - Cart button
    cartButton = "//a[contains(text(),'Cart')]";


    // TC11 Step 5/6 - Subscription text
    subscriptionText =
        "//h2[contains(text(),'Subscription')]";

    // TC11 Step 7 - Subscription email input
    subscriptionEmail =
        "//input[@id='susbscribe_email']";

    // TC11 Step 7 - Subscription arrow button
    subscriptionButton =
        "//button[@id='subscribe']";

    // TC11 Step 8 - Success message
    subscriptionSuccessMessage =
        "//div[contains(@class,'alert-success') and contains(text(),'You have been successfully subscribed!')]";

    // TC12 step 9 - Product Button
    productsButton =
        "//a[contains(@href,'/products')]";
// =========================================================
// PRODUCTS PAGE LOCATORS
// =========================================================

// // Step 5 - First product for hover
// Products page
firstProduct =
    "(//div[@class='features_items']//div[@class='product-image-wrapper'])[1]";

firstProductAddToCart =
    "(//div[@class='features_items']//div[@class='product-overlay']//a[@data-product-id='1'])[1]";

    // Products page: second product card
secondProduct =
    "(//div[contains(@class,'features_items')]//div[contains(@class,'product-image-wrapper')])[2]";

// Products page: second product Add to Cart
secondProductAddToCart =
    "(//div[contains(@class,'features_items')]//div[contains(@class,'product-image-wrapper')])[2]//div[contains(@class,'product-overlay')]//a[@data-product-id='2']";
    addToCartModal =
    "//div[@id='cartModal']";

    
// Cart page only
firstProductInCart =
    "//table[@id='cart_info_table']//tr[@id='product-1']";

// Cart page verification only
secondProductInCart =
    "//table[@id='cart_info_table']//tr[@id='product-2']";

    
// Step 6 - Continue Shopping
continueShoppingButton =
    "//div[@id='cartModal']//button[normalize-space()='Continue Shopping']";

// // Step 7 - Second product for hover
// secondProduct =
//     "//div[@class='features_items']//div[@class='product-image-wrapper'][.//a[@data-product-id='2']]";



// Step 8 - View Cart
viewCartButton =
    "//div[@id='cartModal']//a[@href='/view_cart']";



// =========================================================
// CART PAGE LOCATORS
// =========================================================

// Step 9 - First product inside Cart

cartProducts =
    "//table[@id='cart_info_table']/tbody/tr";


    // Product 1===================================================
    firstProductPrice =
        "//tr[@id='product-1']//td[@class='cart_price']/p";

    firstProductQuantity =
        "//tr[@id='product-1']//td[@class='cart_quantity']/button";

    firstProductTotal =
        "//tr[@id='product-1']//td[@class='cart_total']/p";


    // Product ========================================================
    secondProductPrice =
        "//tr[@id='product-2']//td[@class='cart_price']/p";

    secondProductQuantity =
        "//tr[@id='product-2']//td[@class='cart_quantity']/button";

    secondProductTotal =
        "//tr[@id='product-2']//td[@class='cart_total']/p";


    // TC13 Step 4 - View Product for first product
    firstViewProduct =
        "//a[@href='/product_details/1']";

    // TC13 Step 5 - Product detail page
    productDetailName =
        "//div[@class='product-information']//h2";

    // TC13 Step 6 - Quantity input
    quantityInput =
        "//input[@id='quantity']";

    // TC13 Step 7 - Add to Cart button
    productDetailAddToCart =
        "//button[@type='button' and contains(@class,'cart')]";

    viewCartLink =
        "//i[@class='fa fa-shopping-cart']/parent::a";

    // TC13 Step 9 - Product quantity in cart
    cartProductQuantity =
        "//tr[@id='product-1']//td[@class='cart_quantity']//button";

    // TC14 Step 6 - Cart page heading
    shoppingCartText =
        "//li[contains(text(),'Shopping Cart')]";

    // TC14 Step 7 - Proceed To Checkout
    proceedToCheckoutButton =
        "//a[contains(text(),'Proceed To Checkout')]";

    // TC14 Step 8 - Register / Login link
    registerLoginLink =
        "//u[normalize-space()='Register / Login']/parent::a";

    // TC14 Step 14 - Address Details heading
    addressDetailsText = "//h2[normalize-space()='Address Details']";

    // TC14 Step 14 - Review Your Order heading
    reviewOrderText = "//h2[normalize-space()='Review Your Order']";

    // TC14 Step 15 - Order comment textarea
    orderComment =
        "//textarea[@name='message']";

    // TC14 Step 15 - Place Order
    placeOrderButton =
        "//a[normalize-space()='Place Order']";

    // TC14 Step 16 - Name on Card
    nameOnCard =
        "//input[@name='name_on_card']";

    // TC14 Step 16 - Card Number
    cardNumber =
        "//input[@name='card_number']";

    // TC14 Step 16 - CVC
    cvc =
        "//input[@name='cvc']";

    // TC14 Step 16 - Expiration Month
    expiryMonth =
        "//input[@name='expiry_month']";

    // TC14 Step 16 - Expiration Year
    expiryYear =
        "//input[@name='expiry_year']";

    // TC14 Step 17 - Pay and Confirm Order
    payAndConfirmOrderButton =
        "//button[@data-qa='pay-button']";

    // TC14 Step 18 - Order placed successfully
    orderPlacedSuccessMessage =
        "//p[contains(text(),'Congratulations! Your order has been confirmed!')]";

    // TC17 Step 7 - Remove first product from cart
    removeFirstProductButton =
        "(//a[@class='cart_quantity_delete'])[1]";

    // TC17 Step 8 - Products in cart
    cartProductRows = "//tbody/tr[contains(@id,'product-')]";


    

}