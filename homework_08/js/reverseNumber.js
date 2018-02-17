function reverseNumber(x) {
	var reverseNum = Math.abs(x).toString().split("").reverse().join("");
	reverseNum = Number(reverseNum) * Math.sign(x);
	return reverseNum;
}