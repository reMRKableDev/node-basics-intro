const express = require("express");
const app = express();
const port = 3000;

const { homeRouter } = require("./routes/homeRouter");
const { postRouter } = require("./routes/postRouter");

app.use(express.json());
app.use("/", homeRouter);
app.use("/posts", postRouter);

app.listen(port, () => console.log(`I've got ears on port: ${port}`));
