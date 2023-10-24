import { expect } from "@playwright/test";
import { Then, When } from "./steps";
import { Role, Section } from "./parameters";
import pageHasLocator from "../assertions/pageHasLocator";

When(
  "I click {section} {role} with text {string}",
  async function (section: Section, role: Role, text: string) {
    pageHasLocator(this, section);
    await this.page[section].getByRole(role, { name: text }).click();
  }
);

Then(
  "I see {section} has text {string}",
  async function (section: Section, text: string) {
    pageHasLocator(this, section);
    await expect(this.page[section].getByText(text)).toBeVisible();
  }
);

Then(
  "I see {section} has {role} with text {string}",
  async function (section: Section, role: Role, text: string) {
    pageHasLocator(this, section);
    await expect(
      this.page[section].getByRole(role, { name: text })
    ).toBeVisible();
  }
);
