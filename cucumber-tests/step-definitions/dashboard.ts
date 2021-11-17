import { Given, Then } from "@cucumber/cucumber";

import { DashboardPage } from "../../page-objects/dashboardPage";
import { initWorld } from "../initWorld";
import { CustomWorld } from "../world";

type DashboardWorld = CustomWorld<DashboardPage>;

Given<CustomWorld>("I have a dashboard page", function () {
  return initWorld(this, DashboardPage);
});

Given<DashboardWorld>(/^I am on '\/dashboard\/(.*)'$/, function (url: string) {
  return this.page.open(url);
});

Then<DashboardWorld>(/^I should see button '(.*)'$/, function (text: string) {
  return this.page.buttonExists(text);
});
