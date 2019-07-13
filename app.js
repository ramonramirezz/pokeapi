const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
let mongoose = require('mongoose');

const pokemon = require('./routes/pokemon');
const actor = require('./routes/actor');



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

mongoose.connect('mongodb://localhost/poke', { useNewUrlParser: true });
const db = mongoose.connection;

app.use('/api/pokeapi', pokemon);
app.use('/api/actorapi', actor);

module.exports = app;
