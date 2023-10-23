import PlaywrightPage from "./playwrightPage";

export default class PlaywrightDocsPage extends PlaywrightPage {
  url = "https://playwright.dev/docs/intro";

  get sidebar() {
    return this.page.locator(".sidebar");
  }
}
