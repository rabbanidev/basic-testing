import { describe, it, expect, vi } from "vitest";
import { user } from "./basic_mock";

describe("vi.fn() example", () => {
  it("should track calls of a mock function", () => {
    const mockFn = vi.fn();

    mockFn("Hello", "World");

    expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledWith("Hello", "World");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("vi.fn() with return value", () => {
  it("should return a specific value", () => {
    const mockFn = vi.fn(() => "Hello World");

    const result = mockFn();

    expect(result).toBe("Hello World");
    expect(mockFn).toHaveBeenCalledOnce();
  });
});

describe("Custom mock example", () => {
  it("should mock a sum function", () => {
    const mockFn = vi.fn((a, b) => a + b);
    // const res = mockFn(2, 3);

    expect(mockFn(2, 3)).toEqual(5);
    expect(mockFn).toBeCalled();
    expect(mockFn).toBeCalledWith(2, 3);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("vi.spyOn() example", () => {
  it("should spy on user.save()", () => {
    const spyFn = vi.spyOn(user, "save");

    const res = user.save("Golam Rabbani");

    expect(spyFn).toBeCalled();
    expect(spyFn).toBeCalledWith("Golam Rabbani");
    expect(spyFn).toHaveBeenCalledTimes(1);
    expect(res).toBe("Golam Rabbani saved");

    spyFn.mockRestore();
  });
});
