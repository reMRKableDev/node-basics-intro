const express = require("express");
const hbs = require("hbs");
const path = require("path");
const morgan = require("morgan");

const homeRouter = require("../routes/home.routes");
const weatherRouter = require("../routes/weather.routes");

const app = express();

// Static files
app.use(express.static("public"));
app.use(morgan("dev"));

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

// Setting to use routes
app.use("/", homeRouter);
app.use("/", weatherRouter);

module.exports = app;
