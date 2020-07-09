import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas del componente "PrimeraApp"', () => {
	test('Debe mostrar el componente <PrimeraApp/> correctamente', () => {
		const saludo = 'Hola MrMagma!!';
		const wrapper = shallow(<PrimeraApp saludo = { saludo }/>);
		expect( wrapper ).toMatchSnapshot();
	});

	test('Componente debe contener una prop "subtitulo"', () => {
		const saludo = 'Hola MrMagma!!';
		const subtitulo = 'Soy un subtitulo';
		const wrapper = shallow(
			<PrimeraApp
				saludo = { saludo }
				subtitulo = { subtitulo }
			/>
		);

		// El metodo funciona igual a document.querySelector();
		const textoParrafo = wrapper.find('p').text();
		expect( textoParrafo ).toBe( subtitulo );
	})
});