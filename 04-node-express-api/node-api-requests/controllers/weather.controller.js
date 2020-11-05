const axios = require("axios");

exports.renderWeather = (req, res) => {
    const {lng, lat} = req.params;

    axios.get(`https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/${lat},${lng}`)
        .then(weatherData => {
            const currentWeather = weatherData.data.currently;
            console.log(currentWeather)
            res.render("index", { weather: currentWeather });
        })
        .catch(err => console.error(err))    
}