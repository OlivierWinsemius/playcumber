import { Page } from "@playwright/test";
import { PageClass } from "../page-objects/page";
import { TestFunction } from "../step-tests/types";

export const createStep =
  <P extends PageClass>(pageClass: P) =>
  <T extends any[] = [], PI extends InstanceType<P> = InstanceType<P>>(
    callback: TestFunction<PI, T>
  ) =>
  (page: Page, ...args: T) =>
    callback({ page: new pageClass(page) as PI }, ...args);
