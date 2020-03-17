const express = require("express");
const newsRouter = express.Router();

newsRouter.get("/", (req, res) =>
  res
    .status(200)
    .send(
      '<form action="/newsletter" method="post"> <input type="email" name="email"> <input type="submit"> </form>'
    )
);

newsRouter.post("/", (req, res) =>
  res.json({ status: 200, email: req.body.email })
);

module.exports = { newsRouter };
