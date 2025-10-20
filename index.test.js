import { describe, it, expect, vi } from "vitest";
import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";
import { render } from "./index";

// Load html file
const filePath = path.join(__dirname, "index.html");
const htmlContent = fs.readFileSync(filePath, "utf-8");

// Createing virtual dom
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Stubbing global document with the custom dom
vi.stubGlobal("document", document);

describe("DOM Testing", () => {
  it("should render the child div inside the app container", () => {
    render();

    const appContainer = document.getElementById("app");
    const firtElement = appContainer.firstChild;

    // expect(firtElement).not.toBeNull();
    expect(firtElement.textContent).toBe("Testing with DOM");
  });
});
