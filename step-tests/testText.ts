import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { TestParams } from "./types";

export async function navigate({ page }: TestParams<PlaywrightDevPage>) {
  await page.goto();
}

export async function testText({ page }: TestParams<PlaywrightDevPage>) {
  await page.titleHasText("Playwright");
}
