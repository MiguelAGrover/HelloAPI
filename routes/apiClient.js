var express = require('express');
var pathPackage = require('path');
var getWeatherAPI = require('../utilities/weatherAPI')
var getNationalizeAPI = require('../utilities/nationalizeAPI')
var router = express.Router();

let routeBuilder = path => {

    router.get(`${path}`, (req, res) => {
        res.sendFile('apiClient.html', { root: pathPackage.join(__dirname, '../public') });
    });

    
    router.get(`${path}/example`, (req,res) => {
        res.json({'Mesagge':'Example'});
    });

    router.get(`${path}/weather`, (req,res) => {
        longitud = req.query.longitud;
        latitud = req.query.latitud;
        product = req.query.product;
        output = req.query.output;
        result = getWeatherAPI(longitud,latitud,product,output)
                .then(data => {
                    res.json(data)
                })
                .catch(err => console.log(err))
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