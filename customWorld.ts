import { World, IWorldOptions } from "@cucumber/cucumber";
import CustomPage from "./pages/customPage";

export default class CustomWorld<
  P extends CustomPage = CustomPage
> extends World {
  url: string;
  page: P;

  constructor(options: IWorldOptions, page: P) {
    super(options);
    this.page = page;
  }
}
