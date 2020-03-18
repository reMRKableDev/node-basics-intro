const express = require("express");
const app = express();

const { homeRouter } = require("../routes/home");
const { newsRouter } = require("../routes/news");

app.use(express.urlencoded({ extended: true }));
app.use("/", homeRouter);
app.use("/newsletter", newsRouter);

module.exports = app;
