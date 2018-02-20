function collectIds(arr) {
	var newArr = getFilteredArray(arr, function(element) {
		return element['rating'] > 3;
	});
	return getTransformedArray(newArr, function(element) {
		return element['id'];
	});
}