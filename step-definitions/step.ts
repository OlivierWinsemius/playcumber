import { Then, When } from "@cucumber/cucumber";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { createStep } from "./createCucumberStep";
import { navigate, testText } from "../step-tests/example";

export const playwrightStep = createStep(PlaywrightDevPage);

When("I navigate", playwrightStep(navigate));
Then("playwright test works", playwrightStep(testText));
