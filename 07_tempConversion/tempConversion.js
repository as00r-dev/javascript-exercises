const ftoc = function (tempInF) {
	const tempInC = (tempInF - 32) * (5 / 9);
	return +tempInC.toFixed(1);
};

const ctof = function (tempInC) {
	const tempInF = tempInC * (9 / 5) + 32;
	return +tempInF.toFixed(1);
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};
