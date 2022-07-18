let javascriptLpSolver = require("javascript-lp-solver");

let solver = javascriptLpSolver,
  results,
  model = {
    optimize: "quantity",
    opType: "min",

    constraints: {
      dndRange: { max: (6.6 * 120) / 100, min: (6.6 * 70) / 100 },
    },

    variables: {
      pillOne: { dndRange: 1, quantity: 1 },
      pillTwo: { dndRange: 4, quantity: 1 },
      pillThree: { dndRange: 10, quantity: 1 },
    },
    ints: { pillOne: 1, pillTwo: 1, pillThree: 1 },
  };
results = solver.Solve(model);
console.log(results);
