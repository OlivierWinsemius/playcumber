import { test } from "@playwright/test";
import { DashboardPage } from "../page-objects/dashboardPage";
import { goToDashboardPage, isButtonVisible } from "../tests/dashboard";

test("dashboard", async ({ page }) => {
  const dashboardPage = new DashboardPage(page);
  await goToDashboardPage({ page: dashboardPage }, "my-tasks");
  await isButtonVisible({ page: dashboardPage }, "Nieuwe workflow");
});
