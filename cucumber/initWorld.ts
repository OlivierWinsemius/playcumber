import { CustomPageClass } from "../page-objects/customPage";
import { CustomWorld } from "./world";

export function initWorld<
  C extends CustomPageClass,
  CI extends InstanceType<C>
>(t: CustomWorld, c: C): asserts t is CustomWorld<CI> {
  const newPage = new c(t.page.page);
  t.page = newPage;
}
