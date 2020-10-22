var express = require('express');
var pathPackage = require('path');
var getWeatherAPI = require('../utilities/weatherAPI')
var getNationalizeAPI = require('../utilities/nationalizeAPI')
var router = express.Router();

let routeBuilder = path => {

    router.get(`${path}`, (req, res) => {
        res.sendFile('apiClient.html', { root: pathPackage.join(__dirname, '../public') });
    });

    router.get(`${path}/weather`, (req,res) => {
        console.log(req.query.longitud)
        var longitud = (req.query.longitud) ? req.query.longitud : 113.17;
        var latitud = (req.query.latitud) ? req.query.latitud : 23.09;
        var product = (req.query.product) ? req.query.product : "civil";
        var output = (req.query.output) ? req.query.output : "json";

        result = getWeatherAPI(longitud,latitud,product,output)
                .then(data => {
                    res.json(data)
                })
                .catch(err => {res.status(404).json(err)})
    });

    router.get(`${path}/nationalize`, (req,res) => {
        name = req.query.name;
        result = getNationalizeAPI(name)
                .then(data => {
                    res.json(data)
                })
                .catch(err => console.log(err))
    });

    return router

}

module.exports = routeBuilder;