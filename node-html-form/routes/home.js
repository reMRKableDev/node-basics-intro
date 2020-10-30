const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) =>
  res
    .status(200)
    .send('<h1>Newsletter Signup</h1> <a href="/newsletter">Newsletter</a>')
);

module.exports = { homeRouter };
