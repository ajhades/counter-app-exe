import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas a <CounterApp />", () => {
  const initialValue = 100;
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar valor inicial de 100", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe incrementar el boton +1", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText("Increment +1"));

    expect(screen.getByText("101")).toBeTruthy();
  });

  test("debe substraer el boton -1", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText("Substract -1"));

    expect(screen.getByText("99")).toBeTruthy();
  });

  test("debe resetear el valor", () => {
    render(<CounterApp value={initialValue} />);

    fireEvent.click(screen.getByText("Substract -1"));
    fireEvent.click(screen.getByText("Substract -1"));

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
