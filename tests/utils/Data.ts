// =========================================================
// REGISTER DATA
// =========================================================

export class RegisterData {

    static readonly name = 'Nigss';

    static generateEmail(): string {
        return `nigss${Date.now()}@example.com`;
    }

    static readonly password = 'tom000';

    static readonly day = '10';
    static readonly month = '5';
    static readonly year = '1998';

    static readonly firstName = 'Don';
    static readonly lastName = 'soni';

    static readonly company = 'ABC Technologies';
    static readonly address = '123 Main Street';

    static readonly country = 'India';
    static readonly state = 'Gujarat';
    static readonly city = 'Mahesana';

    static readonly zipcode = '400001';
    static readonly mobileNumber = '9876543210';
}


// =========================================================
// LOGIN DATA
// =========================================================

export class LoginData {

    // Correct login
    static readonly correctEmail = "virat1818@gmail.com";

    static readonly correctPassword = "virat1818";


    // Incorrect login
    static readonly incorrectEmail = "wrongemail123@gmail.com";

    static readonly incorrectPassword = "WrongPassword123";
}

// =========================================================
// CART DATA
// =========================================================

export class CartData {

    static generateSubscriptionEmail(): string {
        return `subscriber${Date.now()}@example.com`;
    }

    static readonly firstProductPrice = 'Rs. 500';
    static readonly firstProductQuantity = '1';
    static readonly firstProductTotal = 'Rs. 500';

    static readonly secondProductPrice = 'Rs. 400';
    static readonly secondProductQuantity = '1';
    static readonly secondProductTotal = 'Rs. 400';

    // TC13
    static readonly selectedProductQuantity = '4';

}
    // =========================================================
// CONTACT DATA
// =========================================================

    export class ContactData {

    static readonly name = 'Nigss';

    static readonly email =
        'nigss999@gmail.com';

    static readonly subject =
        'Test Subject';

    static readonly message =
        'This is a test message for Contact Us form.';

    static readonly fileName =
        'contact.txt';

    static readonly successMessage =
        'Success! Your details have been submitted successfully.';


        
}

// =========================================================
// HOME DATA
// =========================================================

export class HomeData {

    static generateSubscriptionEmail(): string {
        return `homesubscriber${Date.now()}@example.com`;
    }
}

// =========================================================
// PRODUCT DATA
// =========================================================

export class ProductData {

    static readonly searchProductName = 'Top';

    static readonly reviewName = 'Test User';

    static readonly reviewEmail =
        'testuser@example.com';

    static readonly reviewMessage =
        'This product is very good.';
}


// =========================================================
// ORDER DATA
// =========================================================

export class OrderData {

    static createUser() {
        const timestamp = Date.now();

        return {
            name: `TestUser${timestamp}`,
            email: `testuser${timestamp}@example.com`
        };
    }

    static readonly password = 'Test@123';

    static readonly day = '10';
    static readonly month = '5';
    static readonly year = '2000';

    static readonly firstName = 'Test';
    static readonly lastName = 'User';

    static readonly company = 'Test Company';
    static readonly address = '123 Test Street';

    static readonly country = 'India';
    static readonly state = 'Gujarat';
    static readonly city = 'Ahmedabad';
    static readonly zipcode = '380001';

    static readonly mobileNumber = '9876543210';

    static readonly orderComment =
        'Please deliver the order carefully.';

    static readonly nameOnCard = 'Test User';
    static readonly cardNumber = '4111111111111111';
    static readonly cvc = '123';
    static readonly expiryMonth = '12';
    static readonly expiryYear = '2030';

    static readonly expectedAddress = [
        'Test User',
        '123 Test Street',
        'Ahmedabad',
        'Gujarat',
        '380001',
        'India'
    ];
}