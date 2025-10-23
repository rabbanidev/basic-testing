import { render, screen, within } from "@testing-library/react";
import Debug from "../components/Debug";

const users = [
  {
    id: "1",
    name: "Golam Rabbani",
    role: "admin",
  },
  {
    id: "2",
    name: "Hasan",
    role: "user",
  },
];

describe("Debug()", () => {
  it("should render debug component", () => {
    render(<Debug users={users} />);

    // screen.logTestingPlaygroundURL();

    const bodyElement = screen.getByTestId("debug_users_table_body");
    const rowElements = within(bodyElement).getAllByRole("row");

    expect(rowElements).toHaveLength(users.length);
  });
});
