const express = require("express");
const {
  readContactHtml,
  createName,
} = require("../controllers/contact.controllers");

const router = express.Router();

router.get("/", readContactHtml);

router.post("/", createName);

module.exports = router;
