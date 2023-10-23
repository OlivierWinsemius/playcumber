import { Page } from "@playwright/test";

export default class CustomPage {
  page: Page;
  url: string;

  constructor(page: Page) {
    this.page = page;
  }

  async open() {
    await this.page.goto(this.url);
  }

  async close() {
    await this.page.close();
    await this.page.context().close();
  }

  async waitForUrl() {
    return this.page.waitForURL(this.url);
  }
}
