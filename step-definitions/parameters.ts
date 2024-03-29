import { defineParameterType } from "@cucumber/cucumber";
import HomePage from "../pages/homePage";
import DocsPage from "../pages/docsPage";
import { Locator } from "@playwright/test";

const pages = {
  home: HomePage,
  docs: DocsPage,
} as const;

type Pages = typeof pages;
export type Page = Pages[keyof Pages];
defineParameterType({
  name: "page",
  regexp: /home|docs/,
  transformer: (p) => pages[p],
});

export type Section = "page" | "header" | "footer" | "sidebar" | "modal";
defineParameterType({
  name: "section",
  regexp: /page|header|footer|sidebar|modal/,
  transformer: (l) => l,
});

export type Role = Parameters<Locator["getByRole"]>[0];
defineParameterType({
  name: "role",
  regexp:
    /alert|alertdialog|application|article|banner|blockquote|button|caption|cell|checkbox|code|columnheader|combobox|complementary|contentinfo|definition|deletion|dialog|directory|document|emphasis|feed|figure|form|generic|grid|gridcell|group|heading|img|insertion|link|list|listbox|listitem|log|main|marquee|math|meter|menu|menubar|menuitem|menuitemcheckbox|menuitemradio|navigation|none|note|option|paragraph|presentation|progressbar|radio|radiogroup|region|row|rowgroup|rowheader|scrollbar|search|searchbox|separator|slider|spinbutton|status|strong|subscript|superscript|switch|tab|table|tablist|tabpanel|term|textbox|time|timer|toolbar|tooltip|tree|treegrid|treeitem/,
  transformer: (l) => l,
});
