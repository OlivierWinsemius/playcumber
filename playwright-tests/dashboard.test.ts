import { test } from "@playwright/test";
import { DashboardPage } from "../page-objects/dashboardPage";

test("dashboard", async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await dashboardPage.open("my-tasks");
  await dashboardPage.buttonExists("Nieuwe workflow");
});
