import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Purebas en 05-funciones', () => {

    test('getUser Debe de retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(userTest).toEqual(user);

    });

    test('getUsuarioActivo debe de retornar un objeto', () => { 

        const userTest = {
            uid: 'ABC567',
            username: 'Esteban'
        };

        const user = getUsuarioActivo(userTest.username);

        expect(userTest).toEqual(user);
        
     });

})