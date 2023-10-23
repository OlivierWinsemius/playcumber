import { expect } from "@playwright/test";
import { Then, When } from "../steps";
import pageHasLocator from "../assertions/pageHasLocator";
import { defineParameterType } from "@cucumber/cucumber";
import CustomWorld from "../customWorld";

defineParameterType({
  name: "locator",
  regexp: /page|header|footer|sidebar/,
  transformer: (l) => l,
});

When("I click {locator} button with text {string}", async function <
  L extends string
>(this: CustomWorld, locator: L, text: string) {
  pageHasLocator(this, locator);
  await this.page[locator].getByRole("button", { name: text }).click();
});

When("I click {locator} link with text {string}", async function <
  L extends string
>(this: CustomWorld, locator: L, text: string) {
  pageHasLocator(this, locator);
  await this.page[locator].getByRole("link", { name: text }).click();
});

Then("{locator} has text {string}", async function <
  L extends string
>(this: CustomWorld, locator: L, text: string) {
  pageHasLocator(this, locator);
  await expect(this.page[locator].getByText(text)).toBeVisible();
});
