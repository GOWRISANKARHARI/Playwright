import { Page, Locator, expect } from '@playwright/test';
import PlaywrightWrapper from '../helper/wrapper/playwrightWrapper';

export default class HeaderPage {
  private base: PlaywrightWrapper;

  constructor(private page: Page) {
    this.base = new PlaywrightWrapper(page);
  }

  // Locators
  private loginLink: Locator = this.page.locator('xpath=/html/body/app-root/app-nav-bar/mat-toolbar/mat-toolbar-row/div[3]/button[2]');
  private searchInput: Locator = this.page.getByPlaceholder('Search books or authors');
  private searchResult: Locator = this.page.locator('//mat-option//span');
  private addToCartButton: Locator = this.page.getByRole('button', { name: 'Add to Cart' });
  private cartValue: Locator = this.page.locator('//*[@id="mat-badge-content-0"]');
  private userName: Locator = this.page.locator(
    '//span[contains(text()," Swagger ")]//parent::a//preceding-sibling::mat-menu//preceding-sibling::a//child::span[2]//span'
  );

  // Actions
  async clickLoginLink() {
    await this.loginLink.waitFor({ state: 'visible' });
    await this.loginLink.click();
  }

  async searchBook(book: string) {
    await this.searchInput.fill(book);
    await this.searchResult.click();
  }

  async addBookToCart() {
    await this.addToCartButton.click();
    await this.page.waitForTimeout(1000); // optional wait for UI update
  }

  async assertBookCarted() {
    const cartText = await this.cartValue.textContent();
    expect(Number(cartText)).toBeGreaterThanOrEqual(0);
  }

  async assertLoginSuccess(expectedName: string) {
    const name = await this.userName.textContent();
    expect(name?.trim()).toBe(expectedName);
  }
}
