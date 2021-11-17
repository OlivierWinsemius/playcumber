import { Given, Then, When } from "@cucumber/cucumber";

import { CustomWorld } from "../world/world";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { DashboardPage } from "../page-objects/dashboardPage";

import { navigate, testText } from "../step-tests/example";
import { goToDashboardPage } from "../step-tests/dashboard";
import { initPage } from "../hooks/initPage";

Given("I navigate to playwright", function (this: CustomWorld) {
  initPage(this, PlaywrightDevPage);
  return navigate(this);
});

Then("playwright test works", function (this: CustomWorld<PlaywrightDevPage>) {
  return testText(this);
});
