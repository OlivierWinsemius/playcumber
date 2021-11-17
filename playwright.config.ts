import { PlaywrightTestConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    actionTimeout: 60000,
    headless: false,
    storageState: ".state.json.cache",
    viewport: { width: 600, height: 600 },
  },
};

export default config;
