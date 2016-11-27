"use strict";
const express = require('express');
const router = express.Router();

/* GET home page. */
router.use('/', function(req, res, next) {
  res.sendfile('public/index.html');
});

module.exports = router;
