const express = require("express");
const { renderWeather } = require("../controllers/weather.controller");

const router = express.Router();

router.get("/:lng/:lat", renderWeather);

module.exports = router;