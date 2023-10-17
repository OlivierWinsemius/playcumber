import { Given, Then } from "@cucumber/cucumber";

import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { initWorld } from "../cucumber/initWorld";
import { CustomWorld } from "../cucumber/world";
import { assertPage } from "../cucumber/assertPage";

Given<CustomWorld>("I am on playwright.dev", function () {
  initWorld(this, PlaywrightDevPage);
  return this.page.open();
});

Then<CustomWorld>("playwright test works", function () {
  assertPage(this.page, PlaywrightDevPage);
  return this.page.titleHasText("Playwright");
});
