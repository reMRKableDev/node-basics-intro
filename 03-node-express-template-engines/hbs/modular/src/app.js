const express = require("express");
const hbs = require("hbs");
const path = require("path");

const homeRouter = require("../routes/home.routes");
const playerRouter = require("../routes/players.routes");
const teamRouter = require("../routes/teams.routes");

const app = express();

// Static files
app.use(express.static("public"));

hbs.registerPartials(__dirname + "../../views/partials");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));

// Setting to use routes
app.use("/", homeRouter);
app.use("/players", playerRouter);
app.use("/teams", teamRouter);

module.exports = app;
