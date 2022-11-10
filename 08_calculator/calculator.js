const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = function (array) {
	const sumArray = array.reduce((total, elem) => {
		return total + elem;
	}, 0);

	return sumArray;
};

const multiply = function (array) {
	const prodArray = array.reduce((prod, elem) => {
		return prod * elem;
	}, 1);

	return prodArray;
};

const power = function (base, exponent) {
	let answer = 1;
	for (let i = 0; i < exponent; i++) {
		answer *= base;
	}
	return answer;
};

const factorial = function (num) {
	let answer = 1;
	switch (num) {
		case 0:
		case 1:
			return answer;
		default:
			for (; num > 0; num--) {
				answer *= num;
			}
			return answer;
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
