import { expect } from "@playwright/test";
import CustomPage from "./customPage";

export default class PlaywrightPage extends CustomPage {
  async open() {
    await this.page.goto("https://playwright.dev");
  }

  async titleHasText(text: string) {
    const title = this.page.locator(".navbar__inner .navbar__title");
    await expect(title).toHaveText(text);
  }
}
