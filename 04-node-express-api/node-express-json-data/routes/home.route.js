const { Router } = require("express");
const router = Router();

router.get("/", (_req, res) => res.status(200).send("My Blog App"));

module.exports = router;
