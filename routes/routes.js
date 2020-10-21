var express = require('express');
var router = express.Router();

var homepage = require('./homePage');
var hello = require('./hello');
var apiClient = require('./apiClient')

router.use(homepage('/'))
router.use(hello('/hello'));
router.use(apiClient('/apiClient'))

module.exports = router;