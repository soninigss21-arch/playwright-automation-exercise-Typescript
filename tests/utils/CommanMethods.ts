import { Page, expect } from '@playwright/test';

export class CommonMethods {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    
    // NAVIGATION  
    async navigateTo(url: string) {
        await this.page.goto(url);
    }


   
    // CLICK
    async clickElement(locator: string) {
        await this.page.locator(locator).click();
    }



    // FILL TEXT
    async fillElement(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }


    // VERIFY ELEMENT VISIBLE
    async verifyElementVisible(locator: string) {
        await expect(
            this.page.locator(locator)
        ).toBeVisible();
    }


   
    // CHECK RADIO / CHECKBOX
    async checkElement(locator: string) {
        await this.page.locator(locator).check();
    }



    // SELECT DROPDOWN BY VALUE
    async selectOption(locator: string, value: string) {
        await this.page
            .locator(locator)
            .selectOption(value);
    }


    // SELECT DROPDOWN BY LABEL
    async selectOptionByLabel(
        locator: string,
        label: string
    ) {
        await this.page
            .locator(locator)
            .selectOption({
                label: label
            });
    }
}