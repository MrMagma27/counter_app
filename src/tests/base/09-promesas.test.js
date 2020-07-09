import { getHeroeByIdAsync } from '../../bases/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas con el archivo 09-promesas', () => {

	test('Prueba con la funcion "getHeroeByIdAsync"', ( done ) => {
		const heroeId = 1;
		getHeroeByIdAsync(heroeId)
			.then(heroe => {
				expect( heroe ).toBe( heroes[0] );
				done();
			});
	});
	
	test('Prueba con la funcion "getHeroeByIdAsync" con heroe no encontrado', ( done ) => {
		const heroeId = 10;
		getHeroeByIdAsync(heroeId)
			.catch(error => {
				expect(error).toBe('No se pudo encontrar el héroe');
				done();
			});
	});
})