import { getImagen } from '../../bases/11-async-await';
describe('Pruebas del archivo 11-async-await', () => {
	test('Pruebas async-await de la funcion "getImagen" ', async () => {
		const url = await getImagen();
		expect( url.inclides('https://') ).toBe(true);
	});
});