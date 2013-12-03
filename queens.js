$( "div" ).click(function() {
  var color = $( this ).css("background-color");
  var x = this.id;
  var y = this.className;
  alert( "The class of this square is " + y + " and the id is " + x + ".");
});

var board;
var sizeOfBoard = 8;

function init_board(size) {
	board = new Array(size);
	for (row = 0; row < size; row++) {
		board[row] = new Array(size);
		for (col = 0; col < size; col++){
			board[row][col] = 0;
		}
	}
}

function isValidRow(row, size) {
	for (col = 0; col < size; col++) {
		if (board[row,icol] == 1)
			return false;
	}
	return true;
}

function isValidColumn(col, size) {
	for (row = 0; row < size; row++) {
		if (board[row,col] == 1)
			return false;
	}
	return true;
}
