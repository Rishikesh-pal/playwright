import { expect } from '@playwright/test'

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async open(url) {
        return await this.page.goto(url);
    }

    async waitForPageLoad() {
        return await this.page.waitForLoadState('domcontentloaded');
    }

    async getPageTitle() {
        return await this.page.title();
    }

    async getPageURL() {
        return this.page.url();
    }

    async isElementVisible(selector) {
        return await this.page.locator(selector).isVisible();
    }

    async isElementEnabled(selector) {
        return await this.page.locator(selector).isElementEnabled()
    }

}

export default BasePage;