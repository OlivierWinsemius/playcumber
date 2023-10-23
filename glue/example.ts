import { Given } from "../steps";
import PlaywrightPage from "../pages/playwrightPage";
import setPage from "../assertions/setPage";

Given("I open playwright.dev", async function () {
  setPage(this, PlaywrightPage);

  await this.page.open();
});
