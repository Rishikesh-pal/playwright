import BasePage from "./basePage";
import { expect } from '@playwright/test';
import * as productSelectors from '../pageobjects/productsPageLocators';

class ProductPage extends BasePage {

    constructor(page) {
        super(page)
    }

    async getProductPageTitle() {
        return await this.page.locator(productSelectors.landingPageTitle).innerText();
    }

    async checkBurgerMenuButtonVisible() {
        await this.isElementVisible(productSelectors.burgerMenuBtn);
    }

    async clickOnBurgerMenuButton() {
        await this.clickOn(productSelectors.burgerMenuBtn);
    }

    async checkAllItemsSubmenu() {
        await this.isElementVisible(productSelectors.allItemsSideBarLink);
    }

    async checkAboutSubmenu() {
        await this.isElementVisible(productSelectors.aboutSideBarLink);
    }

    async clickAboutSubmenu() {
        await this.clickOn(productSelectors.aboutSideBarLink);
    }

    async checkLogoutSubmenu() {
        await this.isElementVisible(productSelectors.logoutSideBarLink);
    }

    async checkResetAppSatatSubmenu() {
        await this.isElementVisible(productSelectors.resetSideBarLink);
    }

    async checkCrossButton() {
        await this.isElementVisible(productSelectors.burgerCrossButton);
    }

    async clickCrossButton() {
        await this.clickOn(productSelectors.burgerCrossButton);
    }

    async checkShoppingIcon() {
        await this.isElementVisible(productSelectors.shoppingCartLink);
    }

    async checkProductSortDropdown() {
        await this.isElementVisible(productSelectors.productSortContainer);
    }

    async checkInventoryContainer() {
        await this.isElementVisible(productSelectors.inventoryContainer);
    }

    async getInventoryContainerList() {
        return await this.page.locator(productSelectors.inventoryContainerList).count();
    }

    async selectFromDropdown(optionValue) {
        await this.page.locator(productSelectors.productDropdown).selectOption(optionValue)
    }

    async getInventoryPriceList() {
        const productPriceList = await this.page.locator(productSelectors.productDropdownList).allTextContents();
        const prices = await productPriceList.map((ele) => ele.replace('$', ''));
        return prices;
    }

    async footerTextVisible() {
        return await this.isElementVisible(productSelectors.footerText)
    }

    async socialChannelLinksVisible() {
        await this.isElementVisible(productSelectors.twitterLink)
        await this.isElementVisible(productSelectors.facebookLink)
        await this.isElementVisible(productSelectors.linkedInLink)
    }

    async verifySocialMediaPageUrl(channel, expectedUrl) {
        const channelMap = {
            linkedin: productSelectors.linkedInLink,
            facebook: productSelectors.facebookLink,
            x: productSelectors.twitterLink
        };
        const selector = channelMap[channel];
        if (!selector) throw new Error(`Unknown social channel: ${channel}`);

        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.page.locator(selector).click(),
        ]);
        await newPage.waitForLoadState('domcontentloaded');
        expect(await newPage.url()).toContain(expectedUrl);
        await newPage.close();
        await this.page.bringToFront();
    }

    async logout() {
        await this.clickOnBurgerMenuButton()
        await this.clickOn(productSelectors.logoutSideBarLink);
    }

}

export default ProductPage