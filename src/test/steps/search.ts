import { expect } from '@playwright/test';
import { setDefaultTimeout,Given,When,Then } from '@cucumber/cucumber';
import { pageFixture} from '../../hooks/pagefixture';

setDefaultTimeout(60 * 1000);

Then('user search the book {string}', async function (book) {
   await pageFixture.page?.locator('//input[@placeholder="Search books or authors"]').fill(book);
   await pageFixture.page?.locator('//mat-option[@class="mat-mdc-option mdc-list-item ng-star-inserted"]//span').click();
});

Then('user add the book to cart', async function () {
 
   await pageFixture.page?.locator('//span[contains(text()," Add to Cart")]').click();
   await pageFixture.page?.waitForTimeout(1000);
});

Then('user can view the book carted', async function () {
  const cartedBookText = await pageFixture.page?.locator('//*[@id="mat-badge-content-0"]').textContent();
  console.log('Carted Book Text:', cartedBookText);
  expect(Number(cartedBookText)).toBeGreaterThanOrEqual(0);

});