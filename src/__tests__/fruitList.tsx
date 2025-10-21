import { screen, render } from "@testing-library/react";
import FruitList from "../components/FruitList";

describe('"FruitList()', () => {
  it("renders a list of fruits", () => {
    const fruits = ["Apple", "Banana", "Cherry", "Apple"];
    render(<FruitList fruits={fruits} />);

    const listElement = screen.getByRole("list");
    const listItemElements = screen.getAllByRole("listitem");

    const listAppleItems = screen.getAllByText("Apple");

    expect(listElement).toBeInTheDocument();
    expect(listItemElements).toHaveLength(fruits.length);
    expect(listItemElements[0]).toHaveTextContent("Apple");
    listAppleItems.map((item) => expect(item).toBeInTheDocument());
  });
});
