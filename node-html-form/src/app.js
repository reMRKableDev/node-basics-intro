const express = require("express");
const app = express();

const { newsRouter } = require("../routes/news");

app.use(express.urlencoded({ extended: true }));
app.use("/", require("../routes/home.route"));
app.use("/newsletter", newsRouter);

module.exports = app;
