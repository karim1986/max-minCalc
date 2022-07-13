const asyncHandler = require("express-async-handler");

//@desc     Get all DND
//@route    Get /api/dnd
//access    Public
const getAllDnd = asyncHandler(async (req, res) => {});

//@desc     Get all DND
//@route    Get /api/dnd/:id
//access    Public
const getSingleDnd = asyncHandler(async (req, res) => {});

//@desc     Get all DND
//@route    Post /api/dnd
//access    Privat
const createDnd = asyncHandler(async (req, res) => {});

//@desc     Get all DND
//@route    Put /api/dnd/:id
//access    Public
const updateDnd = asyncHandler(async (req, res) => {});

//@desc     Get all DND
//@route    Delete /api/dnd
//access    Public
const deleteDnd = asyncHandler(async (req, res) => {});

module.exports = {
  getAllDnd,
  getSingleDnd,
  createDnd,
  updateDnd,
  deleteDnd,
};
