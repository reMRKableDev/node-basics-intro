const { Router } = require("express");
const { renderSearchResults } = require("../controllers/search.controller");

const router = Router();

router.get("/", renderSearchResults);

router.post("/", renderSearchResults);

module.exports = router;
