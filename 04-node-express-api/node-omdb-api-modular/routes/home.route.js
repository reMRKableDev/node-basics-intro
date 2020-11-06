const { Router } = require("express");
const { renderIndexView } = require("../controllers/home.controller");

const router = Router();

router.get("/", renderIndexView);

module.exports = router;
