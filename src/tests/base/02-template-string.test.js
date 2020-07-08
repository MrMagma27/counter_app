
import { getSaludo } from '../../bases/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
	// Prueba de la funcion pasando un argumento
	test('Prueba de metodo "getSaludo" con argumento', () => {
		const nombre = 'MrMagma';
		
		let saludo = getSaludo(nombre);

		expect(saludo).toBe('Hola ' + nombre);
	
	});

	// Prueba de la funcion sin pasar argumentos
	test('Prueba de metodo "getSaludo" si argumento', () => {
		let saludo = getSaludo();

		expect(saludo).toBe('Hola Usuario');
	
	});
});