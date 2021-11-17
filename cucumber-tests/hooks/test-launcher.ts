import { Before, BeforeAll, AfterAll, After, Status } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { CustomPage } from "../../page-objects/page";
import { CustomWorld } from "../world";

let browser: Browser;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {
  const context = await browser.newContext({
    viewport: { width: 600, height: 600 },
    storageState: ".state.json.cache",
  });

  const page = await context.newPage();
  this.page = new CustomPage(page);
});

After(async function (this: CustomWorld, scenario) {
  await this.page.close();

  if (scenario.result?.status === Status.FAILED) {
    const path = `output/${scenario.pickle.name}.png`;
    const buffer = await this.page.page.screenshot({ path, fullPage: true });
    await this.attach(buffer, "image/png");
  }
});

AfterAll(async function (this: CustomWorld) {
  await browser.close();
});
