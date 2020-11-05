const { Router } = require("express");
const router = Router();
const newsletter =
  '<h1>Newsletter Signup</h1> <a href="/newsletter">Newsletter</a>';

router.get("/", (_, res) => res.status(200).send(newsletter));

module.exports = router;
