const { Router } = require("express");
const router = Router(); // representation of the home route
const newsletter =
  '<h1>Newsletter Signup</h1> <a href="/newsletter">Newsletter</a>';

router.get("/", (_, res) => res.status(200).send(newsletter)); // defining how we want our 'Router' object to handle a get request at '/' endpoint

module.exports = router;
