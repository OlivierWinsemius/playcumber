import CustomPage from "../pages/customPage";
import CustomWorld from "../customWorld";

export default function setPage<
  TargetPage extends typeof CustomPage,
  TargetWorld extends CustomWorld<InstanceType<TargetPage>>
>(
  currentWorld: CustomWorld,
  targetPage: TargetPage
): asserts currentWorld is TargetWorld {
  const newPage = new targetPage(currentWorld.page.page);
  currentWorld.page = newPage;
}
