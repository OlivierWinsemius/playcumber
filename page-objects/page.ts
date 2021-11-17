import { Page, expect } from "@playwright/test";

export class CustomPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async close() {
    await this.page.close();
    await this.page.context().close();
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
