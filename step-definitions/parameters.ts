import { defineParameterType } from "@cucumber/cucumber";
import PlaywrightPage from "../pages/playwrightPage";
import PlaywrightDocsPage from "../pages/playwrightDocsPage";

const pages = {
  home: PlaywrightPage,
  docs: PlaywrightDocsPage,
} as const;

export type Pages = typeof pages;

defineParameterType({
  name: "page",
  regexp: /home|docs/,
  transformer: (p) => pages[p],
});

defineParameterType({
  name: "locator",
  regexp: /page|header|footer|sidebar|modal/,
  transformer: (l) => l,
});
