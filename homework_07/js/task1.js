var numFloors = Number(prompt("Please enter natural number", "N = 0 - 20"));

if( !isNaN(numFloors) && numFloors > 0 && numFloors <= 20 && numFloors % 1 == 0) {
	var rows = 0;
	while (rows < numFloors) {
	    var space = "";
	    var block = "";
		    for (j = 0; j < numFloors - rows; j++) {
		    	space = space + "   ";
		    }
		    for (j = 0; j < 2 * rows + 1; j++) {
		    	block = block + "[~]";
			}
		var rowDone = space + block;
		console.log(rowDone+'\n');
		rows++; 
	}
} else {
	console.error("Incorrect!");
}