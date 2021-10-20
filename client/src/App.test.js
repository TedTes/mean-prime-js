import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";
import Form from "./Form.js";

afterEach(cleanup);

describe("to test input render", () => {
  test("render Number input", () => {
    render(<App />);
    const inputEl = screen.getByTestId("number-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "Number");
  });
});
describe("to test output median prime number(s) for different inputs", () => {
  let handleSubmit = "";
  beforeEach(() => {
    handleSubmit = jest.fn((e) => e.preventDefault());
  });
  test("to test a valid Number", async () => {
    render(<Form handleSubmit={handleSubmit} result={[7]} />);
    fireEvent.change(screen.getByTestId("number-input"), {
      target: { value: "18" },
    });
    fireEvent.click(screen.getByTestId("submit-btn"));
    expect(handleSubmit).toBeCalled();
    expect(screen.getByTestId("output-panel").innerHTML).toBe(
      "The median prime Number(s) = [7]"
    );
  });
  test("to test a Number less than two", async () => {
    render(
      <Form
        handleSubmit={handleSubmit}
        error={`The Input Number should be greater than one`}
      />
    );
    fireEvent.change(screen.getByTestId("number-input"), {
      target: { value: "-1" },
    });
    fireEvent.click(screen.getByTestId("submit-btn"));
    expect(handleSubmit).toBeCalled();
    expect(screen.getByTestId("output-panel").innerHTML).toBe(
      `The Input Number should be greater than one`
    );
  });
  test("to test a larger Number", async () => {
    render(
      <Form
        handleSubmit={handleSubmit}
        error={`The Number is too large , please try maximum 7 digits`}
      />
    );
    fireEvent.change(screen.getByTestId("number-input"), {
      target: { value: "123456789" },
    });
    fireEvent.click(screen.getByTestId("submit-btn"));
    expect(handleSubmit).toBeCalled();
    expect(screen.getByTestId("output-panel").innerHTML).toBe(
      `The Number is too large , please try maximum 7 digits`
    );
  });
});
