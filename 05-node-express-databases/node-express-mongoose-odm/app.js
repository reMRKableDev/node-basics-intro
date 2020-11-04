const express = require("express");
const morgan = require("morgan");
const port = 5000;
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => res.send("Hello"));

app.listen(port, console.log(`Server 🏃‍♂️ on port: ${port}`));
