import { render, screen } from "@testing-library/react";
import Users from "../components/Users";

const initialUsers: {
  id: string;
  name: string;
  title: string;
  role: "admin" | "user";
}[] = [
  { id: "1", name: "Golam Rabbani", title: "developer", role: "admin" },
  { id: "2", name: "Hasan", title: "developer", role: "user" },
];

describe("Users()", () => {
  it("should render users component", () => {
    render(<Users initialUsers={initialUsers} />);

    const element = screen.getByRole("textbox", {
      name: "Name:",
    });

    const headingElement = screen.getByRole("heading", {
      level: 1, // (1-h1, 2-h2, 3-h3, ..., 6-h6)
    });

    // const headingElement2 = screen.getByRole("heading", {
    //   level: 2, // (1-h1, 2-h2, 3-h3, ..., 6-h6)
    // });

    const headingTwoElements = screen.getAllByRole("heading", {
      level: 2,
    });

    // Conditional checks
    const adminRoleElement = screen.queryByRole("button", {
      name: "(Admin)",
    });
    const userRoleElement = screen.queryByRole("button", {
      name: "(User)",
    });

    expect(element).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(headingTwoElements.length).toBe(2);
    expect(headingTwoElements[0].textContent).toBe("User manage with form");

    for (const user of initialUsers) {
      if (user.role === "admin") {
        expect(adminRoleElement).toBeInTheDocument();
      } else {
        expect(userRoleElement).toBeInTheDocument();
      }
    }
  });
});
