test('Primera prueba', () => {
	const isActive = false;
	if (!isActive) {
		throw new Error('La variable no esta activa');
	}
});