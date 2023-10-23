import CustomPage from "../pages/customPage";
import CustomWorld from "../customWorld";

export default function setPage<TargetPage extends typeof CustomPage>(
  currentWorld: CustomWorld,
  targetPage: TargetPage
): asserts currentWorld is CustomWorld<InstanceType<TargetPage>> {
  const newPage = new targetPage(currentWorld.page.page);
  currentWorld.page = newPage;
}
