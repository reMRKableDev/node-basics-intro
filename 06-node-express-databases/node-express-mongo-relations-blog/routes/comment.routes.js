const express = require("express");
const router = express.Router();

const User = require("../models/User.model");
const Post = require("../models/Post.model");
const Comment = require("../models/Comment.model");

// ****************************************************************************************
// POST route - create a comment of a specific post
// ****************************************************************************************

router.post("/posts/:postId/comment", (req, res) => {
  const { postId } = req.params;
  const { author, content } = req.body;

  let user;

  User.findOne({ username: author })
    .then((userDocFromDB) => {
      user = userDocFromDB;

      // 1. if commenter is not user yet, let's register him/her as a user
      if (!userDocFromDB) {
        return User.create({ username: author });
      }
    })
    .then((newUser) => {
      Post.findById(postId)
        .then(dbPost => {
          let newComment;
  
          // 2. the conditional is result of having the possibility that we have already existing or new users
          if (newUser) {
            newComment = new Comment({ author: newUser._id, content });
          } else {
            newComment = new Comment({ author: user._id, content });
          }
  
          // 3. when new comment is created, we save it ...
          newComment
          .save()
          .then(dbComment => {
  
            // ... and push its ID in the array of comments that belong to this specific post
            dbPost.comments.push(dbComment._id);
  
            // 4. after adding the ID in the array of comments, we have to save changes in the post
            dbPost
              .save()       // 5. if everything is ok, we redirect to the same page to see the comment
              .then(updatedPost => res.redirect(`/posts/${updatedPost._id}`))
          });
        });
    })
    .catch((err) => console.log(`Error while creating the comment: ${err}`));
});

module.exports = router;
