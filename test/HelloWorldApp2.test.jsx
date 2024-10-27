import { render, screen } from "@testing-library/react";
import { HelloWorldApp } from "../src/HelloWorldApp";

describe("Prueba en <HelloWorldApp>", () => {
  const title = "Hello World";
  const subtitle = "World of the world";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(
      <HelloWorldApp title={title} subtitle={subtitle} />
    );

    expect(container).toMatchSnapshot();
  });

  test("debe motrar el titulo Hello World", () => {
    render(<HelloWorldApp title={title} subtitle={subtitle} />);

    expect(screen.getByText(title)).toBeTruthy();
  });

  test("debe motrar el titulo en h1", () => {
    render(<HelloWorldApp title={title} subtitle={subtitle} />);

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("debe motrar el subtitulo enviado en props", () => {
    render(<HelloWorldApp title={title} subtitle={subtitle} />);

    expect(screen.getByText(subtitle)).toBeTruthy();
  });
});
