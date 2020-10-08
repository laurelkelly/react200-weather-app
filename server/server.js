require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
// const { min } = require('lodash');
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(cors());

app.get('/search/:city', (req, res) => {
    const cityName = req.params.city;
    // console.log(cityName);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=imperial`)
        .then((response) => { 
            // console.log(response.data);
            const cleanedUpData = {
                name: cityName,
                icon: response.data.weather[0].icon,
                latitude: response.data.coord.lat,
                longitude: response.data.coord.lon,
                temperature: response.data.main.temp,
                pressure: response.data.main.pressure,
                humidity: response.data.main.humidity,
                lowestTemp: response.data.main.temp_min,
                highestTemp: response.data.main.temp_max,
                windSpeed: response.data.wind.speed
            }
            // console.log(cleanedUpData);
            res.status(200).send(cleanedUpData);
        })
        .catch(err => console.log(err));
});

module.exports = app;
