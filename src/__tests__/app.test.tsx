import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render learning text", () => {
    render(<App />);

    const element = screen.getByText(/I am learning testing./i);
    expect(element).toBeInTheDocument();
  });
});
