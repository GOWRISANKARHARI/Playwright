import { Page, Locator, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrapper';

export default class LoginPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  // Locators
  private usernameInput: Locator = this.page.getByPlaceholder('Username');
  private passwordInput: Locator = this.page.getByPlaceholder('Password');
  private loginButton: Locator = this.page.locator("xpath=(//*[@class='mat-mdc-button-touch-target'])[7]")
  private errorMessage: Locator = this.page.locator('//mat-error[contains(text(),"Password is required")]');

  // Actions
  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async assertLoginFailed(expectedMessage: string) {
    const actualMessage = await this.errorMessage.textContent();
    expect(actualMessage?.trim()).toBe(expectedMessage);
  }
}
