import { CustomPage, PageClass } from "../page-objects/page";
import { TestFunction } from "../step-tests/types";

export const createStep =
  <P extends PageClass>(pageClass: P) =>
  <T extends any[], I extends InstanceType<P> = InstanceType<P>>(
    callback: TestFunction<I, T>
  ) =>
    callback.length > 1
      ? function (this: CustomPage, args: T) {
          return callback({ page: new pageClass(this.page) as I }, ...args);
        }
      : function (this: CustomPage, ...args: T) {
          return callback({ page: new pageClass(this.page) as I }, ...args);
        };
