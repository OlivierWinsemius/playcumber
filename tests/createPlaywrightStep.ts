import { Page } from "@playwright/test";
import { PageClass } from "../page-objects/page";
import { TestFunction } from "../step-tests/types";

type PlaywrightTest = <T>(args: { page: Page } & T) => void | Promise<void>;

export const createStep =
  <P extends PageClass>(pageClass: P) =>
  <PI extends InstanceType<P>>(callback: TestFunction<PI>): PlaywrightTest =>
  ({ page }) =>
    callback({ page: new pageClass(page) as PI });
