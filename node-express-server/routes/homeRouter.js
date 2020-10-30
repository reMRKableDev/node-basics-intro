const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => res.status(200).send("My Blog App"));

module.exports = {
  homeRouter
};
