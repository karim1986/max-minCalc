const express = require("express");
const router = express.Router();

const {
  getAllDnd,
  getSingleDnd,
  createDnd,
  updateDnd,
  deleteDnd,
} = require("../controllers/dndControlles");

module.exports = router;
