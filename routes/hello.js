var express = require('express');
var router = express.Router();
const pathPackage = require('path');

/*

    This file create the routes to the hello world endpoint

*/

let routeBuilder = path => {

    router.get(`${path}`, (req, res) => {
        res.status(200).sendFile('hello.html', { root: pathPackage.join(__dirname, '../public') });
    });

    return router

}

module.exports = routeBuilder;