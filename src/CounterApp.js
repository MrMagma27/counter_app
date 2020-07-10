import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 1 }) => {

	const [counter, setCounter] = useState(value);

	const handlePlus = () => {
		// Forma tradicional
		setCounter(counter + value);
		// Forma por si no se tiene el state
		// setCounter(( c )=> c + value);
	}
	const handleMinus = () => setCounter(counter - value);
	const handleClear = () => setCounter(value);

	return (
		<Fragment>
			<h1>CounterApp</h1>
			<h2>{ counter }</h2>
			<button onClick={ handlePlus }>+{ value }</button>
			<button onClick={ handleClear }>Clear</button>
			<button onClick={ handleMinus }>-{ value }</button>
		</Fragment>
	);
}

CounterApp.propTypes = {
	value: PropTypes.number
}

export default CounterApp;