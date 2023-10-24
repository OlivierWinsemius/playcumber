import { When } from "./steps";
import setPage from "../assertions/setPage";
import { Page } from "./parameters";

When("I open the {page} page", async function (page: Page) {
  setPage(this, page);
  await this.page.open();
});

When("I am redirected to the {page} page", async function (page: Page) {
  setPage(this, page);
  await this.page.waitForUrl();
});
