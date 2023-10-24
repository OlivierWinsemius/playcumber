import { expect } from "@playwright/test";
import { Then, When } from "./steps";
import pageHasLocator from "../assertions/pageHasLocator";
import { Role } from "./parameters";

When(
  "I click {section} {role} with text {string}",
  async function (locator: string, role: Role, text: string) {
    pageHasLocator(this, locator);
    await this.page[locator].getByRole(role, { name: text }).click();
  }
);

Then(
  "I see {section} has text {string}",
  async function (locator: string, text: string) {
    pageHasLocator(this, locator);
    await expect(this.page[locator].getByText(text)).toBeVisible();
  }
);

Then(
  "I see {section} has {role} with text {string}",
  async function (locator: string, role: Role, text: string) {
    pageHasLocator(this, locator);
    await expect(
      this.page[locator].getByRole(role, { name: text })
    ).toBeVisible();
  }
);
