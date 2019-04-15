var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let mongoose = require('mongoose');

var pokemon = require('./routes/pokemon');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

mongoose.connect('mongodb://localhost/poke');
var db = mongoose.connection;

app.use('/api/pokeapi', pokemon);

module.exports = app;
