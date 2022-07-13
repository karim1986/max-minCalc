var javascriptLpSolver = require("javascript-lp-solver");

var solver = javascriptLpSolver,
  results,
  model = {
    optimize: "quantity",
    opType: "max",

    constraints: {
      dnd: { max: (6.6 * 120) / 100 },
    },
    variables: {
      pills: { dnd: 3.3, quantity: 1 },
    },
    ints: { pills: 1 },
  };
results = solver.Solve(model);
console.log(results);
