function decypherPhrase(obj, string) {
	var newObj = {};
	for (var prop in obj) {
		newObj[obj[prop]] = prop;
	}
	return cypherPhrase(newObj, string);
}