var express = require('express');
var router = express.Router();
const pathPackage = require('path');

let routeBuilder = path => {

    router.get(`${path}`, (req, res) => {
        res.status(200).sendFile('index.html', { root: pathPackage.join(__dirname, '../public') });
    });

    router.get(`${path}contact`, (req, res) => {
        res.status(200).sendFile('contact.html', { root: pathPackage.join(__dirname, '../public') });
    });

    return router

}

module.exports = routeBuilder;