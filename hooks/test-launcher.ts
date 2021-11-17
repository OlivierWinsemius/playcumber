import {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setDefaultTimeout,
  Status,
} from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { CustomPage } from "../page-objects/page";
import { CustomWorld } from "../world/world";

let browser: Browser;

setDefaultTimeout(60 * 1000);

BeforeAll(async function (): Promise<void> {
  browser = await chromium.launch({ headless: false });
});

AfterAll(async function (this: CustomWorld) {
  await browser.close();
});

Before(async function (this: CustomWorld): Promise<void> {
  const context = await browser.newContext({
    viewport: { width: 600, height: 600 },
    storageState: ".state.json.cache",
  });

  const page = await context.newPage();
  this.page = new CustomPage(page);

  this.page.page = page;
  this.page.context = context;
});

After(async function (this: CustomWorld, scenario): Promise<void> {
  await this.page.page.close();
  await this.page.context.close();

  if (scenario?.result?.status === Status.FAILED) {
    const path = `output/${scenario.pickle.name}.png`;
    const buffer = await this.page.page.screenshot({ path, fullPage: true });
    await this.attach(buffer, "image/png");
  }
});
