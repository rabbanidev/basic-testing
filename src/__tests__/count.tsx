import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Count from "../components/Count";

describe("Count()", () => {
  it("should render with initial count", () => {
    render(<Count />);
    const headingEl = screen.getByRole("heading", {
      level: 6,
    });

    expect(headingEl).toHaveTextContent("0");
  });

  it("should render with increment action", async () => {
    userEvent.setup();
    render(<Count />);

    const headingEl = screen.getByRole("heading", {
      level: 6,
    });
    const incBtn = screen.getByRole("button", { name: "Increment" });
    await userEvent.click(incBtn);

    expect(headingEl).toHaveTextContent("1");
  });

  it("should render with decrement action", async () => {
    userEvent.setup();
    render(<Count />);

    const headingEl = screen.getByRole("heading", {
      level: 6,
    });
    const incBtn = screen.getByRole("button", { name: "Increment" });
    const decBtn = screen.getByRole("button", { name: "Decrement" });

    await userEvent.click(incBtn); // count: 1
    await userEvent.click(incBtn); // count: 2
    await userEvent.click(decBtn); // count: 1

    expect(headingEl).toHaveTextContent("1");
  });

  it("should render with reset action", async () => {
    userEvent.setup();
    render(<Count />);

    const headingEl = screen.getByRole("heading", {
      level: 6,
    });
    const incBtn = screen.getByRole("button", { name: "Increment" });
    const resetBtn = screen.getByRole("button", { name: "Reset" });

    await userEvent.click(incBtn); // count:1
    await userEvent.click(incBtn); // count:2
    await userEvent.click(resetBtn); // count:0

    expect(headingEl).toHaveTextContent("0");
  });

  it("should render with should disable increment button when count reaches 10", async () => {
    userEvent.setup();
    render(<Count />);

    const incBtn = screen.getByRole("button", { name: "Increment" });

    for (let i = 0; i < 10; i++) {
      await userEvent.click(incBtn);
    }

    expect(incBtn).toBeDisabled();
  });

  it("should disable decrement button when count is 0", () => {
    userEvent.setup();
    render(<Count />);

    const decBtn = screen.getByRole("button", { name: "Decrement" });

    expect(decBtn).toBeDisabled();
  });
});
