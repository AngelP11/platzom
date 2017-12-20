export default function platzom (str) {
	let translation = str

	//Regla 1: Si la palabra termina en "ar", se le quitan esos dos caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2) //El metodo "slice" sirve para cortar strings desde un punto de inicio hasta uno de final
	}

	//Regla 2: Si la palabra comienza con "z", se le debe agregar al final "pe"
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe'
	}

	//Regla 3: Si la palabra traducida tiene 10 o más caracateres, se debe partir por la mitad y unir las dos mitades con un guion medio
	if (translation.length >= 10) {
		const firstHalf = translation.slice(0, Math.round(translation.length / 2))
		const secondHalf = translation.slice(Math.round(translation.length / 2))

		translation = `${firstHalf}-${secondHalf}`
	}

	//Regla 4: Si la palabra original es un palindromo, ninguna de las reglas anteriores aplica, 
		     //y ademas, debera intercalar sus caracteres entre mayuscuas y minusculas
	const reverse = (str) => str.split('').reverse().join('')

	function mayMin (str) {
		const length = str.length
		let translation = ''
		let capitalize = true

		for (let i = 0; i <= length; i++) {
			let char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if (str == reverse(str)) {
		return mayMin(str)
	}

	return translation
}