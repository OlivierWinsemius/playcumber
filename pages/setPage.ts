import CustomPage from "./customPage";
import CustomWorld from "./customWorld";

export default function setPage<
  Page extends typeof CustomPage,
  PageInstance extends InstanceType<Page>
>(
  currentWorld: CustomWorld,
  targetPage: Page
): asserts currentWorld is CustomWorld<PageInstance> {
  const newPage = new targetPage(currentWorld.page.page);
  currentWorld.page = newPage;
}
