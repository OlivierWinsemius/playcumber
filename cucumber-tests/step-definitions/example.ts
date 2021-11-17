import { Given, Then } from "@cucumber/cucumber";

import { PlaywrightDevPage } from "../../page-objects/playwrightPage";
import { initWorld } from "../initWorld";
import { CustomWorld } from "../world";

type PlaywrightWorld = CustomWorld<PlaywrightDevPage>;

Given<CustomWorld>("I have a playwright page", function () {
  return initWorld(this, PlaywrightDevPage);
});

Given<PlaywrightWorld>("I am on playwright.dev", function () {
  return this.page.open();
});

Then<PlaywrightWorld>("playwright test works", function () {
  return this.page.titleHasText("Playwright");
});
