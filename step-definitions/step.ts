import { Given, Then, When } from "@cucumber/cucumber";
import { createStep } from "./createCucumberStep";

import { DashboardPage } from "../page-objects/dashboardPage";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";

import { navigate, testText } from "../step-tests/example";
import { goToDashboardPage } from "../step-tests/dashboard";

export const playwrightStep = createStep(PlaywrightDevPage);
export const dashboardStep = createStep(DashboardPage);

When("I navigate", playwrightStep(navigate));
Then("playwright test works", playwrightStep(testText));
Given("I go to page {string}", dashboardStep(goToDashboardPage));
