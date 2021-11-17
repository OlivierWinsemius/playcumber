import { World, IWorldOptions } from "@cucumber/cucumber";
import { CustomPage, CustomPageClass } from "../page-objects/page";

export class CustomWorld<P extends CustomPage = CustomPage> extends World {
  page: P;

  constructor(options: IWorldOptions, page: P) {
    super(options);
    this.page = page;
  }
}

export function initializeWorldPage<
  C extends CustomPageClass,
  CI extends InstanceType<C>
>(t: CustomWorld, c: C): asserts t is CustomWorld<CI> {
  const newPage = new c(t.page.page);
  t.page = newPage;
}
