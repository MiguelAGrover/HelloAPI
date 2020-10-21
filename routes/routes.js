var express = require('express');
var router = express.Router();

var homepage = require('./homepage');
var hello = require('./hello');

router.use(homepage('/'))
router.use(hello('/hello'));  

module.exports = router;