import { Given, Then } from "@cucumber/cucumber";

import { DashboardPage } from "../../page-objects/dashboardPage";
import { initWorld } from "../initWorld";
import { CustomWorld } from "../world";

type DashboardWorld = CustomWorld<DashboardPage>;

Given<CustomWorld>(/^I am on '\/dashboard\/(.*)'$/, function (url: string) {
  initWorld(this, DashboardPage);
  return this.page.open(url);
});

Then<DashboardWorld>(/^I should see button '(.*)'$/, function (text: string) {
  return this.page.buttonExists(text);
});
