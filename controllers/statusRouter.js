var express = require('express');
var router = express.Router();
var submitStatus = require('./submitStatus');

router.post('/', submitStatus);

module.exports = router;
