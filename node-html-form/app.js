const express = require("express");
const app = express();
const port = 3000;

const { homeRouter } = require("./routes/home");
const { newsRouter } = require("./routes/news");

app.use(express.urlencoded({ extended: true }));
app.use("/", homeRouter);
app.use("/newsletter", newsRouter);

app.listen(port, () => console.log(`Got eyes and ears on port: ${port}`));
