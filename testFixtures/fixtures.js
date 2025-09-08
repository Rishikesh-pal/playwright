import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage.js'

const test = fixture.extend({
    loginPage: async ({ page }, use) => {
        console.log(LoginPage)
        await use(new LoginPage(page));
    }
})

export default test