/**************************************************
Peter Lustiber
CSCI E-15 Dynamic Web Applications
Project 3
December 6, 2013 
**************************************************/

var board;				// 2-D Array representing location of queens on the board
var sizeOfBoard = 8;	// Number of rows and columns on the board
var score; 				// Number of queens currently on the board

/*	Determine when a given square of the chess board has been clicked.
	If a "valid" square has been clicked and no queen is present, place a
	queen on the square.  Each square of the board is contained in its own
	<div> and uniquely identified with an id of the form '<row><col>'.
*/
$( "div" ).click(function() {

	// Get the row and column from the div id
	var row = parseInt(this.id.charAt(0)) - 1;
	var col = parseInt(this.id.charAt(1)) - 1;

	// If the square has a queen, remove it from array, decrement score and clear <div>
	if (this.innerHTML != '') {
		board[row][col] = 0;
		score--;
		this.innerHTML = '';
	} 
	//Otherwise, see if it is a valid square and set array cell, increment score and display queen
	else if (isValidSquare(row, col, sizeOfBoard)) {
		board[row][col] = 1;
		score++;
		this.innerHTML = "<img src='queen.png' alt='queen' class='queen'>";
	}

	// Update the score
	updateScore();
})

/* 	Initialize each cell of the multi-dimensional array to 0
	Each cell represents a square of the chess board.  If the
	cell has a queen on the square the array's value is 1.
*/
function init_board(size) {
	board = new Array(size);
	for (row = 0; row < size; row++) {
		board[row] = new Array(size);
		for (col = 0; col < size; col++){
			board[row][col] = 0;
		}
	}
	score = 0;
}

function clear_board(size) {
	var id;

	for (row = 0; row < size; row++) {
		for (col = 0; col < size; col++){
			board[row][col] = 0;
			id = (10*(row+1) + (col+1)).toString();
			document.getElementById(id).innerHTML = '';
		}
	}
	score = 0;
}

/*	Update the score on the page */

function updateScore() {
	// If there are 8 queens, you win!
	if (score == 8)
		$('#score').text("Congratulations You Won!");
	//Otherwise, display score (0 - 7)
	else
		$('#score').text("Score: " + score);
}

/*  Double click anywhere on the chess board will reset the
	board and initialize the score to 0
*/
$( "div" ).dblclick(function() {
	clear_board(sizeOfBoard);
	updateScore();
})

/*	Determine if a cell in the specified row contains a queen.
	Return true if no queen is present.
*/
function isValidRow(row, size) {
	for (col = 0; col < size; col++) {
		if (board[row][col] == 1)
			return false;
	}
	return true;
}

/*	Determine if a cell in the specified column contains a queen.
	Return true if no queen is present.
*/
function isValidColumn(col, size) {
	for (row = 0; row < size; row++) {
		if (board[row][col] == 1)
			return false;
	}
	return true;
}

/*	Determine if a cell on one of the four diagonal elements contain a queen.
	Return true if no queen is present, otherwise return false.
*/
function isValidDiagonal(row, col, size) {
	var irow, icol;

	// Check quadrant I (upper right)to see if a queen is present
	// If a queen is found, return false
	irow = row;
	icol = col;
	while (irow < size && icol < size) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow++;
			icol++;
		}

	// Otherwise continue checking quadrant II (upper left) for a queen
	// If a queen is found, return false
	irow = row;
	icol = col;
	while (irow < size && icol >= 0) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow++;
			icol--;
		}

	// Otherwise continue checking quadrant III (lower left) for a queen
	// If a queen is found, return false
	irow = row;
	icol = col;
	while (irow >= 0 && icol >= 0) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow--;
			icol--;
		}

	// Finally, check quadrant IV (lower right) for a queen
	// If a queen is found, return false
	irow = row;
	icol = col;
	while (irow >= 0 && icol < size) 
		if (board[irow][icol] == 1)
			return false;
		else {
			irow--;
			icol++;
		}

	// If no queen is found on any of the four diagonal elemets, return true
	return true;
}

/*	Determine if the specified cell is a valid square to place queen.
	The cell must have no other queen in its row, column or diagonal.
	Return true if no other queen is present.
*/
function isValidSquare(row, col, size) {
	if (isValidRow(row, size) && isValidColumn(col, size) && isValidDiagonal(row, col, size) )
		return true;
	else
		return false;
}

// Start the game by initializing the board and begin listening for a square to be clicked
init_board(sizeOfBoard);
