var Game = require('./game.js');
var stdin = process.openStdin();

// console.log(Game);
// console.log(Game.board);
Game.start();
console.log(Game.boardToString());


stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    // console.log("you entered: [" + d.toString().trim() + "]");

    var pos = d.toString().split(' ');
    // console.log('x', pos[0], 'y', pos[1]);
    Game.submitMove(parseInt(pos[0]), parseInt(pos[1]));
    console.log(Game.boardToString());

  });