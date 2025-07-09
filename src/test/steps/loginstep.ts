import { Given, When, Then } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';
import HeaderPage from '../../pages/headerPage';
import LoginPage from '../../pages/loginPage';

let headerPage: HeaderPage;
let loginPage: LoginPage;

Given('user navigates to the application', async function () {
  const baseurl = process.env.BASEURL || 'https://bookcart.azurewebsites.net/';
  if (!pageFixture.page) {
    const browser: Browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    pageFixture.page = await context.newPage();
  }
  headerPage = new HeaderPage(pageFixture.page);
  loginPage = new LoginPage(pageFixture.page);
  await pageFixture.page.goto(baseurl);
});

Given('user click on the login link', async function () {
  await headerPage.clickLoginLink();
});

Given('user enter the username as {string}', async function (username: string) {
  await loginPage.enterUsername(username);
});

Given('user enter the password as {string}', async function (password: string) {
  await loginPage.enterPassword(password);
});

When('user click on the login button', async function () {
  await loginPage.clickLoginButton();
});

Then('Login should be success', async function () {
  await headerPage.assertLoginSuccess("Hari02");
});

Then('Login should fails', async function () {
  await loginPage.assertLoginFailed("Password is required");
});
