import CustomPage from "../pages/customPage";
import CustomWorld from "../customWorld";

export default function isPage<
  TargetPage extends typeof CustomPage,
  TargetWorld extends CustomWorld<InstanceType<TargetPage>>
>(
  currentWorld: CustomWorld,
  targetPage: TargetPage
): asserts currentWorld is TargetWorld {
  if (!(currentWorld.page instanceof targetPage)) {
    throw new Error(`Page is not set to "${targetPage.name}"`);
  }

  if (!currentWorld.page.url) {
    throw new Error(`"${targetPage.name}" is not open`);
  }
}
