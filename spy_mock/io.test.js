import { describe, expect, it, vi } from "vitest";
import { storeToken } from "./io";
import { promises as fs } from "fs";

vi.mock("fs");

vi.mock("path", () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

describe("storeToken()", () => {
  it("should write the token to the specified file", async () => {
    const token = "sample-token";
    const fileName = "token.txt";

    await storeToken(token, fileName);
    expect(fs.writeFile).toHaveBeenCalledWith(fileName, token);

    // expect(storeToken(token, fileName)).resolves.toBeUndefined();
  });
});
