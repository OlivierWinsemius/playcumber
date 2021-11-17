import { Given, Then } from "@cucumber/cucumber";

import { CustomWorld } from "../world/world";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";

import { navigate, testText } from "../step-tests/example";
import { initPage } from "../hooks/initPage";

Given("I navigate to playwright", function (this: CustomWorld) {
  initPage(this, PlaywrightDevPage);
  return navigate(this);
});

Then("playwright test works", function (this: CustomWorld<PlaywrightDevPage>) {
  return testText(this);
});
