import { Given, Then } from "@cucumber/cucumber";

import { DashboardPage } from "../../page-objects/dashboardPage";
import { initWorld } from "../initWorld";
import { CustomWorld } from "../world";

type DashboardWorld = CustomWorld<DashboardPage>;

Given("I have a dashboard page", function (this: CustomWorld) {
  return initWorld(this, DashboardPage);
});

Given(
  /^I navigate to '\/dashboard\/(.*)'$/,
  function (this: DashboardWorld, url: string) {
    return this.page.open(url);
  }
);

Then(
  /^I should see button '(.*)'$/,
  function (this: DashboardWorld, text: string) {
    return this.page.buttonExists(text);
  }
);
