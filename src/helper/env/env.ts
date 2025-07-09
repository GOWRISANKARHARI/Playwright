import { LaunchOptions, Browser, chromium, firefox, webkit } from 'playwright';
const isHeadless = process.env.HEADLESS === 'true';
const browserType = process.env.BROWSER_TYPE || 'chromium';
const options: LaunchOptions = {
  headless: isHeadless,
  slowMo: 50, // optional - remove if not needed
};
export const invokeBrowser = async (): Promise<Browser> => {
  switch (browserType.toLowerCase()) {
    case 'chromium':
      return await chromium.launch(options);
    case 'firefox':
      return await firefox.launch(options);
    case 'webkit':
      return await webkit.launch(options);
    default:
      throw new Error(`Unsupported browser type: ${browserType}`);
  }
};
export const BASE_URL = process.env.BASE_URL || 'https://bookcart.azurewebsites.net/';