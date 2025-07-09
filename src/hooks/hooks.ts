import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from '@playwright/test';
import { pageFixture } from './pagefixture'; // adjust path if needed
import fs from 'fs';
import path from 'path';
import { logger } from '../helper/utill/logger'; // adjust path if needed

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  logger.info('Browser launched');
});

AfterAll(async function () {
  await browser.close();
  logger.info('Browser closed');
});

Before(async function (scenario) {
  context = await browser.newContext();
  const page: Page = await context.newPage();
  pageFixture.page = page;
  logger.info(`Starting scenario: ${scenario.pickle.name}`);
});

After(async function ({ pickle, result }) {
  if (result?.status === Status.FAILED) {
    const scenarioName = pickle.name.replace(/\s+/g, '_');
    const screenshotDir = path.join('test-results', 'screenshots');
    const screenshotPath = path.join(screenshotDir, `${scenarioName}.png`);

    // Create directory if not exists
    fs.mkdirSync(screenshotDir, { recursive: true });

    const img = await pageFixture.page?.screenshot({ path: screenshotPath });
    logger.error(`Scenario failed: ${pickle.name}`);
    logger.info(`Screenshot captured: ${screenshotPath}`);

    if (img) {
      this.attach(img.toString('base64'), 'image/png');
    }
  } else {
    logger.info(`Scenario passed: ${pickle.name}`);
  }

  if (pageFixture.page && !pageFixture.page.isClosed()) {
    await pageFixture.page.close();
    logger.info('Page closed');
  }

  await context.close();
  logger.info('Context closed');
});
