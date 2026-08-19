/// <reference types="node" />
import { test } from '@playwright/test';
import * as path from 'path';
import { ContactPage } from '../pages/ContactPages';

declare const process: { cwd(): string };

test('Test Case 6 - Contact Us Form', async ({ page }) => {

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
        'Nigss',
        'nigss999@gmail.com',
        'Test Subject',
        'This is a test message for Contact Us form.'
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


    // Step 8 - Click Submit
    await contactPage.clickSubmit();

    // // Step 10 - Verify success message
    // await contactPage.verifySuccessMessageVisible();

    // Step 11 - Click Home
    //await contactPage.clickHome();

    // Verify landed on Home Page
    //await contactPage.verifyLandedOnHomePage();
});