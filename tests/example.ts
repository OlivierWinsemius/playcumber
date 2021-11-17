import { PlaywrightDevPage } from "../page-objects/playwrightPage";
import { TestFunction } from "./types";

export const goToPlaywrightPage: TestFunction<PlaywrightDevPage> = ({ page }) =>
  page.open();

export const testText: TestFunction<PlaywrightDevPage> = ({ page }) =>
  page.titleHasText("Playwright");
