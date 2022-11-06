const sumAll = function (start, end) {
	if (
		typeof start != "number" ||
		typeof end != "number" ||
		start < 0 ||
		end < 0
	) {
		return "ERROR";
	}

	if (start > end) {
		[start, end] = [end, start];
	}

	const sumFromOneToEnd = (end * (end + 1)) / 2;
	const sumFromOneToStart = (start * (start + 1)) / 2;

	return sumFromOneToEnd - sumFromOneToStart + 1;
};

// Do not edit below this line
module.exports = sumAll;
