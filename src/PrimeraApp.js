import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const PerimeraApp = ( {saludo, subtitulo } ) => {
	// Se debe de poner todo entre parentesis ya que el archivo es procesado por
	// babel y toma cada linea como una line de codigo.
	return (
		// Se usa fragment porque se debe retornar siempre un solo nodo
		<Fragment>
		{/*<pre>{ JSON.stringify(saludo,null,2) }</pre>*/}
		<h1>{ saludo }</h1>
			<p>{ subtitulo }</p>
		</Fragment>
	);
}

// Se usa para definir que parametos se esperan y de que tipo son, 
// estos no detienen el programa pero si lanzan errores en consola
PerimeraApp.propTypes = {
	saludo: PropTypes.string.isRequired
}

// Forma bonita de definir los valores por defecto de las propiedades
PerimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PerimeraApp;