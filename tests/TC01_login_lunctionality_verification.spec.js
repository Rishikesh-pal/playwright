/* Scenario 1: 
Login as a standard user to verify the products page and logout from the application

Scenario Description: 
User logs into the website and verifies all the elements on the products page and logs out from the application. 
This is like a Smoke test.

Test Steps:
1.	User is on the Login Page
2.	Verify the Logo, title, url, username, password fields, login button, login and password credentials on the login page
3.	Login as a standard user
4.	User is on the Landing/Products page. Verify the Landing page logo and URL
5.	Verify the PRODUCTS title and peek image visible on the home page
6.	Verify all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page
7.	Verify the shopping cart icon and product sort container visible on the top right of the page
8.	Verify the Inventory Product item list is visible
9.	Select the Product sort container as “Price (low to high)” and verify the inventory item list is displayed correctly in the right order selected.
10.	Verify the footer text and swag bot footer is visible
11.	Click on “About” navbar link from the “inventory sidebar panel” and check whether user is navigated to saucelabs page
12.	Verify the Twitter, Facebook, Linkedin logo visible 
13.	Click on Twitter social link and verify user is navigated to Twitter page
14.	Click on Facebook social link and verify user is navigated to Facebook page
15.	Click on LinkedIn social link and verify user is navigated to LinkedIn page
16.	User logout from the application and verify the login page
*/
import { expect } from '@playwright/test'
import test from "../testFixtures/fixtures";
import constants from '../data/constants.json'
import { loginButton, loginCredentials, loginPageLogo, password, username } from '../pageobjects/loginPage';

test.describe("Login Functionality Verification", () => {
    test('Login as a standard user to verify the products page and logout from the application', async ({
        loginPage
    }) => {
        await test.step("1. User is on the Login Page", async () => {
            await loginPage.openLoginPage();
        });

        await test.step("2. Verify the Logo, title, url, username, password fields, login button, login and password credentials on the login page", async () => {
            expect(await loginPage.getPageTitle()).toBe(constants.title);
            expect(await loginPage.getPageURL()).toBe(constants.baseUrl);
            expect(await loginPage.getUserName()).toBeVisible();
            expect(await loginPage.getPassword()).toBeVisible();
            expect(await loginPage.getLoginButton()).toBeEnabled();
            expect(await loginPage.getLoginPageLogo()).toBeVisible();
            expect(await loginPage.getLoginCredentials()).toEqual(
                ['standard_user',
                    'locked_out_user',
                    'problem_user',
                    'performance_glitch_user',
                    'error_user',
                    'visual_user'
                ]
            );
        });

        await test.step("3. Login as a standard user", async () => {
            await loginPage.loginAsStandardUser();
        });

        await test.step("4. User is on the Landing/Products page. Verify the Landing page logo and URL", async () => {
            expect(await loginPage.getPageURL()).toBe(constants.inventoryPageURL);
        });

        await test.step("5. Verify the PRODUCTS title and peek image visible on the home page", async () => {

        });
        await test.step("6. Verify all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page", async () => {
        });
        await test.step("7. Verify the shopping cart icon and product sort container visible on the top right of the page", async () => {
        });
        await test.step("8. Verify the Inventory Product item list is visible", async () => {
        });
        await test.step("9. Select the Product sort container as “Price (low to high)” and verify the inventory item list is displayed correctly in the right order selected.", async () => {
        });
        await test.step("10. Verify the footer text and swag bot footer is visible", async () => {
        });
        await test.step("11. Click on “About” navbar link from the “inventory sidebar panel” and check whether user is navigated to saucelabs page", async () => {
        });
        await test.step("12. Verify the Twitter, Facebook, Linkedin logo visible", async () => {
        });
        await test.step("13. Click on Twitter social link and verify user is navigated to Twitter page", async () => {
        });
        await test.step("14. Click on Facebook social link and verify user is navigated to Facebook page", async () => {
        });
        await test.step("15. Click on LinkedIn social link and verify user is navigated to LinkedIn page", async () => {
        });
        await test.step("16. User logout from the application and verify the login page", async () => {
        });
    });
});