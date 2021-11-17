import { Given, Then } from "@cucumber/cucumber";
import { initPage } from "../hooks/initPage";
import { DashboardPage } from "../page-objects/dashboardPage";
import { goToDashboardPage, isButtonVisible } from "../step-tests/dashboard";
import { CustomWorld } from "../world/world";

Given(
  /^I go to page '\/dashboard\/(.*)'$/,
  async function (this: CustomWorld, url: string) {
    initPage(this, DashboardPage);
    return goToDashboardPage(this, url);
  }
);

Then(
  /^I should see button '(.*)'$/,
  function (this: CustomWorld<DashboardPage>, text: string) {
    return isButtonVisible(this, text);
  }
);
