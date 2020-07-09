import { getHeroeById, getHeroesByOwner } from '../../bases/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas del archivo 08-imp-exp', () => {
	
	test('Probando la funcion "getHeroeById"', () => {
		const id = 1;
		const heroe = getHeroeById(id);
		const heroeData = heroes.find(h => h.id === id);
		expect( heroe ).toEqual(heroeData);
	});

	test('Probando la funcion "getHeroeById" con heroe no encontrado', () => {
		const id = 10;
		const heroe = getHeroeById( id );
		expect( heroe ).toBe( undefined );
	});

	test('Probando la funcion "getHeroesByOwner" buscando heroes DC', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner( owner );
		const heroesTest = heroes.filter((h) => h.owner === owner);
		expect( heroes ).toEqual( heroesTest );
	});

	test('Probando la funcion "getHeroesByOwner" buscando heroes Marvel', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner( owner );
		expect( heroes ).toHaveLength( 2 );
	});
});