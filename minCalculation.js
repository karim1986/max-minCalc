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

//according to table two we can find out how much mg our body absorbed to find the right dose
// ex: pill : 22mg
// absorbation 15%

// calculation :
// zinc => 22 * 15 / 100 = 3.3mg
// zinc => 30 * 10 / 100 = 3mg
// zinc => 22 * 15 / 100 = 5mg
//vitamine D3 => 1000 * 78 / 100 = 780 iu
//vitamine D3 => 3000 * 78 / 100 = 2340 iu
//omega-3 => 750 * 100% / 100 = 750mg
//omega-3 => 1400 * 100% / 100 = 1400mg
