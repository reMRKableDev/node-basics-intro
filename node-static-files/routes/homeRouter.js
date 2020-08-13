const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.status(200).sendFile("index.html");
});

module.exports = homeRouter;
