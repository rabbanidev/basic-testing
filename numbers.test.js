import { expect, it } from "vitest";
import { stringNumsConvertNums } from "./numbers";

it("converts valid numeric strings and numbers", () => {
  const input = ["1", 2, "3.5"];
  const output = stringNumsConvertNums(input);
  expect(output).toEqual([1, 2, 3.5]);
});

it("converts array with zero and negative numbers correctly", () => {
  const input = ["0", "-5", 10];
  const output = stringNumsConvertNums(input);
  expect(output).toEqual([0, -5, 10]);
});

it("throws error for empty string", () => {
  const input = ["1", "", "3"];
  expect(() => stringNumsConvertNums(input)).toThrow();
});

it("throws error for invalid numeric string", () => {
  const input = ["1", "abc", "3"];
  expect(() => stringNumsConvertNums(input)).toThrow();
});

it("throws error if input is not an array", () => {
  expect(() => stringNumsConvertNums("123")).toThrow();
});
