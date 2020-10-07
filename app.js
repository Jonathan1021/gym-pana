var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser')

var app = express();

/* Rutas API */
const UserRoutes = require('./bin/routes/UserRoute')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/** Configuration */

app.use('/api', UserRoutes)
app.use('/api/healthcheck', require('express-healthcheck')());

module.exports = app;
