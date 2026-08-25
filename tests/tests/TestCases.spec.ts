import { test } from '@playwright/test';
import { TestCasesPage } from '../pages/TestCasesPages';

test('Test Case 7 - Verify Test Cases Page', async ({ page }) => {

    const testCasesPage = new TestCasesPage(page);

    
    await testCasesPage.navigateToHomePage();
    await testCasesPage.verifyHomePageVisible();
    await testCasesPage.clickTestCases();
    await testCasesPage.verifyTestCasesPageVisible();

});