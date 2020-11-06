const { Router } = require("express");
const { renderMovieResult } = require("../controllers/movie.controller");

const router = Router();

router.get("/:movieId", renderMovieResult);

module.exports = router;
