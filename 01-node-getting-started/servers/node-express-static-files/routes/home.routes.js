const express = require("express");

const { readIndexHtml } = require("../controllers/home.controllers");

const router = express.Router();

router.get("/", readIndexHtml);

module.exports = router;
