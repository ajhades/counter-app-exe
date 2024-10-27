test("Esta prueba no debe fallar", () => {
  const message = "Esta prueba no debe fallar";

  const message2 = message.trim();
  expect(message2).toBe(message);
});
