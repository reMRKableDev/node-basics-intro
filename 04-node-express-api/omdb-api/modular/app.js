require("dotenv").config();

const hbs = require("hbs");
const path = require("path");
const morgan = require("morgan");
const express = require("express");
const app = express();
const PORT = 5000;

// View engine setup
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/", require("./routes/home.route"));
app.use("/searchResults", require("./routes/search.route"));
app.use("/movie", require("./routes/movie.route"));

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
