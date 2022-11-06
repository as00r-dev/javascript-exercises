const reverseString = function (stringToBeReversed) {
	let reversedString = "";
	for (let i = stringToBeReversed.length - 1; i > -1; i--) {
		reversedString = `${reversedString}${stringToBeReversed.charAt(i)}`;
	}
	return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
