import { render } from "@testing-library/react";
import { HelloWorldApp } from "../src/HelloWorldApp";

describe("Prueba en <HelloWorldApp>", () => {
  // test("debe de hacer match con el snapshot", () => {
  //   const title = "Hello World";
  //   const subtitle = "World of the world";

  //   const { container } = render(
  //     <HelloWorldApp title={title} subtitle={subtitle} />
  //   );

  //   expect(container).toMatchSnapshot();
  // });

  test("debe motrar el titulo en h1", () => {
    const title = "Hello World";
    const subtitle = "World of the world";

    const { container, getByText, getByTestId } = render(
      <HelloWorldApp title={title} subtitle={subtitle} />
    );

    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("debe motrar el subtitulo enviado en props", () => {
    const title = "Hello World";
    const subtitle = "World of the world";

    const { getByText } = render(
      <HelloWorldApp title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
