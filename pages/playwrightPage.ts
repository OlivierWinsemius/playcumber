import CustomPage from "./customPage";

export default class PlaywrightPage extends CustomPage {
  url = "https://playwright.dev";

  get header() {
    return this.page.locator(".navbar");
  }
}
