import { When } from "../steps";
import { defineParameterType } from "@cucumber/cucumber";
import PlaywrightDocsPage from "../pages/playwrightDocsPage";
import PlaywrightPage from "../pages/playwrightPage";
import setPage from "../assertions/setPage";

const pages = {
  home: PlaywrightPage,
  docs: PlaywrightDocsPage,
} as const;
type Pages = typeof pages;

defineParameterType({
  name: "page",
  regexp: /home|docs/,
  transformer: (p) => pages[p],
});

When("I open the {page} page", async function (page: Pages[keyof Pages]) {
  setPage(this, page);
  await this.page.open();
});

When(
  "I navigate to the {page} page",
  async function (page: Pages[keyof Pages]) {
    setPage(this, page);
    await this.page.waitForUrl();
  }
);
