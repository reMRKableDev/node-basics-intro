const express = require("express");
const router = express.Router();

/* GET home page */
router.get("/", (_req, res) => {
  res.render("index");
});

module.exports = router;
