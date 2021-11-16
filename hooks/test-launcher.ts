import { Before, BeforeAll, AfterAll, After } from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import { CustomPage } from "../page-objects/page";

let browser: Browser;

BeforeAll(async function (): Promise<void> {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async function (this: CustomPage) {
  await browser.close();
});

Before(async function (this: CustomPage): Promise<void> {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomPage): Promise<void> {
  await this.page.close();
  await this.context.close();
});
