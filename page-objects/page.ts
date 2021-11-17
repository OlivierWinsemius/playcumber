import { Page, BrowserContext } from "@playwright/test";

export class CustomPage {
  page: Page;
  context: BrowserContext;

  constructor(page: Page) {
    this.page = page;
    this.context = page.context();
  }

  async open(url = "/") {
    await this.page.goto(`http://127.0.0.1${url}`, {
      waitUntil: "networkidle",
    });
  }

  async buttonExists(text: string): Promise<void> {
    await this.page.isVisible(`button >> text="${text}")`);
  }
}

export type CustomPageClass = typeof CustomPage;
