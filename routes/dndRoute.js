const express = require("express");
const router = express.Router();

const {
  getAllDnd,
  getSingleDnd,
  createDnd,
  updateDnd,
  deleteDnd,
} = require("../controllers/dndControlles");

router.route("/").get(getAllDnd).post(createDnd);

router.route("/:id").get(getSingleDnd).put(updateDnd).delete(deleteDnd);

module.exports = router;
