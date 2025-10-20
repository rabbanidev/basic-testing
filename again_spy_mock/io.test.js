import { describe, it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import { saveTokenIntoFile } from "./io";

vi.mock("fs");
vi.mock("path");

describe("saveTokenIntoFile()", () => {
  it("should save token into file", () => {
    const token = "My token";
    const fileName = "token.txt";

    saveTokenIntoFile(token, fileName);
    expect(fs.writeFile).toBeCalledWith(fileName, token);

    // expect(saveTokenIntoFile(token, fileName)).resolves.toBeUndefined();
  });
});
