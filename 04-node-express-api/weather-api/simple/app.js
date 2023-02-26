const express = require("express");
const axios = require("axios");
const path = require("path");
const morgan = require("morgan");
const cities = require("cities.json");
const countries = require("./data/country-by-abbreviation.json");
const port = 5000;

const app = express();

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  // sort cities alphabetically
  const sortedCities = cities.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  //map country name to cities
  const citiesAndCountries = sortedCities.map((city) => {
    const country = countries.find(
      (country) => city.country === country.abbreviation
    );

    return {
      name: city.name,
      country,
      lng: city.lng,
      lat: city.lat,
    };
  });

  res.render("index", { cities: citiesAndCountries });
});

app.get("/:lng/:lat", (req, res) => {
  const { lng, lat } = req.params;

  axios
    .get(
      `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${lat},${lng}`
    )
    .then((weatherData) => {
      const currentWeather = weatherData.data.currently;
      res.render("index", { weather: currentWeather });
    })
    .catch((err) => console.error(err));
});

app.listen(port, console.log(`Server is running on port: ${port}`));
