let javascriptLpSolver = require("javascript-lp-solver");

let solver = javascriptLpSolver,
  results,
  model = {
    optimize: "quantity",
    opType: "min",

    constraints: {
      dnd_A: {
        max: (6.6 * 120) / 100,
        min: (6.6 * 70) / 100,
      },
      dnd_B: {
        max: (1500 * 120) / 100,
        min: (1500 * 70) / 100,
      },
      dnd_C: {
        max: (0 * 120) / 100,
        min: (0 * 70) / 100,
      },
    },

    variables: {
      ZP1: { dnd_A: 3.3, quantity: 1 },
      ZP2: { dnd_A: 3, quantity: 1 },
      ZP3: { dnd_A: 5, quantity: 1 },
      VD3P1: { dnd_B: 780, quantity: 1 },
      VD3P2: { dnd_B: 2340, quantity: 1 },
      OMG3_1: { dnd_C: 750, quantity: 1 },
      OMG3_2: { dnd_C: 1400, quantity: 1 },
    },
    ints: {
      ZP1: 1,
      ZP2: 1,
      ZP3: 1,
      VD3P1: 1,
      VD3P2: 1,
      OMG3_1: 1,
      OMG3_2: 1,
    },
  };
results = solver.Solve(model);

console.log(results);
