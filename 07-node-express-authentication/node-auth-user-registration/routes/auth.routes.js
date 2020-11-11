const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const { Router } = require("express");
const User = require("../models/User.model");

const router = new Router();
const saltRounds = 10;

// 2. GET route ==> to display the signup form to users.
router.get("/signup", (req, res) => res.render("auth/signup"));

// 3. POST route ==> to process form data (don't forget to hash the password with bcrypt ;{ )
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  // Validate that incoming data is not empty
  if (!username || !email || !password) {
    if (password !== /^\S+@\S+\.\S+$/) {
      res.render("auth/signup", {
        validationError: "Please use a valid email address.",
        errorMessage:
          "All fields are mandatory. Please provide your username, email and password.",
        username,
        email,
      });
    }
    return;
  }

  // make sure passwords are strong:
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

  if (!regex.test(password)) {
    res.status(500).render("auth/signup", {
      email,
      username,
      errorMessage:
        "Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
    return;
  }

  // First use bcrypt to hash incoming password
  bcrypt
    .hash(password, saltRounds)
    // Create new user with the hashed password
    .then((hashedPassword) =>
      User.create({ username, email, passwordHash: hashedPassword })
        .then((newUser) => {
          console.log(newUser);
          res.redirect("/user-profile");
        })
        .catch((error) => {
          if (error instanceof mongoose.Error.ValidationError) {
            res
              .status(500)
              .render("auth/signup", { validationError: error.message });
          } else if (error.code === 11000) {
            res.status(500).render("auth/signup", {
              errorMessage:
                "Username and email need to be unique. Either username or email is already used.",
            });
          } else {
            next(error);
          }
        })
    )
    .catch((err) => next(err));
});

// 4. GET route ==> to render the profile page of the user.
router.get("/user-profile", (req, res) => {
  res.render("users/user-profile");
});

module.exports = router;
