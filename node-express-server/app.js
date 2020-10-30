const express = require("express");
const app = express();

const { postRouter } = require("./routes/postRouter");

app.use(express.json());
app.use("/", require("./routes/home.route"));
app.use("/posts", postRouter);

module.exports = app;
