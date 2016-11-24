"use strict";
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

let routes = require('./routes/index');
// let users = require('./routes/users');

let app = express();

/**
 * mongoose init
 */
mongoose.connect('mongodb://127.0.0.1/blog');

// view engine setup
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
// app.use('/users', users);

app.use(function (req, res, next) {
  Object.assign(app.locals, {
    data: {
      cdnUrl: "http://210.211.99.29:3000"
    }
  });
  next();
});

module.exports = app;
