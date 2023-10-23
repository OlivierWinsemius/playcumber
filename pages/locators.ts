import { Locator } from "@playwright/test";

export type LocatorName = "header" | "footer";

export type PageLocators<L extends LocatorName[]> = {
  [l in L[number]]: Locator;
};
