import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "features",
  use: {
    actionTimeout: 60000,
    headless: false,
    storageState: "state.json",
    viewport: { width: 600, height: 600 },
  },
};

export default config;
