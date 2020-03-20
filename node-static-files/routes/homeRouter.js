const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.sendFile("index.html");
});

module.exports = homeRouter;
