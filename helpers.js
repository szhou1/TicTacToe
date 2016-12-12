var Helpers = function() {

  this.detectWin = function(x, y) {
    var win = false;
    const playerX = 'X';
    const playerO = 'O';

    // if(this.turnCount < this.board.length) {
    //   return false;
    // }
    console.log(this.turnCount, x, y, this.board[x][y])
    const target = this.board[x][y];
    // row
    

    return false;
  }

}

module.exports = new Helpers();