const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => res.send("My Blog App"));

module.exports = {
  homeRouter
};
