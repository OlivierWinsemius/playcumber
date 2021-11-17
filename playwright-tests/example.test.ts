import { test } from "@playwright/test";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { goToPlaywrightPage, testText } from "../tests/example";

test("works", async ({ page }) => {
  const playwrightPage = new PlaywrightDevPage(page);

  await goToPlaywrightPage({ page: playwrightPage });
  await testText({ page: playwrightPage });
});
