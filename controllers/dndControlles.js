const asyncHandler = require("express-async-handler");
let javascriptLpSolver = require("javascript-lp-solver");
const Dnd = require("../models/DndModel");

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
  console.log(req.body.dnd);
  res.status(201).json({ success: true, data: dnd });
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
