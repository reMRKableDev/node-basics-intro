const express = require("express");
const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.render("contact");
});

contactRouter.post("/", (req, res) => {
  res.redirect("/?name=" + req.body.userName);
});

module.exports = contactRouter;
