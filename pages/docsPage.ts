import { env } from "../env";
import PlaywrightPage from "./homePage";

export default class DocsPage extends PlaywrightPage {
  url = env.BASE_URL + "/docs/intro";

  get sidebar() {
    return this.page.locator(".sidebar");
  }
}
