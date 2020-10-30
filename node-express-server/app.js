const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/home.route"));
app.use("/posts", require("./routes/post.route"));

module.exports = app;
