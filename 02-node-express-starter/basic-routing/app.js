const express = require("express");
const port = 5000;

const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");

app.get("/cat", (req, res) => {
  res.sendFile(__dirname + "/views/cat-page.html");
});

app.listen(port, console.log(`The application is running on port ${port}`));
