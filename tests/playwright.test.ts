import { test } from "@playwright/test";
import { createStep } from "./createPlaywrightStep";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { navigate } from "../step-tests/example";
import { goToDashboardPage } from "../step-tests/dashboard";

const playwrightStep = createStep(PlaywrightDevPage);

const navigateStep = playwrightStep(navigate);
const testTextStep = playwrightStep(navigate);
const goToDashboardStep = playwrightStep(goToDashboardPage);

test("works", async ({ page }) => {
  await navigateStep(page);
  await testTextStep(page);
});

test("dashboard", async ({ page }) => {
  await goToDashboardStep(page, "testoo");
});
