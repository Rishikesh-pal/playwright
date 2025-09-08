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
}