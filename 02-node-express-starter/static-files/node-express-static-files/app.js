const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", require("./routes/home.routes"));
app.use("/contact", require("./routes/contact.routes"));

module.exports = app;
