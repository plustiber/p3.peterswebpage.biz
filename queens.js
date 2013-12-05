var board;				// 2-D Array representing location of queens on the board
var sizeOfBoard = 8;	// Number of rows and columns on the board
var score; 				// Number of queens on the board

/*	Determine when a given cell of the chess board has been clicked.
	Each square of the board is contained in its own <div> and uniquely
	identified with an id of the form '<row><col>'.
*/
$( "div" ).click(function() {
  var row = parseInt(this.id.charAt(0)) - 1;
  var col = parseInt(this.id.charAt(1)) - 1;

  if (this.innerHTML != '') {
  	board[row][col] = 0;
  	score--;
  	this.innerHTML = '';
  } 
  else if (isValidSquare(row, col, sizeOfBoard)) {
  	board[row][col] = 1;
  	score++;
  	this.innerHTML = "<img src='queen.png' alt='queen' class='queen'>";
  }
  updateScore();
})

function updateScore() {
//	$('#score').textContent = 'Score: ' + score;
	if (score == 8)
		document.getElementById('score').textContent = 'Congratulations You Won!!';
	else
		document.getElementById('score').textContent = 'Score: ' + score;
}

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

/*	Determine if a cell on either diagonal contains a queen.
	Return true if no queen is present.
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

init_board(sizeOfBoard);
