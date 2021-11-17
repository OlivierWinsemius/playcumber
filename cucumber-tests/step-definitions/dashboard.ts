import { Given, Then } from "@cucumber/cucumber";

import { DashboardPage } from "../../page-objects/dashboardPage";
import { goToDashboardPage, isButtonVisible } from "../../tests/dashboard";
import { CustomWorld, initializeWorldPage } from "../world";

type DashboardWorld = CustomWorld<DashboardPage>;

Given(/^I have a dashboard page$/, function (this: CustomWorld) {
  return initializeWorldPage(this, DashboardPage);
});

Given(
  /^I navigate to '\/dashboard\/(.*)'$/,
  function (this: DashboardWorld, url: string) {
    return goToDashboardPage(this, url);
  }
);

Then(
  /^I should see button '(.*)'$/,
  function (this: DashboardWorld, text: string) {
    return isButtonVisible(this, text);
  }
);
