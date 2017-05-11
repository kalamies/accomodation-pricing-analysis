/*
* Copyright 2017 JJJ
*/

'use strict';

// Imports
const firebase = require('firebase-admin');
const express = require('express');
const Promise = require('promise');
const mongoose = require('mongoose');

const app = express();

// ENV
const env = process.env.NODE_ENV || 'dev';

// process.env vars
if (env === 'dev') require('dotenv').load();

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3500');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Connect to mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://' + process.env.MONGODB_USER + ':' + process.env.MONGODB_PW + '@' + process.env.MONGODB_HOST_PORT + '/' + process.env.MONGODB_DB);

// Correct mongoose schema not mandatory while using for read only purposes
const SoldDb = mongoose.model('Sold-item', new mongoose.Schema({}));

// Routes
require('./server/modules/routes/routes.js')(app, SoldDb);

app.listen(3000, () => {
  console.log('localhost:3000!');
});
