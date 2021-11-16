import { CustomPage } from "./page";

export class DashboardPage extends CustomPage {
  async goto(url: string) {
    await this.page.goto("https://www.google.com");
  }
}
