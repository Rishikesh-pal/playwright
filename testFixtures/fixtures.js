import { test as fixture } from '@playwright/test'
import LoginPage from '../pages/loginPage.js'
import ProductPage from '../pages/productPage.js'

const test = fixture.extend({
    loginPage: async ({ page }, use) => {
        console.log(LoginPage)
        await use(new LoginPage(page));
    },
    productPage: async ({ page }, use) => {
        console.log(ProductPage)
        await use(new ProductPage(page));
    }
})

export default test