import { describe, it, expect, vi } from "vitest";
import { generateToken } from "./utils";

describe("generateToken()", () => {
  it("should call the logger function if logger fn passed", () => {
    const loggerFn = vi.fn();
    generateToken(loggerFn);

    expect(loggerFn).toHaveBeenCalled();
    expect(loggerFn).toHaveBeenCalledTimes(1);
  });
});
