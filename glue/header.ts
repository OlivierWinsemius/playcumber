import { expect } from "@playwright/test";
import { Then } from "../steps";
import pageHasLocator from "../assertions/pageHasLocator";

Then("Title has text {string}", async function (text) {
  pageHasLocator(this, "header");

  await expect(this.page.header).toHaveText(text);
});
