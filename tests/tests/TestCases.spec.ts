import { test } from '@playwright/test';
import { TestCasesPage } from '../pages/TastCasesPages';

test('Test Case 7 - Verify Test Cases Page', async ({ page }) => {

    const testCasesPage = new TestCasesPage(page);

    // Step 1 - Launch browser
    // Playwright launches browser automatically

    // Step 2 - Navigate to URL
    await testCasesPage.navigateToHomePage();

    // Step 3 - Verify home page is visible
    await testCasesPage.verifyHomePageVisible();

    // Step 4 - Click Test Cases
    await testCasesPage.clickTestCases();

    // Step 5 - Verify Test Cases page
    await testCasesPage.verifyTestCasesPageVisible();

});