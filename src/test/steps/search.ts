import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { setDefaultTimeout } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pagefixture';
import HeaderPage from '../../pages/headerPage';
import LoginPage from '../../pages/loginPage';

setDefaultTimeout(30 * 1000);

let headerPage: HeaderPage;

Then('user search the book {string}', async function (book: string) {
  if (!pageFixture.page) {
    throw new Error('Page is not initialized');
  }
  headerPage = new HeaderPage(pageFixture.page);
  await headerPage.searchBook(book);
});

Then('user add the book to cart', async function () {
  await headerPage.addBookToCart();
});

Then('user can view the book carted', async function () {
  await headerPage.assertBookCarted();
});
