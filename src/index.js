import { test as testData } from "./data";
import { pipe, pick, map } from "./s";

console.log({ testData });

const filteredObj = map(pick(["$touched", "$valid"]))(testData.required);

console.log({ filteredObj });
