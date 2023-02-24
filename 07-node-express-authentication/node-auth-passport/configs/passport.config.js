const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/User.model");

// Serialize --> it helps determine which data of a user object should be stored in the session.

passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize --> it helps to retrieve the object that corresponds with the value we've passed on in the session.
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => done(null, user))
    .catch((err) => done(err));
});

/* 
    Local Strategy --> Helps authenticate using a username and password.
*/
passport.use(
  new LocalStrategy(
    {
      usernameField: "username", // by default
      passwordField: "password", // by default
    },
    (username, password, done) => {
      User.findOne({ username })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Incorrect username" });
          }

          if (!bcrypt.compareSync(password, user.password)) {
            return done(null, false, { message: "Incorrect password" });
          }

          done(null, user);
        })
        .catch((err) => done(err));
    }
  )
);
