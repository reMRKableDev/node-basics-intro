const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true })); // translate with an incoming POST request what is inside req.body
app.use("/", require("../routes/home.route"));
app.use("/newsletter", require("../routes/news.route"));

module.exports = app;
