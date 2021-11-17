import { CustomPageClass } from "../page-objects/page";
import { CustomWorld } from "../world/world";

export function initPage<C extends CustomPageClass, CI extends InstanceType<C>>(
  t: CustomWorld,
  c: C
): asserts t is CustomWorld<CI> {
  const newPage = new c(t.page.page);
  t.page = newPage;
}
