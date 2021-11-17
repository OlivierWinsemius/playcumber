import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { TestFunction } from "./types";

export const navigate: TestFunction<PlaywrightDevPage> = async ({ page }) => {
  await page.goto();
};

export const testText: TestFunction<PlaywrightDevPage> = async ({ page }) => {
  await page.titleHasText("Playwright");
};
