import { Given, Then } from "@cucumber/cucumber";

import { PlaywrightDevPage } from "../../page-objects/playwrightPage";
import { goToPlaywrightPage, testText } from "../../tests/example";
import { CustomWorld, initializeWorldPage } from "../world";

type PlaywrightWorld = CustomWorld<PlaywrightDevPage>;

Given("I have a playwright page", function (this: CustomWorld) {
  return initializeWorldPage(this, PlaywrightDevPage);
});

Given("I navigate to playwright.dev", function (this: PlaywrightWorld) {
  return goToPlaywrightPage(this);
});

Then("playwright test works", function (this: PlaywrightWorld) {
  return testText(this);
});
