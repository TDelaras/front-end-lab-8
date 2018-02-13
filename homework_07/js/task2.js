var startGame = confirm('Do you want to play a game?');
do {
	if(startGame) {
	 	//declare the initial variables
	 	var rangeNumber = 5;
	 	var randomNumber = Math.round(Math.random() * rangeNumber);
	 	var totalPrize = 0;
	 	var maxPossiblePrize = 10;
	 	var possiblePrize = maxPossiblePrize;
	 	//Level 1 attempts
	 	for (var i = 3; i > 0; i--) {
	 		var userNumber = Number(prompt('Enter a number from 0 to ' + rangeNumber + '\nAttempts left: ' + i + '\nTotal prize: ' + totalPrize + '$'+ '\nPossible prize on current attempt: ' + possiblePrize + '$'));
	 		if (userNumber == randomNumber) {
	 			totalPrize = possiblePrize;
	 			//if the game continues
	 			do {
		 			var countinueGame = confirm('Do you want to continue a game?');
		 			if(countinueGame) {
		 				//declare the new variables
		 				rangeNumber = rangeNumber * 2;
		 				randomNumber = Math.round(Math.random() * rangeNumber);
		 				maxPossiblePrize = maxPossiblePrize *3;
		 				possiblePrize = maxPossiblePrize;
		 				for (var j = 3; j > 0; j--) {//Next levels attempts
		 					var userNumber = Number(prompt('Enter a number from 0 to ' + rangeNumber + '\nAttempts left: ' + j + '\nTotal prize: ' + totalPrize + '$'+ '\nPossible prize on current attempt: ' + possiblePrize + '$'));
		 					if (userNumber == randomNumber) {
		 						totalPrize = totalPrize + possiblePrize;
		 						break;
		 					}
		 					possiblePrize = Math.floor(possiblePrize/2);
		 				}
	 				} 
	 			} while (userNumber == randomNumber && countinueGame);
	 			break;
	 		}
	 		possiblePrize = Math.floor(possiblePrize/2);
	 	}
	 	console.log('Thank you for a game. Your prize is: ' + totalPrize + '$');
	 	var playAgain = confirm('Do you want to play again?');
	} else {
	 	console.log('You did not become a millionaire');
	}
} while (playAgain);