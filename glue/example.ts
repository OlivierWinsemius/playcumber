import PlaywrightPage from "../pages/playwrightPage";
import setPage from "../pages/setPage";
import assertPage from "../pages/assertPage";
import { Given, Then } from "../steps";

Given("I am on playwright.dev", function () {
  setPage(this, PlaywrightPage);
  return this.page.open();
});

Then("I have {int} cucumbers in my belly", function (cucumberCount) {
  assertPage(this, PlaywrightPage);
  return this.page.titleHasText("Playwright");
});
