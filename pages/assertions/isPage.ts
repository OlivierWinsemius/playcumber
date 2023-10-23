import CustomPage from "../customPage";
import CustomWorld from "../../customWorld";

export default function isPage<TargetPage extends typeof CustomPage>(
  currentWorld: CustomWorld,
  targetPage: TargetPage
): asserts currentWorld is CustomWorld<InstanceType<TargetPage>> {
  if (!(currentWorld.page instanceof targetPage)) {
    throw new Error(`Page is not set to "${targetPage.name}"`);
  }

  if (!currentWorld.page.url) {
    throw new Error(`"${targetPage.name}" is not open`);
  }
}
