const express = require("express");

const { renderPlayers } = require("../controllers/players.controller");

const router = express.Router();

router.get("/", renderPlayers);

module.exports = router;
