import { test } from "@playwright/test";
import { createStep } from "./createPlaywrightStep";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { navigate } from "../step-tests/testText";

const playwrightStep = createStep(PlaywrightDevPage);

const navigateStep = playwrightStep(navigate);
const testTextStep = playwrightStep(navigate);

test("works", async ({ page }) => {
  await navigateStep({ page });
  await testTextStep({ page });
});
