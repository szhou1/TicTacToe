var Helpers = require('./helpers.js');

var Game = function() {

  this.board = [['_', '_', '_'], 
                ['_', '_', '_'], 
                ['_', '_', '_']];

  this.player = 'X';
  this.turnCount = 1;

  this.start = function() {
    console.log('start game');
  }

  this.end = function() {
    console.log('Player', this.player, 'is the winner!');
  }

  this.changeTurn = function() {
    if(this.player === 'X') {
      this.player = 'O';
    } else {
      this.player = 'X';
    }
    this.turnCount++;
  }

  this.boardToString = function() {
    // console.log('boardToString', this.board)
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
    // console.log(x, y)
    if(x<0 || x>2 || y<0 || y>2 || isNaN(x) || isNaN(y)) {
      console.error('Please enter X Y between 0 and 2');
      return;
    }
    this.board[x][y] = this.player;

    if(Helpers.detectWin.call(this, x, y)) {
      this.end();
    }
    this.changeTurn();
  }

};

module.exports = new Game();