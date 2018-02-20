function getFilteredArray(array, myFunction) {
	var newArray = [];
	forEach(array, function(element) {
		if (myFunction(element)) {
			newArray.push(element);	
		}	
	});
	return newArray;
}