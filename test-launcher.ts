import {
  Before,
  BeforeAll,
  AfterAll,
  After,
  Status,
  setWorldConstructor,
} from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import CustomPage from "./pages/customPage";
import CustomWorld from "./customWorld";

setWorldConstructor(CustomWorld);

let browser: Browser;
BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  const context = await browser.newContext();
  const page = await context.newPage();
  this.page = new CustomPage(page);
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const path = `output/test.png`;
    const buffer = await this.page.page.screenshot({ path, fullPage: true });
    this.attach(buffer, "image/png");
  }
  await this.page.close();
});

AfterAll(async function () {
  await browser.close();
});
