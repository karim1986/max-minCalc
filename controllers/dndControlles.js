const asyncHandler = require("express-async-handler");
let javascriptLpSolver = require("javascript-lp-solver");
const Dnd = require("../models/DndModel");
const inventory = require("../data/dnd.json");
const element = inventory.find((element) => element.micronutrientCatalog);
const m = element.micronutrientCatalog[0];
const z = m.zinc.map((m) => (m.pill * m.absorption) / 100);
console.log(element);

//@desc     Get all DND
//@route    Get /api/dnd
//access    Public
const getAllDnd = asyncHandler(async (req, res) => {
  const dnds = await Dnd.find(req.query);

  res.status(200).json({ success: true, count: dnds.length, data: dnds });
});

//@desc     Get single DND
//@route    Get /api/dnd/:id
//access    Public
const getSingleDnd = asyncHandler(async (req, res) => {
  const dnd = await Dnd.findById(req.params.id);

  if (!dnd) {
    res.status(400);
    throw new Error(`DND not found with id of ${req.params.id}`);
  }

  res.status(200).json({ success: true, data: dnd });
});

//@desc     Get all DND
//@route    Post /api/dnd
//access    Privat
const createDnd = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error(`please add fields`);
  }

  const dnd = await Dnd.create(req.body);
  console.log(dnd);
  const elements = dnd.dnd.map((element) => element);

  let solver = javascriptLpSolver,
    results,
    model = {
      optimize: "quantity",
      opType: "min",

      constraints: {
        dndRangeA: {
          max: (elements[0]["zinc"] * 120) / 100,
          min: (elements[0]["zinc"] * 70) / 100,
        },
        dndRangeB: {
          max: (elements[1]["vitamin D3"] * 120) / 100,
          min: (elements[1]["vitamin D3"] * 70) / 100,
        },
        dndRangeC: {
          max: (elements[2]["omega-3"] * 120) / 100,
          min: (elements[2]["omega-3"] * 70) / 100,
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

  res.status(201).json({ success: true, data: dnd, pnd: [results] });
});

//@desc     Get all DND
//@route    Put /api/dnd/:id
//access    Public
const updateDnd = asyncHandler(async (req, res) => {
  const dnd = await Dnd.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!dnd) {
    res.status(400);
    throw new Error(`DND not found`);
  }

  res.json(dnd);
});

//@desc     Get all DND
//@route    Delete /api/dnd
//access    Public
const deleteDnd = asyncHandler(async (req, res) => {
  const dnd = await Dnd.findById(req.params.id);

  if (!dnd) {
    res.status(400);
    throw new Error(`DND not found`);
  }

  await dnd.remove();
  res.json({ id: req.params.id });
});

//@desc     create all DND
//@route    Post /api/recommendeddnp
//access    Public
const recommendedDnp = asyncHandler(async (req, res) => {});

module.exports = {
  getAllDnd,
  getSingleDnd,
  createDnd,
  updateDnd,
  deleteDnd,
  recommendedDnp,
};
