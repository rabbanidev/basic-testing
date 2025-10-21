import { render, screen } from "@testing-library/react";
import PrimaryButton from "../components/PrimaryButton";

describe("PrimaryButton()", () => {
  it("renders with default actionType", () => {
    render(<PrimaryButton />);
    const element = screen.getByText("Click to Add");
    expect(element).toBeInTheDocument();
  });

  it("renders with action type if provided", () => {
    const actionType = "Post";
    render(<PrimaryButton actionType={actionType} />);
    const element = screen.getByText(`Click to ${actionType}`);
    expect(element).toBeInTheDocument();
  });
});
