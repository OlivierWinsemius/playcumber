import { Page, BrowserContext, expect } from "@playwright/test";

export class CustomPage {
  page: Page;
  context: BrowserContext;

  constructor(page: Page) {
    this.page = page;
    this.context = page.context();
  }

  async open(url = "/") {
    await this.page.goto(`http://127.0.0.1${url}`);
  }

  async buttonExists(text: string) {
    const button = await this.page.textContent(
      `//button[contains(., "${text}")]`
    );

    expect(button).not.toBeNull();
  }
}

export type CustomPageClass = typeof CustomPage;
