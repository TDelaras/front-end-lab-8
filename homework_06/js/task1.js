
var a = +prompt('Enter side one', '1,2,3,...,n');
var b = +prompt('Enter me side two', '1,2,3,...,n');
var c = +prompt('Enter me side three', '1,2,3,...,n');
var triangleType;
var aSquare = a * a;
var bSquare = b * b;
var cSquare = c * c;

if(!isNaN(a) && !isNaN(b) && !isNaN(c)) {//перевірка чи всі значення є числами
	if (a > 0 && b > 0 && c > 0) {//перевірка чи ці значення є більшими за 0
		if ((a+b) > c && (c+b) > a && (a+c) > b) {//перевірка чи трикутник існує
			if ((aSquare == bSquare + cSquare) || (bSquare == aSquare + cSquare) || (cSquare == aSquare + bSquare)) {
				triangleType = 'right triangle';
			} else if (a == b && a == c) {
				triangleType = 'equilateral';
			} else {
				if (a == b || a == c || b == c) {
					triangleType = 'isosceles';
				} else {
					triangleType = 'scalene';
				}
			}
			
			var p = (a+b+c) / 2;
			var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

			console.log('Type of triangle is ' + triangleType + ' and square is ' + Math.round(s*100)/100);
				
		} else {
			console.log('Incorrect data');
		}
	} else {
		console.log('Incorrect data');
	}

} else {
	console.log('Incorrect data');
}