import { When } from "./steps";
import setPage from "../assertions/setPage";
import { Pages } from "./parameters";

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
