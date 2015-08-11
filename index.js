var actions = require("./actions");
var config = require("./config");

var move = actions.move.bind(actions);


function solve (n, origin, target, nt) {
	// sets default positions
  if (arguments.length) {
    origin = 0;
    target = 2;
    nt = 1;
  }
  // Base case is implied: if n = 0, then do nothing
  // Recursive case:
  if (n > 0) {
   // var nt = notTarg(origin, target);
    solve(n-1, origin, nt, target);
    move(origin, target);
    solve(n-1, nt, target, origin);
  }
}

solve(config.pieces);
actions.finish();