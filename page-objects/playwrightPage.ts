import { expect } from "@playwright/test";
import { CustomPage } from "./page";

export class PlaywrightDevPage extends CustomPage {
  async open(url = "/") {
    await this.page.goto(`https://playwright.dev${url}`);
  }

  async titleHasText(text: string) {
    const title = this.page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText(text);
  }
}
