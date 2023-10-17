import { CustomPage, CustomPageClass } from "../page-objects/customPage";

export function assertPage<
  PageClass extends CustomPageClass,
  PageClassInstance extends InstanceType<PageClass>
>(page: CustomPage, targetPage: PageClass): asserts page is PageClassInstance {
  if (!(page instanceof targetPage))
    throw new Error(`Page is not instance of ${targetPage.name}`);
}
