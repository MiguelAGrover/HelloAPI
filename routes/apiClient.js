var express = require('express');
var router = express.Router();
const pathPackage = require('path');

let routeBuilder = path => {

    router.get(`${path}`, (req, res) => {
        res.sendFile('apiClient.html', { root: pathPackage.join(__dirname, '../public') });
    });

    
    router.get(`${path}/example`, (req,res) => {
        res.json({'Mesagge':'Example'});
    });

    return router

}



module.exports = routeBuilder;