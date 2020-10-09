const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser')

const app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

/* Rutas API */
const UserRoutes = require('./bin/routes/UserRoute')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public')));

/** Configuration */

app.use('/api', UserRoutes)
app.use('/api/healthcheck', require('express-healthcheck')());

module.exports = app;