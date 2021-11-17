import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "playwright-tests",
  use: {
    actionTimeout: 60000,
    headless: false,
    storageState: ".state.json.cache",
    viewport: { width: 600, height: 600 },
  },
};

export default config;
