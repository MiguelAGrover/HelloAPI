var express = require('express');
var router = express.Router();
const pathPackage = require('path');

let routeBuilder = path => {

  router.get(`${path}`, (req, res) => {
    res.sendFile('index.html', { root: pathPackage.join(__dirname, '../public') });
  });

  return router

}

module.exports = routeBuilder;