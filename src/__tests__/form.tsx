import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";

describe("Form()", () => {
  it("should render input change correclty", async () => {
    userEvent.setup();
    render(
      <Form
        onSubmit={(data) => {
          console.log(data);
        }}
      />
    );

    const inputEl = screen.getByRole("textbox");
    const headingEl = screen.getByRole("heading", { level: 6 });

    const inputText = "hello";

    await userEvent.type(inputEl, inputText);

    expect(headingEl).toHaveTextContent(`Value: ${inputText}`);
  });

  it("should render form submit correclty", async () => {
    userEvent.setup();

    const submitFn = vi.fn();

    render(<Form onSubmit={submitFn} />);

    const inputText = "hello";

    const inputEl = screen.getByRole("textbox");
    const submitBtn = screen.getByRole("button", { name: "Submit" });

    await userEvent.type(inputEl, inputText);
    expect(inputEl).toHaveValue(inputText);

    await userEvent.click(submitBtn);

    // Reset after form submitiing
    await userEvent.clear(inputEl);

    expect(inputEl).toHaveValue("");
    expect(submitFn).toBeCalled();
    expect(submitFn).toBeCalledWith(inputText);
    expect(submitFn).toBeCalledTimes(1);
  });
});
