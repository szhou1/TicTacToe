var Helpers = function() {

  this.detectWin = function(x, y) {
    var win = false;

    // if(this.turnCount < this.board.length) {
    //   return false;
    // }
    // console.log(this.turnCount, x, y, this.board[x][y])
    const target = this.board[x][y];
    // row
    var r = this.board[x].every(item => item === target); 
    // console.log('win by row', r);
    var c = this.board.every(item => item[y] === target);
    // console.log('win by column', c);
    var dmajor = this.board.every((item, i) => item[i] === target)
    // console.log('win by dmajor', dmajor);
    var dminor = this.board.every((item, i) => item[this.board.length-1-i] === target);
    // console.log('win by dminor', dminor);

    if(r || c || dmajor || dminor) {
      return true;
    }

    return false;
  }

}

module.exports = new Helpers();