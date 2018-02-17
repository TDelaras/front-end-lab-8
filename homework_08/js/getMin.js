function getMin() {
	if (arguments.length === 0) {
		return undefined;
	} else {
		var array = [];
		for(var i = 0; i < arguments.length; i++) {
			array[i] = arguments[i];
		}
		return Math.min.apply(null, array);
	}
}