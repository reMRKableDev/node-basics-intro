require("dotenv").config();
const path = require("path");
const express = require("express");
const createError = require("http-errors");
const logger = require("morgan");
const favicon = require("serve-favicon");
const cookieParser = require("cookie-parser");

// Set up the database
require("./configs/db.config");

const app = express();

// Express View engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// Include session to application
require("./configs/sessions.config")(app);

/* const sessionConnect = require("./configs/sessions.config");
sessionConnect(app); */

app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

 

// Routes middleware
app.use("/", require("./routes/index.routes"));
app.use("/", require("./routes/auth.routes"));

// Catch missing routes and forward to error handler
app.use((req, res, next) => next(createError(404)));

// Catch all error handler
app.use((error, req, res) => {
  // Set error information, with stack only available in development
  res.locals.message = error.message;
  res.locals.error = req.app.get("env") === "development" ? error : {};

  // render the error page
  res.status(error.status || 500);
  res.render("error");
});

module.exports = app;
