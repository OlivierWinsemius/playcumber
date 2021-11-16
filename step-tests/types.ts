import { CustomPage } from "../page-objects/page";

export type TestParams<P extends CustomPage> = {
  page: P;
};

export type TestFunction<P extends CustomPage, T extends any[] = []> = (
  params: TestParams<P>,
  ...args: T
) => Promise<void> | void;
