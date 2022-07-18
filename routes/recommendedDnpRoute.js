const express = require("express");
const router = express.Router();

const { recommendedDnp } = require("../controllers/dndControlles");

router.route("/").post(recommendedDnp);

module.exports = router;
