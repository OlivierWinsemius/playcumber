import { test } from "@playwright/test";
import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { navigate, testText } from "../tests/example";

test("works", async ({ page }) => {
  const playwrightPage = new PlaywrightDevPage(page);

  await navigate({ page: playwrightPage });
  await testText({ page: playwrightPage });
});
