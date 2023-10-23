import { Page } from "@playwright/test";

export default class CustomPage {
  page: Page;
  url: string;

  constructor(page: Page) {
    this.page = page;
  }

  async close() {
    await this.page.close();
    await this.page.context().close();
  }
}
