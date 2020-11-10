const bcrypt = require("bcrypt");
const { Router } = require("express");
const User = require("../models/User.model");

const router = new Router();
const saltRounds = 10;

// 2. GET route ==> to display the signup form to users
router.get("/signup", (req, res) => res.render("auth/signup"));

// 3. POST route ==> to process form data (don't forget to hash the password with bcrypt ;{)
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;

  bcrypt
    .hash(password, saltRounds)
    .then((hashedPassword) =>
      User.create({ username, email, passwordHash: hashedPassword }).then(
        (userFromDB) => {
          console.log("Newly created user is: ", userFromDB);
          res.redirect("/userProfile");
        }
      )
    )
    .catch((error) => next(error));
});

// 4. GET route ==> to render the profile page of the user
router.get("/userProfile", (req, res) => res.render("users/user-profile"));

module.exports = router;
