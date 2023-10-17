import {
  Before,
  BeforeAll,
  AfterAll,
  After,
  setWorldConstructor,
} from "@cucumber/cucumber";
import { chromium, Browser } from "@playwright/test";
import CustomPage from "./pages/customPage";
import CustomWorld from "./pages/customWorld";

setWorldConstructor(CustomWorld);

let browser: Browser;
BeforeAll(async function () {
  browser = await chromium.launch();
});

Before(async function () {
  const context = await browser.newContext();
  const page = await context.newPage();
  this.page = new CustomPage(page);
});

After(async function () {
  await this.page.close();
});

AfterAll(async function () {
  await browser.close();
});
