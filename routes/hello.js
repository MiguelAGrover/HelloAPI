var express = require('express');
var router = express.Router();

let routeBuilder = path => {

  router.get(`${path}`, (req, res) => {
    res.send(`Hello,World`);
  });

  return router

}

module.exports = routeBuilder;