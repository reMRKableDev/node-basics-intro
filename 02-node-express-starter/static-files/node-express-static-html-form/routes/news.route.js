const { Router } = require("express");
const router = Router();
const formElement =
  '<form action="/newsletter" method="post"> <input type="email" name="email"> <input type="submit"> </form>';

router.get("/", (_, res) => res.status(200).send(formElement));

router.post("/", (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  res.status(200).json({ status: 200, email });
});

module.exports = router;
