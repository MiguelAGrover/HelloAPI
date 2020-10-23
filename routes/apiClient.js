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
        var longitud = Number((req.query.longitud) ? req.query.longitud : 113.17);
        var latitud = Number((req.query.latitud) ? req.query.latitud : 23.09);
        var product = (req.query.product) ? req.query.product : "civil";
        var output = (req.query.output) ? req.query.output : "json";
        var productList = ['civil', 'astro', 'civillight', 'meteo','two'];
        var outputList = ['json', 'xml']
        if(Number.isNaN(longitud)){
            {res.status(404).json({'ERR':'Longitud was not a number'})};
        }
        else if(Number.isNaN(latitud)){
            {res.status(404).json({'ERR':'Latitud was not a number'})};
        }
        else if(typeof product != 'string' || !productList.includes(product)){
            {res.status(404).json({'ERR':'Product was not one of the following values [civil, astro, civillight, meteo or two]'})};
        }
        else if(typeof output != 'string' || !outputList.includes(output)){
            {res.status(404).json({'ERR':'Output was not one of the following values[json, xml]'})};
        } else {
        result = getWeatherAPI(longitud,latitud,product,output)
                .then(data => {
                    res.json(data)
                })
                .catch(err => {res.status(404).json(err)})
        }
    });

    router.get(`${path}/nationalize`, (req,res) => {
        var name = (req.query.name) ? req.query.name : "wizeline";
        if(typeof name != 'string'){
            {res.status(404).json({'ERR':'Name was not an string'})};
        }
        result = getNationalizeAPI(name)
                .then(data => {
                    res.json(data)
                })
                .catch(err => console.log(err))
    });

    return router

}

module.exports = routeBuilder;