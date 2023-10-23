import CustomPage from "../pages/customPage";
import CustomWorld from "../customWorld";
import { Locator } from "@playwright/test";

export default function pageHasLocator<Locators extends string[]>(
  currentWorld: CustomWorld,
  ...locators: Locators
): asserts currentWorld is CustomWorld<
  CustomPage & { [L in Locators[number]]: Locator }
> {
  const missingLocators = [];

  for (const locator of locators) {
    if (!(locator in currentWorld.page)) {
      missingLocators.push(locator);
    }
  }

  if (missingLocators.length > 0) {
    throw new Error(`Page is missing locators: "${missingLocators.join()}"`);
  }
}
