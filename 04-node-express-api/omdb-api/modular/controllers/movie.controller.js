const axios = require("axios");
const { OMDB_API_Key } = process.env;

exports.renderMovieResult = (req, res) => {
  console.log(req);
  const { movieId } = req.params;

  axios
    .get(`http://www.omdbapi.com/?apikey=${OMDB_API_Key}&i=${movieId}`)
    .then((OMDBMovie) => {
      const movie = OMDBMovie.data;

      res.render("movie", { movie });
    })
    .catch((error) => console.log(error));
};
