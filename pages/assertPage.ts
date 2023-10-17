import CustomPage from "./customPage";
import CustomWorld from "./customWorld";

export default function assertPage<
  PageClass extends typeof CustomPage,
  PageInstance extends InstanceType<PageClass>
>(
  currentWorld: CustomWorld,
  targetPage: PageClass
): asserts currentWorld is CustomWorld<PageInstance> {
  if (!(currentWorld.page instanceof targetPage))
    throw new Error(`You are not on page "${targetPage.name}"`);
}
