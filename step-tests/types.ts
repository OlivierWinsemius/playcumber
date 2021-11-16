import { CustomPage } from "../page-objects/page";

export type TestParams<P extends CustomPage, T = {}> = { page: P } & T;
