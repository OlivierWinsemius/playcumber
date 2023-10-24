import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  clientPrefix: "",
  client: {
    BASE_URL: z.string().url().default("https://playwright.dev"),
    HEADLESS: z
      .string()
      .optional()
      .transform((s) => s !== "false" && s !== "0"),
  },
  runtimeEnv: process.env,
});
