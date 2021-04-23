require("dotenv").config();

const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const logger = require("morgan");
const path = require("path");

const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("./models/User.model");
const LocalStrategy = require("passport-local").Strategy;

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

// database config
require("./configs/db.config");

// session config
require("./configs/session.config")(app);

// Middleware Setup
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

// Passport serialize
passport.serializeUser((user, callback) => {
  callback(null, user._id);
});

// Passport deserialize
passport.deserializeUser((id, callback) => {
  User.findById(id)
    .then((user) => callback(null, user))
    .catch((err) => callback(err));
});

// Passport LocalStrategy
/* passport.use(
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
); */

// Express View engine setup

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Express - Generated with IronGenerator";

app.use("/", require("./routes/index"));
app.use("/", require("./routes/auth.routes"));

module.exports = app;
