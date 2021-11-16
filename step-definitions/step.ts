import { When } from "@cucumber/cucumber";
import { PlaywrightDevPage } from "../page-objects/page";
import { testText } from "../step-tests/testText";

When("playwright test works", async function () {
  const playwrightDevPage = new PlaywrightDevPage(this.page);
  await testText({ page: playwrightDevPage });
});
