const { Router } = require("express");
const router = Router();

const { isPostValid } = require("../helpers/isPostValid.helper");
const { myPosts } = require("../data/postData");

router.get("/", (_req, res) => res.status(200).send(myPosts));

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundPost = myPosts.find((post) => post.id == id);

  foundPost
    ? res.status(200).send(foundPost)
    : res.status(400).json({ error: "Post Not Found!" });
});

router.post("/new", (req, res) => {
  const userInput = req.body;

  if (isPostValid(userInput)) {
    userInput.id = myPosts.length + 1;
    myPosts.push(userInput);
    res.status(201).send(myPosts);
  } else {
    res
      .status(400)
      .json({ error: "Post isn't valid, please review and resubmit!" });
  }
});

module.exports = router;
