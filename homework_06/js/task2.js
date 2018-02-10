var cashEuro = +prompt('Euro', '1,2,3,...,n');
var cashUsd = +prompt('USD', '1,2,3,...,n');
var exchangeEuro = 33.8565;
var exchangeUsd = 27.4609;

if(!isNaN(cashEuro) && !isNaN(cashUsd)) {
	if (cashEuro > 0 && cashUsd > 0) {
		var resultUahEuro = Math.round((cashEuro * exchangeEuro)*100)/100;
		var resultUahUsd = Math.round((cashUsd * exchangeUsd)*100)/100;
		var ratioEuroUsd = Math.round((exchangeEuro / exchangeUsd)*100)/100;

		console.log(cashEuro + ' euros are equal ' + resultUahEuro + ' UAH, ' + cashUsd + ' dollars are equal ' + resultUahUsd + ' UAH, one euro is equal ' + ratioEuroUsd + ' dollars.');
	} else {
		console.log('Incorrect data');
	}

} else {
	console.log('Incorrect data');
}