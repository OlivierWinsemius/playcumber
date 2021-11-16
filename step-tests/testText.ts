import { PlaywrightDevPage } from "../page-objects/page";
import { TestParams } from "./types";

export const testText = async ({ page }: TestParams<PlaywrightDevPage>) => {
  await page.goto();
  await page.titleHasText("Playwright");
};
