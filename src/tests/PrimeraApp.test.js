import React from 'react';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';

describe('Pruebas del componente "PrimeraApp"', () => {
	test('Debe mostrar un saludo', () => {
		const saludo = 'Hola soy MrMagma';
		// const wrapper = render(<PrimeraApp saludo={saludo}/>);
		// const getByText = wrapper.getByText(saludo);
		// expect( getByText ).toBeInTheDocument();

		// o se puede desestructurar
		const { getByText } = render(<PrimeraApp saludo={saludo}/>);
		expect( getByText(saludo) ).toBeInTheDocument();
	});
});