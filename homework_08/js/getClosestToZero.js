function getClosestToZero() {
	var closestNumber = arguments[0];
	for(var i = 0; i < arguments.length; i++) {
		if (Math.abs(closestNumber) > Math.abs(arguments[i])) {
			return closestNumber = arguments[i];
		}
	}
	return closestNumber;
}