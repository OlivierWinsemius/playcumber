import { test } from "@playwright/test";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";

test("works", async ({ page }) => {
  const playwrightPage = new PlaywrightDevPage(page);

  await playwrightPage.open();
  await playwrightPage.titleHasText("Playwright");
});
