import PlaywrightPage from "../pages/playwrightPage";
import setPage from "../pages/setPage";
import assertPage from "../pages/assertPage";
import { Given, Then } from "../steps";

Given("I am on playwright.dev", function () {
  setPage(this, PlaywrightPage);
  return this.page.open();
});

Then("Title has text {string}", function (text) {
  assertPage(this, PlaywrightPage);
  return this.page.titleHasText(text);
});
