/*
There are four parameters that need to be set to successfully call the API: 
lon and lat for geographic coordinate of the location, Latitudes range from -90 to 90, and longitudes range from -180 to 80
product for the product you wish to use (any of "astro", "civil", "civillight", "meteo" or "two"), 
and output for the standard you wish to use (either "xml" or "json").
*/
const axios = require('axios');
const { response } = require('express');

let getWeatherAPI = function getWeather(longitud,latitud,product,output){
        const promise = axios.get('http://www.7timer.info/bin/api.pl', {
        params: {
        lon: longitud,
        lat: latitud,
        product: product,
        output:output
        }
        })

        const dataPromise = promise.then((response) => response.data)

        return dataPromise
    }


module.exports = getWeatherAPI;