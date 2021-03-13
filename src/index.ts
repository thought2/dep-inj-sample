import { greet } from "./greet";
import * as readlineSync from "readline-sync";
import * as fs from "fs";

const logLine = (msg: string): void => console.log(msg);

const getLine = (): string => readlineSync.question("");

export const main = (): void => {
  greet({
    logLine,
    getLine,
  });
};
