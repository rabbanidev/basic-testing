import { expect, it } from "vitest";
import { strLength } from "./string";

it("return the length of the string", () => {
  const str = "hello";
  const res = strLength(str);

  expect(res).toBe(str.length);
});

it("throw an error if the input is not a string", () => {
  expect(() => strLength(null)).toThrow("Input must be a string");
  expect(() => strLength(undefined)).toThrow("Input must be a string");
  expect(() => strLength(5)).toThrow("Input must be a string");
  expect(() => strLength([])).toThrow("Input must be a string");
});
