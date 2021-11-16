import { Page, BrowserContext } from "@playwright/test";

export class CustomPage {
  page: Page;
  context: BrowserContext;

  constructor(page: Page) {
    this.page = page;
    this.context = page.context();
  }
}

export type PageClass = typeof CustomPage;
