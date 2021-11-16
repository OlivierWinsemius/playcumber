import { DashboardPage } from "../page-objects/dashboardPage";
import { TestParams } from "./types";

export async function goToDashboardPage(
  { page }: TestParams<DashboardPage>,
  url: string
) {
  await page.goto(url);
}
