const express = require("express");
const postRouter = express.Router();

const { isPostValid } = require("../helpers/helperFunctions");
const { myPosts } = require("../data/postData");


postRouter.get("/", (req, res) => res.status(200).send(myPosts));
postRouter.get("/:id", (req, res) => {
  const foundPost = myPosts.find(post => post.id == req.params.id);

  foundPost
    ? res.status(200).send(foundPost)
    : res.status(400).json({ error: "Post Not Found!" });
});

postRouter.post("/new", (req, res) => {
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

module.exports = { postRouter };
