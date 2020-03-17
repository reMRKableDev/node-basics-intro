require("dotenv").config(); // allows to read values from .env file

const express = require("express");
const peopleRouter = require("./routes/peopleRouter");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/api/people", peopleRouter);

app.listen(port, () => console.log(`We've got lift off on port: ${port}`));
