const { getOmdbData } = require("../helpers/search.helper");

exports.renderSearchResults = (req, res) => {
  if (req.query) {
    const { movieName } = req.query;

    getOmdbData(movieName, res);
  } else {
    const { movieName } = req.body;

    getOmdbData(movieName, res);
  }
};
