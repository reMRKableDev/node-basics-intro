const express = require("express");
const hbs = require("hbs");
const path = require("path");
const morgan = require("morgan");
const PunkAPIWrapper = require("punkapi-javascript-wrapper");
const port = 5000;

const app = express();
const punkAPI = new PunkAPIWrapper();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  // Using punkAPi
  punkAPI
    .getBeers()
    .then((beerResults) => {
      res.render("index", { beerResults });
    })
    .catch((err) => console.error(err));
});

app.listen(port, console.log(`Server is running on port: ${port}`));
