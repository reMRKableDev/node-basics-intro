const express = require("express");

const { renderTeams } = require("../controllers/teams.controller");

const router = express.Router();

router.get("/", renderTeams);

module.exports = router;
