const express = require("express");
const path = require("path");
const contactRouter = express.Router();

contactRouter.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/contact.html"));
});

contactRouter.post("/", (req, res) => {
  const { name } = req.body;
  res.status(200).json({ contactName: name });
});

module.exports = contactRouter;
