const express = require("express");
const router = express.Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");

// ****************************************************************************************
// GET route to display the form to create a new post
// ****************************************************************************************

router.get("/post-create", (req, res) => {
  User.find()
    .then((dbUsers) => {
      res.render("posts/create", { dbUsers });
    })
    .catch((err) =>
      console.error(`Err while displaying post input page: ${err}`)
    );
});

// ****************************************************************************************
// POST route to submit the form to create a post
// ****************************************************************************************

// <form action="/post-create" method="POST">
router.post("/post-create", (req, res) => {
  const { title, content, author } = req.body;

  Post.create({ title, content, author })
    .then((dbPost) =>
      User.findByIdAndUpdate(author, { $push: { posts: dbPost._id } })
    )
    .then(() => res.redirect("/posts"))
    .catch((err) =>
      console.error(`Err while creating the post in the DB: ${err}`)
    );
});

// ****************************************************************************************
// GET route to display all the posts
// ****************************************************************************************

router.get("/posts", (req, res) => {
  Post.find()
    .populate("author") // --> we are saying: give me whole user object with this ID (author represents an ID in our case)
    .then((dbPosts) => {
      console.log(dbPosts);
      res.render("posts/list", { posts: dbPosts });
    })
    .catch((err) =>
      console.error(`Err while getting the posts from the DB: ${err}`)
    );
});

// ****************************************************************************************
// GET route for displaying the post details page
// shows how to deep populate (populate the populated field)
// ****************************************************************************************

router.get("/posts/:postId", (req, res) => {
  const { postId } = req.params;

  Post.findById(postId)
    .populate("author comments")
    .populate({
      // we are populating author in the previously populated comments
      path: "comments",
      populate: {
        path: "author",
        model: "User",
      },
    })
    .then((foundPost) => res.render("posts/details", foundPost))
    .catch((err) =>
      console.error(`Err while getting a single post from the  DB: ${err}`)
    );
});

module.exports = router;
