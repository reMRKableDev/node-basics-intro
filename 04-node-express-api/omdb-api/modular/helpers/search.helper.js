const axios = require("axios");
const { OMDB_API_Key } = process.env;

exports.getOmdbData = (movieName, res) =>
  axios
    .get(`http://www.omdbapi.com/?apikey=${OMDB_API_Key}&s=${movieName}`)
    .then((OMDBResponse) => {
      const { Search, totalResults } = OMDBResponse.data;

      res.render("search-results", { movieName, Search, totalResults });
    })
    .catch((error) => console.log(error));
