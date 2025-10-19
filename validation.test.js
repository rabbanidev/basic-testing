import { it, expect, describe } from "vitest";
import { validateArrayNotEmpty, validateEmail } from "./validation";

describe.only("validateEmail()", () => {
  it("should validate an email address correctly", () => {
    const email = "example@gmail.com";
    expect(validateEmail(email)).toBe(true);
  });

  it("throw an error if email address incorrect", () => {
    const email = "example";
    expect(() => validateEmail(email)).toThrow();
  });

  it("throw an error if email address are empty string", () => {
    const email = "";
    expect(() => validateEmail(email)).toThrow();
  });

  it("throw an error if email address are falsy values", () => {
    expect(() => validateEmail(null)).toThrow();
    expect(() => validateEmail(undefined)).toThrow();
  });
});

describe("validateArrayNotEmpty()", () => {
  it("should validate a non empty array", () => {
    const arr = [1, 2, 3];
    const resultFn = validateArrayNotEmpty(arr);
    expect(resultFn).toBe(true);
  });

  it("throws an error if array is empty", () => {
    const arr = [];
    const resultFn = () => validateArrayNotEmpty(arr);
    expect(resultFn).toThrow("Array must be non empty");
  });

  it("throws an error if input is not an array", () => {
    const arr = "Hello";
    const resultFn = () => validateArrayNotEmpty(arr);
    expect(resultFn).toThrow("Input must be an array");
  });
});
