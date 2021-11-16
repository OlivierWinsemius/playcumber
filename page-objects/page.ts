import { expect, Page, BrowserContext } from "@playwright/test";

export class CustomPage {
  page: Page;
  context: BrowserContext;

  constructor(page: Page) {
    this.page = page;
    this.context = page.context();
  }
}

export class PlaywrightDevPage extends CustomPage {
  async goto() {
    await this.page?.goto("https://playwright.dev");
  }

  async titleHasText(text: string) {
    const title = this.page?.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText(text);
  }
}
