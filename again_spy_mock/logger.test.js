import { describe, it, expect, vi } from "vitest";
import { generateLog } from "./logger";

describe("generateLog()", () => {
  it("should call the logger with the correct message", () => {
    const loggerFn = vi.fn();

    const message = generateLog(loggerFn);

    expect(loggerFn).toBeCalled();
    expect(loggerFn).toBeCalledWith("This is a log message");
    expect(message).toBe("This is a log message");
    expect(loggerFn).toHaveBeenCalledTimes(1);
  });
});
