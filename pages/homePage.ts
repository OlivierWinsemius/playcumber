import { env } from "../env";
import CustomPage from "./customPage";

export default class HomePage extends CustomPage {
  url = env.BASE_URL;

  get header() {
    return this.page.locator("nav.navbar");
  }

  get footer() {
    return this.page.locator("footer.footer");
  }
}
