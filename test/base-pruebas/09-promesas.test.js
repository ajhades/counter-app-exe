import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe de retornar un hereo", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync debe de retornar un error si el hereo no existe", (done) => {
    const id = 100;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeUndefined();
        done();
      })
      .catch((error) => {
        console.log(error);
        expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
        done();
      });
  });
});
