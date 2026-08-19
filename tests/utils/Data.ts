// =========================================================
// REGISTER DATA
// =========================================================

export class RegisterData {

    static name = "Nigss";

    static get email() {
        return `nigss${Date.now()}@example.com`;
    }

    static password = "tom000";

    static day = "10";

    static month = "5";

    static year = "1998";

    static firstName = "Don";

    static lastName = "soni";

    static company = "ABC Technologies";

    static address = "123 Main Street";

    static country = "India";

    static state = "Gujarat";

    static city = "Mahesana";

    static zipcode = "400001";

    static mobileNumber = "9876543210";
}


// =========================================================
// LOGIN DATA
// =========================================================

export class LoginData {

    // Correct login
    static correctEmail = "virat1818@gmail.com";

    static correctPassword = "virat1818";


    // Incorrect login
    static incorrectEmail = "wrongemail123@gmail.com";

    static incorrectPassword = "WrongPassword123";
}