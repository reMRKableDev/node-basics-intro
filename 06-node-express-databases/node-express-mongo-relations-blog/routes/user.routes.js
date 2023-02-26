const express = require("express");
const router = express.Router();

const User = require("../models/User.model");

// ****************************************************************************************
// GET route to display the form to "register" a user
// ****************************************************************************************

router.get("/user-create", (_req, res) => res.render("users/create"));

// ****************************************************************************************
// POST route to submit the form to create a user
// ****************************************************************************************

router.post("/user-create", (req, res) => {
  const { username } = req.body;
  User.findOne({ username })
    .then((userDocFromDB) => {
      if (!userDocFromDB) {
        // prettier-ignore
        User.create({ username })
        .then(() => res.redirect('/post-create'));
      } else {
        res.render("users/create", {
          message: "It seems you are already registered. ☀️",
        });
        return;
      }
    })
    .catch((err) => console.error(`Error while creating a new user: ${err}`));
});

// ****************************************************************************************
// GET route to display all users from the DB
// ****************************************************************************************

router.get("/users", (_req, res) => {
  User.find() // <-- .find() method gives us always an ARRAY back
    .then((usersFromDB) => res.render("users/list", { users: usersFromDB }))
    .catch((err) =>
      console.error(`Error while getting users from the DB: ${err}`)
    );
});

// ****************************************************************************************
// GET details of a specific user (primarily their posts)
// ****************************************************************************************

router.get("/users/:userId/posts", (req, _res) => {
  const { userId } = req.params;

  User.findById(userId)
    .populate("posts")
    .then((userFromDB) => console.log(userFromDB))
    .catch((err) => `Error while getting user from the DB: ${err}`);
});

module.exports = router;
