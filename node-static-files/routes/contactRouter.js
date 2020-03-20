const express = require("express");
const path = require("path");
const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

contactRouter.post("/", (req, res) => {
  res.redirect("/");
});

module.exports = contactRouter;
