import { expect, it } from "vitest";
import { convertToNumber } from "./convertToNumber";

it("it should convert numeric string to number", () => {
  const str = "1211";
  const res = convertToNumber(str);
  expect(res).toBeTypeOf("number");
  expect(isNaN(res)).not.toBe(true);
});

it("throws an error when the value is not a number", () => {
  const resultFn = () => convertToNumber("abncc");
  expect(resultFn).toThrow("Invalid input");
});

it("throws an error when given a non-numeric object", () => {
  const obj = { value: "1211" };
  const resultFn = () => convertToNumber(obj);
  expect(resultFn).toThrow("Invalid input");
});

it("throws an error when given an array with invalid content", () => {
  const arr = ["abc"];
  const resultFn = () => convertToNumber(arr);
  expect(resultFn).toThrow("Invalid input");
});
