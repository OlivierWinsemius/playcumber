import { test } from "@playwright/test";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { navigate, testText } from "../step-tests/example";

test("works", async ({ page }) => {
  const playwrightPage = new PlaywrightDevPage(page);

  await navigate({ page: playwrightPage });
  await testText({ page: playwrightPage });
});
