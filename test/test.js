const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
	it('Si la palabra termina en "ar", se le quitan esos dos caracteres.', () => {
		const translation = platzom('Programar')
		expect(translation).to.equal('Program')
	})

	it('Si la palabra comienza con "z", se le debe agregar al final "pe".', () => {
		const translation = platzom('Zorro')
		expect(translation).to.equal('Zorrope')
	})

	it('Si la palabra traducida tiene 10 o más caracateres, se debe partir por la mitad y unir las dos mitades con un guion medio.', () => {
		const translation = platzom('abecedario')
		expect(translation).to.equal('abece-dario')
	})

	it('Si la palabra original es un palindromo, ninguna de las reglas anteriores aplica, y ademas, debera intercalar sus caracteres entre mayusculas y minusculas.', () => {
		const translation = platzom('sometemos')
		expect(translation).to.equal('SoMeTeMoS')
	})
})