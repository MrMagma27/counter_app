import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas del componente "PrimeraApp"', () => {
	test('Debe mostrar el componente <PrimeraApp/> correctamente', () => {
		const saludo = 'Hola MrMagma!!';
		const wrapper = shallow(<PrimeraApp saludo = { saludo }/>);
		expect( wrapper ).toMatchSnapshot();
	});
});