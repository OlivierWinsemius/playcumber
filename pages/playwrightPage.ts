import CustomPage from "./customPage";
import { PageLocators } from "./locators";

export default class PlaywrightPage
  extends CustomPage
  implements PageLocators<["header"]>
{
  async open() {
    this.url = "https://playwright.dev";
    await this.page.goto(this.url);
  }

  get header() {
    return this.page.locator(".navbar__inner .navbar__title");
  }
}
