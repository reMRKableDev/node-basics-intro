const { Router } = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const router = Router();

const User = require("../models/User.model");

router.get("/signup", (req, res) => res.render("auth/signup"));

router.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  // Check for empty fields
  if (!username || !password) {
    res.render("auth/signup", { errorMessage: "Fields cannot be empty!" });
    return;
  }

  User.findOne({ username })
    .then((results) => {
      //Check if user exists
      if (results !== null) {
        res.render("auth/signup", {
          errorMessage: "This username already exists!",
        });
        return;
      }

      // If its a new user we need to:
      // Step 1: Hash the incoming password
      // Step 2: Create the new user

      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          const newUser = new User({
            username,
            password: hashedPassword,
          });

          newUser
            .save()
            .then(() => res.redirect("/"))
            .catch((err) => next(err));
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

router.get("/login", (req, res) => res.render("auth/login"));

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/private-page",
    failureRedirect: "/login",
  })
);

router.get("/private-page", (req, res) => {
  if (!req.user) {
    res.redirect("/login"); // not logged-in
    return;
  }

  // ok, req.user is defined
  res.render("private", { user: req.user });
});

module.exports = router;
