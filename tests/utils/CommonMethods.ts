import { Page, expect } from '@playwright/test';

export class CommonMethods {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string) {
        await this.page.goto(url);
    }

    async clickElement(locator: string, force: boolean = false) {
        await this.page.locator(locator).click({ force });
    }

    async dispatchClickElement(locator: string) {
        const element = this.page.locator(locator);

        await expect(element).toBeVisible();

        await element.dispatchEvent('click');
    }

    async fillElement(locator: string, value: string) {
        await this.page.locator(locator).fill(value);
    }

    async verifyElementVisible(locator: string) {
        await expect(this.page.locator(locator)).toBeVisible();
    }

    async checkElement(locator: string) {
        await this.page.locator(locator).check();
    }

    async selectOption(locator: string, value: string) {
        await this.page
            .locator(locator)
            .selectOption(value);
    }

    async selectOptionByLabel(
        locator: string,
        label: string
    ) {
        await this.page
            .locator(locator)
            .selectOption({ label });
    }

    async hoverElement(locator: string) {
        await this.page.locator(locator).hover();
    }

    async scrollToElement(locator: string) {
        await this.page
            .locator(locator)
            .scrollIntoViewIfNeeded();
    }

    async verifyElementText(
        locator: string,
        expectedText: string
    ) {
        await expect(
            this.page.locator(locator)
        ).toHaveText(expectedText);
    }

    async verifyElementCount(
        locator: string,
        expectedCount: number
    ) {
        await expect(
            this.page.locator(locator)
        ).toHaveCount(expectedCount);
    }

    async verifyURL(expectedURL: string | RegExp) {
        await expect(this.page).toHaveURL(expectedURL);
    }


    async uploadFile(
        locator: string,
        filePath: string
    ) {
        await this.page
            .locator(locator)
            .setInputFiles(filePath);
    }

    async clickAndAcceptDialog(locator: string) {
        this.page.once('dialog', async dialog => {
            console.log('Dialog:', dialog.message());
            await dialog.accept();
        });

        await this.page.locator(locator).click();
    }

    async verifyElementContainsText(
        locator: string,
        expectedText: string,
        timeout: number = 5000
    ) {
        await expect(
            this.page.locator(locator)
        ).toContainText(expectedText, { timeout });
    }

    async scrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    async scrollToTop() {
        await this.page.evaluate(() => {
            window.scrollTo(0, 0);
        });
    }


    async verifyFirstElementVisible(locator: string) {
        await expect(
            this.page.locator(locator).first()
        ).toBeVisible();
    }

    async verifyElementHidden(locator: string) {
        await expect(
            this.page.locator(locator)
        ).toBeHidden();
    }

    async getElementCount(locator: string): Promise<number> {
        return await this.page.locator(locator).count();
    }

    async dispatchClickElementByIndex(
        locator: string,
        index: number
    ) {
        const element = this.page.locator(locator).nth(index);

        await expect(element).toBeVisible();

        await element.dispatchEvent('click');
    }
}