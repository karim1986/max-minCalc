let javascriptLpSolver = require("javascript-lp-solver");

let solver = javascriptLpSolver,
  results,
  model = {
    optimize: "quantity",
    opType: "min",

    constraints: {
      dndRangeA: {
        max: (6.6 * 120) / 100,
        min: (6.6 * 70) / 100,
      },
      dndRangeB: {
        max: (1500 * 120) / 100,
        min: (1500 * 70) / 100,
      },
      dndRangeC: {
        max: (0 * 120) / 100,
        min: (0 * 70) / 100,
      },
    },

    variables: {
      ZincpillOne: { dndRangeA: 3.3, quantity: 1 },
      ZincpillTwo: { dndRangeA: 3, quantity: 1 },
      ZincpillThree: { dndRangeA: 5, quantity: 1 },
      vitaminD3pillOne: { dndRangeB: 780, quantity: 1 },
      vitaminD3pillTwo: { dndRangeB: 2340, quantity: 1 },
      omega3pillOne: { dndRangeC: 750, quantity: 1 },
      omega3pillTwo: { dndRangeC: 1400, quantity: 1 },
    },
    ints: {
      ZincpillOne: 1,
      ZincpillTwo: 1,
      ZincpillThree: 1,
      vitaminD3pillOne: 1,
      vitaminD3pillTwo: 1,
      omega3pillOne: 1,
      omega3pillTwo: 1,
    },
  };
results = solver.Solve(model);

console.log(results);
