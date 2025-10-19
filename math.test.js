import { expect, test } from "vitest";
import { add } from "./math";

test("returns the sum when given two positive numbers", () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Action
  const result = add(a, b);

  //   Assert
  expect(result).toBe(a + b);
});

test("returns the correct sum when one argument is a number and the other is a numeric string", () => {
  // Arrange
  const a = 2;
  const b = "3";

  // Action
  const result = add(a, b);

  //   Assert
  expect(result).toBe(a + Number(b));
});

test("returns the NAN when one argument is a number and the other is a string", () => {
  // Arrange
  const a = 2;
  const b = "invalid";

  // Action
  const result = add(a, b);

  //   Assert
  expect(result).toBeNaN();
});

test("throws an error when no arguments are provided", () => {
  const resultFn = () => {
    add();
  };

  expect(resultFn).toThrow("Invalid input");
});

test("throws an error when argument are object or array", () => {
  const resultFn = () => {
    // add([1, 2, 3, 4]);
    add({
      a: 1,
      b: 2,
    });
  };

  expect(resultFn).toThrow();
});
