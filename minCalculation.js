var javascriptLpSolver = require("javascript-lp-solver");

var solver = javascriptLpSolver,
  results,
  model = {
    optimize: "quantity",
    opType: "min",

    constraints: {
      dnd: { min: (14 * 70) / 100 },
    },
    variables: {
      pills: { dnd: 3.3, quantity: 1 },
    },
    ints: { pills: 1 },
  };
results = solver.Solve(model);
console.log(results);
