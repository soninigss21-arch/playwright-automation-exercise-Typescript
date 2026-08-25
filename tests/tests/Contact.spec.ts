/// <reference types="node" />
import { test } from '@playwright/test';
import * as path from 'path';
import { ContactPage } from '../pages/ContactPages';
import { ContactData } from '../utils/Data';


declare const process: { cwd(): string };

test('Test Case 6 - Contact Us Form @smoke', async ({ page }) => {

    const contactPage = new ContactPage(page);

    // =========================================================
    // Step 1 - Launch browser
    // Playwright launches browser automatically
    // =========================================================

    // Step 2 - Navigate to URL
    await contactPage.navigateToHomePage();

    // Step 3 - Verify home page is visible
    await contactPage.verifyHomePageVisible();

    // Step 4 - Click Contact Us
    await contactPage.clickContactUs();

    // Step 5 - Verify GET IN TOUCH is visible
    await contactPage.verifyGetInTouchVisible();

    // Step 6 - Enter name, email, subject and message
    await contactPage.enterContactDetails(
        ContactData.name,
        ContactData.email,
        ContactData.subject,
        ContactData.message
    );

    // Step 7 - Upload file
    const filePath = path.join(
    process.cwd(),
    'tests',
    'tests',
    'test-data',
    'contact.txt'
);

    await contactPage.uploadFile(filePath);


    // Steps 8 and 9 - Submit and accept dialog
    await contactPage.clickSubmitAndAcceptDialog();

    // Step 10 - Verify success message
    await contactPage.verifySuccessMessage();

    // Step 11 - Return to Home page
    await contactPage.clickHomeButton();
    await contactPage.verifyReturnedToHomePage();

});
