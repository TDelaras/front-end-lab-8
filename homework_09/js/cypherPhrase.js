function cypherPhrase(obj, string) {
	var newArr = getTransformedArray(string, function(element) {
		return obj[element] || element;
	});
	return newArr.join('');
}