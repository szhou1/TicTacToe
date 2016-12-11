var Game = function() {

  // this.board = [];
  this.board = [['_', '_', '_'], 
                ['_', '_', '_'], 
                ['_', '_', '_']];

  this.turnCount = 0;

  this.start = function() {
    console.log('start game');
  }

  this.end = function() {
    console.log('end game');
  }


  // this.generateBoard = function() {
  // }

  this.boardToString = function() {
    console.log('boardToString', this.board)
    var boardString = '  0 1 2\n';
    for( var i = 0; i < 3; i++) {
     boardString = boardString + i + " " + 
            this.board[i][0] + " " + 
            this.board[i][1] + " " + 
            this.board[i][2];
     boardString += '\n'; 
    }

    return boardString;
  }

  this.submitMove = function(x, y) {
    console.log(x, y)
    if(x<0 || x>2 || y<0 || y>2 || isNaN(x) || isNaN(y)) {
      console.error('Please enter X Y between 0 and 2');
      return;
    }
    this.board[x][y] = 'X';
  }
};

module.exports = new Game();