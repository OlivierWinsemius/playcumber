import { expect } from "@playwright/test";
import CustomPage from "./customPage";

export default class PlaywrightPage extends CustomPage {
  async open() {
    this.url = "https://playwright.dev";
    await this.page.goto(this.url);
  }

  async titleHasText(text: string) {
    const title = this.page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText(text);
  }
}
