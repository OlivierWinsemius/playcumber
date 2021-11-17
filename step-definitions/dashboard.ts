import { Given, Then } from "@cucumber/cucumber";

import { DashboardPage } from "../page-objects/dashboardPage";
import { goToDashboardPage, isButtonVisible } from "../tests/dashboard";
import { initPage } from "../utils/initPage";
import { CustomWorld } from "../utils/world";

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
