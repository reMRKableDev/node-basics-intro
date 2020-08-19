const express = require("express");
const homeRouter = express.Router();

homeRouter.get("/", (req, res) => {
  res.render("index.ejs", { userName: req.query.name });
});

module.exports = homeRouter;
