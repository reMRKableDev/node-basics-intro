const express = require("express");

const {
  renderContact,
  redirectName,
} = require("../controllers/contact.controllers");

const router = express.Router();

router.get("/", renderContact);

router.post("/", redirectName);

module.exports = router;
