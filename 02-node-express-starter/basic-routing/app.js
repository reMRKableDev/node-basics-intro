const express = require("express");
const port = 5000;

const app = express();

const sendFileHelper = (res, fileName) => res.sendFile(__dirname + fileName);

app.use(express.static("public"));

app.get("/home", (_, res) => sendFileHelper(res, "/views/index.html"));
app.get("/cat", (_, res) => sendFileHelper(res, "/views/cat-page.html"));

app.listen(port, console.log(`The application is running on port ${port}`));
