const hbs = require("hbs"); // Views
const path = require("path"); // joins two directories or files
const axios = require("axios"); // make calls to external APIs
const morgan = require("morgan"); // logger, show on the terminal which route was recently called
const express = require("express"); // used to make express server + application
const app = express();
const PORT = 8000;
require("dotenv").config(); // Loads the values from .env file to process.env

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // get form data from the client to the server
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.render("index");
});

app.get("/searchResults", (req, res) => {
  // req.query --> Query String
  console.log("req.query", req.query);
  const { movieName } = req.query; // --> const movieName = req.query.movieName
  const lowercaseMovieName = movieName.toLowerCase();

  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_Key}&s=${lowercaseMovieName}&page=1-2`
    )
    .then((OMDBResponse) => {
      const { Search, totalResults } = OMDBResponse.data;

      res.render("search-results", { movieName, Search, totalResults });
    })
    .catch((error) => console.log(error));
});

app.get("/movie/:movieId", (req, res) => {
  console.log(req.params);
  const { movieId } = req.params;

  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_Key}&i=${movieId}`
    )
    .then((OMDBMovie) => {
      console.log(OMDBMovie.data);
      const movie = OMDBMovie.data;

      res.render("movie", { movie });
    })
    .catch((error) => console.log(error));
});

app.post("/searchResults", (req, res) => {
  const { movieName } = req.body;

  axios
    .get(
      `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_Key}&s=${movieName}&page=10`
    )
    .then((OMDBResponse) => {
      const { Search, totalResults } = OMDBResponse.data;

      res.render("search-results", { movieName, Search, totalResults });
    })
    .catch((error) => console.log(error));
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
