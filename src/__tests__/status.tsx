import { render, screen } from "@testing-library/react";
import Status from "../components/Status";

describe("Status()", () => {
  it("should render status after few ms", async () => {
    render(<Status status="success" />);

    const statusEl = await screen.findByTestId(
      "status",
      {},
      {
        timeout: 3000,
      }
    );

    expect(statusEl).toBeInTheDocument();
  });
});
