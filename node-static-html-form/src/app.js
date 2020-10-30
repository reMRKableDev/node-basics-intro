const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/", require("../routes/home.route"));
app.use("/newsletter", require("../routes/news.route"));

module.exports = app;
