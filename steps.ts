import {
  Given as OriginalGiven,
  When as OriginalWhen,
  Then as OriginalThen,
} from "@cucumber/cucumber";

import CustomWorld from "./pages/customWorld";

export const Given = OriginalGiven<CustomWorld>;
export const When = OriginalWhen<CustomWorld>;
export const Then = OriginalThen<CustomWorld>;
