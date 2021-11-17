import { World } from "@cucumber/cucumber";
import { CustomPage } from "../page-objects/page";

export class CustomWorld<P extends CustomPage = CustomPage> extends World {
  page: P;
}
