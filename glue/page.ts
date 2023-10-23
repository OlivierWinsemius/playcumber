import { When } from "../steps";
import { defineParameterType } from "@cucumber/cucumber";
import PlaywrightDocsPage from "../pages/playwrightDocsPage";
import PlaywrightPage from "../pages/playwrightPage";
import setPage from "../assertions/setPage";

const pages = {
  home: PlaywrightPage,
  docs: PlaywrightDocsPage,
};

defineParameterType({
  name: "page",
  regexp: /home|docs/,
  transformer: (p) => {
    const page = pages[p];
    if (!page) throw Error(`unknown page ${p}`);
    return page;
  },
});

When("I open the {page} page", async function (page) {
  setPage(this, page);
  await this.page.open();
});

When("I navigate to the {page} page", async function (page) {
  setPage(this, page);
  await this.page.waitForUrl();
});
