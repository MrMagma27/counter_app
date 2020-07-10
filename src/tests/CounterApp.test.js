import React from 'react';
import { shallow } from 'enzyme';

import CounterApp from '../CounterApp';

describe('Pruebas del componente <CounterApp/>', () => {
	
	let wrapper;

	beforeEach( ()=>{
		wrapper = shallow(<CounterApp/>);
	} );

	test('Se prueba que se rendere correctamente', () => {
		expect( wrapper ).toMatchSnapshot();
	});

	test('Se prueba que se establezca el prop "value"', () => {
		let value = 100;
		const wrapper = shallow(<CounterApp value={value}/>);
		const defaultValue = +wrapper.find('h2').text();
		expect( defaultValue ).toBe( value );
	});

	test('Probando el boton suma contador', () => {
		let valueDefault = 1;
		while (valueDefault <= 5) {
			const counterValue = +wrapper.find('h2').text();
			expect( counterValue ).toBe( valueDefault );
			wrapper.find('button').at(0).simulate('click');
			valueDefault++;
		}
		// Mostrar html del elemento buttonPlus.html();
	});

	test('Probando el boton resta contador', () => {
		let valueDefault = 1;
		while (valueDefault >= -4) {
			const counterValue = +wrapper.find('h2').text();
			expect( counterValue ).toBe( valueDefault );
			wrapper.find('button').at(2).simulate('click');
			valueDefault--;
		}
	});

	test('Probando el boton limpiar', () => {
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(0).simulate('click');
		wrapper.find('button').at(1).simulate('click');
		const counterValue = +wrapper.find('h2').text();
		expect( counterValue ).toBe( 1 );
	})
});