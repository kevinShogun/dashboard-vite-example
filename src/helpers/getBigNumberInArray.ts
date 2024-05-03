// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBigNumberInArray = (array: any): number  => {
	// obten el mayor numero de un array cuya propiedad sea un numero y el arreglo luce asi [ {"name": "El progreso","value": 800},]
	let bigNumber = 0;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	array.forEach((element: any) => {
		if (element.value > bigNumber) {
			bigNumber = element.value;
		}
	});

	return bigNumber;
};
