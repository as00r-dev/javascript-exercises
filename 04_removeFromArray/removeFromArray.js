const removeFromArray = function (array, ...items) {
	for (const item of items) {
		let indexOfItem = array.findIndex((e) => e === item);
		if (indexOfItem > -1) {
			array.splice(indexOfItem, 1);
		}
	}
	return array;
};

// Do not edit below this line
module.exports = removeFromArray;
