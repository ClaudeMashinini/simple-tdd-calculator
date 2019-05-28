function add() {
	let sum = 0;
	for (k = 0; k < arguments.length; k++){
		sum += arguments[k];
	}
	return sum;
}

function multiply() {
	let product = 1;
	for (k = 0; k < arguments.length; k++) {
		product *= arguments[k];
	}
	return product;
}

module.exports = {
add:add,
    multiply:multiply
};
