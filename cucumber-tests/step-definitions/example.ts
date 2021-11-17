import { Given, Then } from "@cucumber/cucumber";

import { PlaywrightDevPage } from "../../page-objects/playwrightPage";
import { navigate, testText } from "../../tests/example";
import { CustomWorld, initializeWorldPage } from "../world";

Given("I navigate to playwright", function (this: CustomWorld) {
  initializeWorldPage(this, PlaywrightDevPage);
  return navigate(this);
});

Then("playwright test works", function (this: CustomWorld<PlaywrightDevPage>) {
  return testText(this);
});
