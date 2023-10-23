import { Given, Then } from "../steps";
import PlaywrightPage from "../pages/playwrightPage";
import setPage from "../pages/assertions/setPage";
import isPage from "../pages/assertions/isPage";

Given("I am on playwright.dev", function () {
  setPage(this, PlaywrightPage);
  return this.page.open();
});

Then("Title has text {string}", function (text) {
  isPage(this, PlaywrightPage);
  return this.page.titleHasText(text);
});
