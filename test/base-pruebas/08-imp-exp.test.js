import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";
describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar hereo por ID", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    expect(heroe).toEqual({
      id: 1,
      name: "Batman",
      owner: "DC",
    });
  });

  test("getHeroeById debe retornar undefined si no existe el heroe", () => {
    const id = 100;
    const heroe = getHeroeById(id);

    expect(heroe).toBeUndefined();
  });

  test("getHeroesByOwner debe retornar los hereos de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(3);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });

  test("getHeroesByOwner debe retornar todos los hereos de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);

    expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
  });
});
