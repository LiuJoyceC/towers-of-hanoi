var actions = require("./actions");
var config = require("./config");

var move = actions.move.bind(actions);


function solve (n, origin, target, nt) {
  console.log('n: '+n+' origin: '+origin+" target: "+target);
  if (n > 0) {
   // var nt = notTarg(origin, target);
    solve(n-1, origin, nt, target);
    move(origin, target);
    solve(n-1, nt, target, origin);
  }
}

solve(config.pieces, 0, 2, 1); //n === 3
actions.finish();