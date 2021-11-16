import { CustomPage } from "../page-objects/page";

export type TestParams<P extends CustomPage, T = {}> = {
  page: P;
} & T;

export type TestFunction<P extends CustomPage, T = {}> = (
  params: TestParams<P, T>
) => Promise<void> | void;
