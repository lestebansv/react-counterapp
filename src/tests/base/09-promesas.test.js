import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe async', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)
            .then(hereo => {

                expect(hereo).toBe(heroes[0]);
                done();
            });

    });

    test('debe de retornar un error si el héroe por id no existe', (done) => {

        const id = 10;
        getHeroeByIdAsync(id)
            .catch(err => {
                expect(err).toBe('No se pudo encontrar el héroe');
                done();
            });

    });

})