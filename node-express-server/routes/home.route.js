const { Router } = require("express");
const router = Router();

router.get("/", (_, res) => res.status(200).send("Hello from Express server!"));

module.exports = router;
