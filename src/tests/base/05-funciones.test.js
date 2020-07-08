import { getUser, getUsuarioActivo } from '../../bases/05-funciones';

describe('Pruebas en 05-funciones.js', () => {
	test('Prueba de la funcion "getUser"', () => {
		const userTest = {
		  uid: 'ABC123',
		  username: 'El_Papi1502'
		}

		const user = getUser();

		expect(user).toEqual(userTest);
	});

	test('Prueba de la funcion "getUsuarioActivo"', () => {
		const nameTest = 'MrMagma';
	
		const userTest = {
			uid: 'ABC567',
			username: nameTest
		}

		const user = getUsuarioActivo(nameTest);

		expect(user).toEqual(userTest);
	});
});