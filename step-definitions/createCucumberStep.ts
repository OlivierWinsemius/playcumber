import { CustomPage, PageClass } from "../page-objects/page";
import { TestFunction } from "../step-tests/types";

export const createStep =
  <P extends PageClass>(pageClass: P) =>
  <I extends InstanceType<P>>(callback: TestFunction<I>) =>
    function (this: CustomPage) {
      return callback({ page: new pageClass(this.page) as I });
    };
