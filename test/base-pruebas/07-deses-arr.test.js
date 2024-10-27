const { retornaArreglo } = require("../../src/base-pruebas/07-deses-arr");

describe("Pruebas 07-deses-arr", () => {
  test("debe retornar un string y numero", () => {
    const [letters, numbers] = retornaArreglo();

    // expect(letters).toBe("ABC");
    // expect(numbers).toBe("123");

    expect(typeof numbers).toBe("number");
    expect(typeof letters).toBe("string");

    expect(letters).toEqual(expect.any(String));
  });
});
