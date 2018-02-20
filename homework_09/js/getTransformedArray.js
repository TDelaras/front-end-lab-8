function getTransformedArray(array, myFunction) {
	var newArray = [];
	forEach(array, function(element) {
		newArray.push(myFunction(element));
	});
	return newArray;
}