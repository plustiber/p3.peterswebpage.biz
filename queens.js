/*	Determine when a given cell of the chess board has been clicked.
	Each square of the board is contained in its own <div> and uniquely
	identified with an id of the form '<row><col>'.
*/
$( "div" ).click(function() {
  var color = $( this ).css("background-color");
  var x = this.id;
  var y = this.className;
  alert( "The class of this square is " + y + " and the id is " + x + ".");
});

var board;				// Array representing chess board
var sizeOfBoard = 8;	// Number of rows and columns on the board

/* 	Initialize each cell of the multi-dimensional array to 0
	Each cell represents a square of the chess board.  If the
	cell has a queen on the square the array's value is 1
*/
function init_board(size) {
	board = new Array(size);
	for (row = 0; row < size; row++) {
		board[row] = new Array(size);
		for (col = 0; col < size; col++){
			board[row][col] = 0;
		}
	}
}

/*	Determine if a cell in the specified row contains a queen.
	Return true if no queen is present
*/
function isValidRow(row, size) {
	for (col = 0; col < size; col++) {
		if (board[row,icol] == 1)
			return false;
	}
	return true;
}

/*	Determine if a cell in the specified column contains a queen.
	Return true if no queen is present
*/
function isValidColumn(col, size) {
	for (row = 0; row < size; row++) {
		if (board[row,col] == 1)
			return false;
	}
	return true;
}

/*	Determine if a cell on either diagonal contains a queen.
	Return true if no queen is present
*/
function isValidDiagonal(row, col, size) {
	var irow, icol;

	irow = row;
	icol = col;
	while (irow < size && icol < size) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow++;
			icol++;
		}

	irow = row;
	icol = col;
	while (irow >= 0 && icol >= 0) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow--;
			icol--;
		}

	irow = row;
	icol = col;
	while (irow < size && icol >= 0) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow++;
			icol--;
		}

	irow = row;
	icol = col;
	while (irow >= 0 && icol < size) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow--;
			icol++;
		}

	return true;
}
