import { expect } from "@playwright/test";
import { Then, When } from "./steps";
import pageHasLocator from "../assertions/pageHasLocator";

When(
  "I click {locator} button with text {string}",
  async function (locator: string, text: string) {
    pageHasLocator(this, locator);
    await this.page.haha.getByRole("button", { name: text }).click();
  }
);

When(
  "I click {locator} link with text {string}",
  async function (locator: string, text: string) {
    pageHasLocator(this, locator);
    await this.page[locator].getByRole("link", { name: text }).click();
  }
);

Then(
  "I see {locator} has text {string}",
  async function (locator: string, text: string) {
    pageHasLocator(this, locator);
    await expect(this.page[locator].getByText(text)).toBeVisible();
  }
);

Then(
  "I see {locator} has link with text {string}",
  async function (locator: string, text: string) {
    pageHasLocator(this, locator);

    await expect(
      this.page[locator].getByRole("link", { name: text })
    ).toBeVisible();
  }
);

Then(
  "I see {locator} has button with text {string}",
  async function (locator: string, text: string) {
    pageHasLocator(this, locator);

    await expect(
      this.page[locator].getByRole("button", { name: text })
    ).toBeVisible();
  }
);
