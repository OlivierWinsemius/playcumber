import { test } from "@playwright/test";
import { PlaywrightDevPage } from "../page-objects/page";
import { testText } from "../step-tests/testText";

test("basic test", async function ({ page }) {
  const playwrightDevPage = new PlaywrightDevPage(page);
  await testText({ page: playwrightDevPage });
});
