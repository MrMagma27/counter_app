import { retornaArreglo } from '../../bases/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
	test('Probando la funcion "retornaArreglo"', () => {
		let [letras, numeros] = retornaArreglo();
		expect(letras).toBe('ABC');
		expect(typeof letras).toBe('string');
		expect(numeros).toBe(123);
		expect(typeof numeros).toBe('number');

		// expect(arr).toEquals(['ABC', 123]);
	});
});