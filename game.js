var Game = function() {

  // this.board = [];
  this.board = [['_', '_', '_'], 
                ['_', '_', '_'], 
                ['_', '_', '_']];

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
    // console.log('subbmited', typeof x, x, typeof y, y)
    // console.log('row', this.board[x]);
    // console.log('item', this.board[x][y]);
    this.board[x][y] = 'X';
    // console.log(this.board);
  }
};

module.exports = new Game();