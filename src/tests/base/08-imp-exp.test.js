import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Héroes', () => {

    test('Debe de retornar un Héreo por ID', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(item => item.id === id);

        expect(heroe).toEqual(heroeData);

    });

    test('Debe de retornar undefined si un Héreo no existe', () => {

        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('Debe de retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        const heroesArray = heroes.filter(item => item.owner === owner);

        expect(heroesArray).toEqual(heroesArray);

    });

    test('Debe de retornar un arreglo con los héroes de MARVEL', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        
        expect(heroes.length).toBe(2);

    });

})