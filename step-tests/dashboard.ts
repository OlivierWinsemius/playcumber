import { DashboardPage } from "../page-objects/dashboardPage";
import { TestFunction } from "./types";

export const goToDashboardPage: TestFunction<DashboardPage, [string]> = (
  { page },
  url: string
) => page.openDashboard(url);

export const isButtonVisible: TestFunction<DashboardPage, [string]> = (
  { page },
  url: string
) => page.buttonExists(url);
