import { CustomPage, PageClass } from "../page-objects/page";
import { TestFunction } from "../step-tests/types";

export const createStep =
  <P extends PageClass, T extends any[] = []>(pageClass: P) =>
  <I extends InstanceType<P>>(callback: TestFunction<I, T>) =>
    function (this: CustomPage, ...args: T) {
      return callback({ page: new pageClass(this.page) as I }, ...args);
    };
