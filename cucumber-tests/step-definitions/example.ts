import { Given, Then } from "@cucumber/cucumber";

import { PlaywrightDevPage } from "../../page-objects/playwrightPage";
import { initWorld } from "../initWorld";
import { CustomWorld } from "../world";

type PlaywrightWorld = CustomWorld<PlaywrightDevPage>;

Given("I have a playwright page", function (this: CustomWorld) {
  return initWorld(this, PlaywrightDevPage);
});

Given("I navigate to playwright.dev", function (this: PlaywrightWorld) {
  return this.page.open();
});

Then("playwright test works", function (this: PlaywrightWorld) {
  return this.page.titleHasText("Playwright");
});
