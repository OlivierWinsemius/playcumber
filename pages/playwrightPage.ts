import CustomPage from "./customPage";

export default class PlaywrightPage extends CustomPage {
  url = "https://playwright.dev";

  get header() {
    return this.page.locator("nav.navbar");
  }

  get footer() {
    return this.page.locator("footer.footer");
  }
}
