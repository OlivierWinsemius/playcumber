import { World, IWorldOptions } from "@cucumber/cucumber";
import { CustomPage } from "../page-objects/customPage";

export class CustomWorld<P extends CustomPage = CustomPage> extends World {
  page: P;

  constructor(options: IWorldOptions, page: P) {
    super(options);
    this.page = page;
  }
}
