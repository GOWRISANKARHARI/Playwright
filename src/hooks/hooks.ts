import { Before, After, BeforeAll, AfterAll ,Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { pageFixture } from '../hooks/pagefixture';
import fs from 'fs';
import path from 'path';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async function () {
  await browser.close();
});

Before(async function () {
  context = await browser.newContext();
  const page: Page = await context.newPage();
  pageFixture.page = page;
});

After(async function () {
  if (pageFixture.page && !pageFixture.page.isClosed()) {
  await pageFixture.page.close();
}
  await context.close();
});

After(async function ({ pickle, result }) {
  if (result?.status === Status.FAILED) {
    const screenshotPath = `./test-results/screenshots/${pickle.name.replace(/\s+/g, '_')}.png`;

    // Ensure folder exists
    fs.mkdirSync('./test-results/screenshots', { recursive: true });

    const img = await pageFixture.page?.screenshot({ path: screenshotPath });
    if (img) {
      this.attach(img.toString('base64'), 'image/png');
    }
  }

  await pageFixture.page?.close();
  await context.close(); // Make sure `context` is declared at top of file
});
