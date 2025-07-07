import { Given, Then, When } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';
import { expect } from '@playwright/test';
import { pageFixture } from '../../hooks/pagefixture';

Given('user navigates to the application', async function () {
  await pageFixture.page?.goto('https://bookcart.azurewebsites.net/');
});

Given('user click on the login link', async function () {
           await pageFixture.page?.locator('//span[contains(text(),"Login")]').click();
         });

Given('user enter the username as {string}', async function (username) {

            await pageFixture.page?.locator('//input[@placeholder="Username"]').fill(username);
         });

Given('user enter the password as {string}', async function (password) {
           await pageFixture.page?.locator('//input[@placeholder="Password"]').fill(password);

         });

When('user click on the login button', async function () {
            await pageFixture.page?.locator('//button[@class="mdc-button mdc-button--raised mat-mdc-raised-button mat-primary mat-mdc-button-base"]//span[2]').click();
         });


Then('Login should be success', async function () {
            const name = await pageFixture.page?.locator('//span[contains(text()," Swagger ")]//parent::a//preceding-sibling::mat-menu//preceding-sibling::a//child::span[2]//span').textContent();
            await expect(name).toBe(" Hari02"); 
                                     
           
         });
Then('Login should fails', async function () {
          const errorMessage = await pageFixture.page?.locator('//mat-error[contains(text(),"Password is required")]').textContent();
          await expect(errorMessage).toBe("Password is required");
       });