import { CustomPage } from "./page";

export class IframePage extends CustomPage {
  async waitSimLoaderHidden() {
    await this.page.waitForSelector(".simplicate_loader", { state: "hidden" });
  }

  async open(url: string) {
    await super.open(url);
    await this.waitSimLoaderHidden();
  }
}

export type CustomPageClass = typeof CustomPage;
