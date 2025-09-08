import BasePage from './basepage.js';
import { expect } from '@playwright/test';
import {
    loginPageLogo,
    username,
    password,
    loginButton,
    loginPageBotImage,
    loginCredentials,
    loginPasswordCredentials
} from '../pageobjects/loginPage.js';

export default class LoginPage extends BasePage {
    constructor(page) {
        super(page)
    }

    async openLoginPage() {
        await super.open('/');
        await expect(this.page).toHaveURL(/.*saucedemo.com/);
        await super.waitForPageLoad();
    }

    async verifyUsernameField() {
        await this.isElementVisible(username);
    }

    async verifyPasswordField() {
        await this.isElementVisible(password);
    }

    async getUserName() {
        return await this.page.locator(username);
    }

    async getPassword() {
        return await this.page.locator(password);
    }

    async getLoginButton() {
        return await this.page.locator(loginButton);
    }

    async getLoginPageLogo() {
        return await this.page.locator(loginPageLogo);
    }

    async getLoginCredentials() {
        return await this.page.locator('#login_credentials').evaluate(el =>
            [...el.childNodes]
                .filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim() && !node.textContent.includes('Accepted usernames are:'))
                .map(node => node.textContent.trim())
        );
    }

    async loginAsStandardUser() {
        await this.inputText(username, process.env.STANDARD_USER);
        await this.inputText(password, process.env.PASSWORD);
        await this.clickOn(loginButton);
    }
}