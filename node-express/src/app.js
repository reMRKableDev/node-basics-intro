const express = require("express");
const app = express();

const { homeRouter } = require("../routes/homeRouter");
const { postRouter } = require("../routes/postRouter");

app.use(express.json());
app.use("/", homeRouter);
app.use("/posts", postRouter);

module.exports = app;
